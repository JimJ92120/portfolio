import "./style.css";

import App from "./App";

import Renderer from "./engine/Renderer";
import Engine from "./engine";

import frameRecord from "./frames";
import config from "./config";

document.addEventListener("DOMContentLoaded", () => {
  const app = new App(document.querySelector("#app")!);
  app.render();

  const renderer = new Renderer(
    app.$container.querySelector(".scene")!,
    app.$container.querySelector(".prompt")!,
    config.tileSize
  );

  const engine = new Engine(renderer, frameRecord);
  const moveEventCallback = (directionKey: string): void => {
    let direction: [number, number] = [0, 0]; // [x, y]

    switch (directionKey) {
      case "up":
        direction = [0, -1];
        break;

      case "down":
        direction = [0, 1];
        break;

      case "left":
        direction = [-1, 0];
        break;

      case "right":
        direction = [1, 0];
        break;
    }

    if (0 !== direction[0] || 0 !== direction[1]) {
      engine.movePlayer(direction) && engine.render();
    }
  };

  engine.render();

  // events
  document.addEventListener("keyup", (event: KeyboardEvent) => {
    if (
      ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)
    ) {
      const directionKey = event.key.replace("Arrow", "").toLowerCase();

      moveEventCallback(directionKey);
    }
  });

  const directionButtons = app.$container.querySelectorAll(".direction-button");

  Object.keys(directionButtons).map((buttonKey: any) => {
    const $button = directionButtons[buttonKey];
    const directionKey = $button.getAttribute("data-direction") ?? "";

    $button.addEventListener("click", () => {
      moveEventCallback(directionKey);
    });
  });
});
