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

  engine.render();

  //
  document.addEventListener("keyup", (event: KeyboardEvent) => {
    let direction: [number, number] = [0, 0]; // [x, y]

    switch (event.key) {
      case "ArrowUp":
        direction = [0, -1];
        break;

      case "ArrowDown":
        direction = [0, 1];
        break;

      case "ArrowLeft":
        direction = [-1, 0];
        break;

      case "ArrowRight":
        direction = [1, 0];
        break;
    }

    if (0 !== direction[0] || 0 !== direction[1]) {
      engine.movePlayer(direction) && engine.render();
    }
  });
});
