export function MoveEvents(
  callback: CallableFunction,
  $buttons: NodeListOf<HTMLButtonElement>
) {
  document.addEventListener("keyup", (event: KeyboardEvent) => {
    if (
      ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)
    ) {
      const directionKey = event.key.replace("Arrow", "").toLowerCase();

      callback(directionKey);
    }
  });

  Object.keys($buttons).map((buttonKey: any) => {
    const $button = $buttons[buttonKey];
    const directionKey = $button.getAttribute("data-direction") ?? "";

    $button.addEventListener("click", () => {
      callback(directionKey);
    });
  });
}
