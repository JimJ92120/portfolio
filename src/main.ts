import "./style.css";

import App from "./App";

import Renderer from "./engine/Renderer";
import Engine from "./engine";

import frameRecord from "./frames";
import config from "./config";
import player from "./player";
import { PlayerDirection } from "./engine/Player";

document.addEventListener("DOMContentLoaded", async () => {
  const app = new App(document.querySelector("#app")!);
  app.render();

  const { width, height } = window.screen;
  let size = height <= width ? height : width;

  if (config.maxSceneSize < size) {
    size = config.maxSceneSize;
  }

  const renderer = new Renderer(
    app.$container.querySelector(".scene")!,
    app.$container.querySelector(".prompt")!,
    [size / config.frameSize[0], size / config.frameSize[1]]
  );

  const engine = new Engine(
    renderer,
    frameRecord,
    player,
    document.querySelector("#content")!
  );

  await engine.loadAssets();
  engine.render();

  const moveEventCallback = (directionKey: string): void => {
    let direction: PlayerDirection | null = null;

    switch (directionKey) {
      case "up":
        direction = PlayerDirection.Up;
        break;

      case "down":
        direction = PlayerDirection.Down;
        break;

      case "left":
        direction = PlayerDirection.Left;
        break;

      case "right":
        direction = PlayerDirection.Right;
        break;
    }

    if (null !== direction) {
      engine.movePlayer(direction);
      engine.render();
    }
  };

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
