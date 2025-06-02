import "./style.css";

import App from "./App";

import Renderer from "./Renderer";
import Frame from "./Frame";
import Player from "./Player";
import Engine, { FrameRecord } from "./Engine";

const TILE_SIZE: [number, number] = [25, 25];

document.addEventListener("DOMContentLoaded", () => {
  const app = new App(document.querySelector("#app")!);
  app.render();

  const renderer = new Renderer(
    app.$container.querySelector(".scene")!,
    TILE_SIZE
  );

  const frameRecord: FrameRecord = {
    main: new Frame(
      [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 0, 1, 0, 0, 2, 2, 1],
        [1, 2, 3, 2, 0, 1, 0, 0, 2, 2, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 3, 2, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 3, 2, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1],
        [1, 2, 2, 0, 0, 0, 1, 1, 0, 0, 1],
        [1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 2, 2, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ],
      [5, 8]
    ),
  };
  const engine = new Engine(frameRecord, new Player());

  renderer.resize(engine.currentFrame.width, engine.currentFrame.height);
  renderer.renderEngine(engine);

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
      engine.movePlayer(direction) && renderer.renderEngine(engine);
    }
  });
});
