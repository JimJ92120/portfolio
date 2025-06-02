import "./style.css";

import App from "./App";

import Renderer from "./Renderer";
import Frame from "./Frame";
import Player from "./Player";

const TILE_SIZE: [number, number] = [25, 25];

document.addEventListener("DOMContentLoaded", () => {
  const app = new App(document.querySelector("#app")!);
  app.render();

  const renderer = new Renderer(
    app.$container.querySelector(".scene")!,
    TILE_SIZE
  );

  const mainFrame = new Frame(
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
  );
  const player = new Player();
  player.position = mainFrame.initialPosition;

  renderer.resize(mainFrame.width, mainFrame.height);
  renderer.renderFrame(mainFrame);
  renderer.renderPlayer(player);

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

    console.log(direction);
  });
});
