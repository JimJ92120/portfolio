import "./style.css";

import App from "./App";

import Renderer from "./Renderer";
import Frame from "./Frame";
import Player from "./Player";
import Engine, { ActionRecord, FrameRecord } from "./Engine";

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
    home: new Frame(
      [
        [1, 1, 1, 1, 1, 1],
        [1, 2, 0, 3, 3, 1],
        [1, 3, 0, 0, 0, 1],
        [1, 2, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 1, 3, 3, 1, 1],
      ],
      [2, 4]
    ),
    office: new Frame(
      [
        [1, 1, 1, 1, 1, 1],
        [1, 2, 3, 3, 2, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1],
        [1, 1, 3, 3, 1, 1],
      ],
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
      [2, 4]
    ),
  };
  const actionRecord: ActionRecord = {
    main: {
      ["2,2"]: () => {
        console.log("enter office");

        engine.setCurrentFrame("office");
        renderer.resize(engine.currentFrame.width, engine.currentFrame.height);
      },
      ["8,3"]: () => {
        console.log("enter gallery");

        engine.setCurrentFrame("gallery");
        renderer.resize(engine.currentFrame.width, engine.currentFrame.height);
      },
      ["8,4"]: () => {
        console.log("enter gallery");

        engine.setCurrentFrame("gallery");
        renderer.resize(engine.currentFrame.width, engine.currentFrame.height);
      },
      ["2,7"]: () => {
        console.log("enter home");

        engine.setCurrentFrame("home");
        renderer.resize(engine.currentFrame.width, engine.currentFrame.height);
      },
    },
    home: {
      ["1,2"]: () => {
        alert("here's a desk");
      },
      ["3,1"]: () => {
        alert("here's an object");
      },
      ["4,1"]: () => {
        alert("here's another object");
      },
      ["2,5"]: () => {
        engine.setCurrentFrame("main");
        renderer.resize(engine.currentFrame.width, engine.currentFrame.height);
      },
      ["3,5"]: () => {
        engine.setCurrentFrame("main");
        renderer.resize(engine.currentFrame.width, engine.currentFrame.height);
      },
    },
    office: {
      ["2,5"]: () => {
        engine.setCurrentFrame("main");
        renderer.resize(engine.currentFrame.width, engine.currentFrame.height);
      },
      ["3,5"]: () => {
        engine.setCurrentFrame("main");
        renderer.resize(engine.currentFrame.width, engine.currentFrame.height);
      },
    },
    gallery: {
      ["2,5"]: () => {
        engine.setCurrentFrame("main");
        renderer.resize(engine.currentFrame.width, engine.currentFrame.height);
      },
      ["3,5"]: () => {
        engine.setCurrentFrame("main");
        renderer.resize(engine.currentFrame.width, engine.currentFrame.height);
      },
    },
  };
  const engine = new Engine(frameRecord, new Player(), actionRecord);

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
