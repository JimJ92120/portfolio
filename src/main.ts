import "./style.css";

import App from "./App";

import Renderer from "./Renderer";
import Frame, { FrameActionType } from "./Frame";
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
        [1, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1],
        [1, 2, 3, 2, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ],
      {
        ["2,2"]: [FrameActionType.Load, "office"],
        ["8,3"]: [FrameActionType.Load, "gallery"],
        ["8,4"]: [FrameActionType.Load, "gallery"],
        ["2,7"]: [FrameActionType.Load, "home"],
      },
      [5, 9]
    ),
    home: new Frame(
      [
        [1, 1, 1, 1, 1, 1],
        [1, 2, 0, 3, 3, 1],
        [1, 3, 0, 0, 0, 1],
        [1, 2, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 1, 3, 3, 1, 1],
      ],
      {
        ["1,2"]: [FrameActionType.Prompt, "here's a desk"],
        ["3,1"]: [FrameActionType.Prompt, "here's a shelve"],
        ["4,1"]: [FrameActionType.Prompt, "here's another shelve"],
        ["2,5"]: [FrameActionType.Load, "main"],
        ["3,5"]: [FrameActionType.Load, "main"],
      },
      [2, 4]
    ),
    office: new Frame(
      [
        [1, 1, 1, 1, 1, 1],
        [1, 2, 0, 3, 3, 1],
        [1, 3, 0, 0, 0, 1],
        [1, 2, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 1, 3, 3, 1, 1],
      ],
      {
        ["1,2"]: [FrameActionType.Prompt, "here's a desk"],
        ["3,1"]: [FrameActionType.Prompt, "here's a shelve"],
        ["4,1"]: [FrameActionType.Prompt, "here's another shelve"],
        ["2,5"]: [FrameActionType.Load, "main"],
        ["3,5"]: [FrameActionType.Load, "main"],
      },
      [2, 4]
    ),
    gallery: new Frame(
      [
        [1, 1, 1, 1, 1, 1],
        [1, 3, 3, 3, 3, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 1, 3, 3, 1, 1],
      ],
      {
        ["1,1"]: [FrameActionType.Prompt, "here's project #1"],
        ["2,1"]: [FrameActionType.Prompt, "here's project #2"],
        ["3,1"]: [FrameActionType.Prompt, "here's project #3"],
        ["4,1"]: [FrameActionType.Prompt, "here's project #4"],
        ["2,5"]: [FrameActionType.Load, "main"],
        ["3,5"]: [FrameActionType.Load, "main"],
      },
      [2, 4]
    ),
  };

  const engine = new Engine(frameRecord, new Player());

  const render = () => {
    renderer.resize(engine.currentFrame.width, engine.currentFrame.height);
    renderer.renderEngine(engine);
  };
  render();

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
      engine.movePlayer(direction) && render();
    }
  });
});
