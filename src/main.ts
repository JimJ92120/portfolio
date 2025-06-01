import "./style.css";

import MainFrame from "./frames/MainFrame";
import Frame from "./frames/Frame";
import Renderer from "./Renderer";
import TestFrame from "./frames/TestFrame";

document.addEventListener("DOMContentLoaded", () => {
  const $app: HTMLElement = document.querySelector("#app")!;

  $app.innerHTML = `
    <h1>Portfolio</h1>

    <canvas class="scene"></canvas>

    <div class="controls">
      <div class="controls__direction">
        <button>L</button>
        <button>U</button>
        <button>R</button>
        <button>D</button>
      </div>
      <div class="controls__select">
        <button>A</button>
        <button>B</button>
      </div>
    </div>
  `;

  // state
  type State = {
    playerPosition: [number, number];
    isMainFrame: boolean;
  };
  const state: State = {
    playerPosition: [0, 0],
    isMainFrame: true,
  };

  const mainFrame = new MainFrame();
  const testFrame = new TestFrame();

  const renderer = new Renderer(
    $app.querySelector(".scene")!,
    [50, 50],
    mainFrame
  );

  state.playerPosition = renderer.currentFrame.initialPlayerPosition;

  const render = () => {
    renderer.renderFrame();
    renderer.renderPlayer(state.playerPosition);
  };
  render();

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

    if (0 === direction[0] && 0 === direction[1]) {
      return;
    }

    const { playerPosition } = state;
    const nextPlayerPosition: [number, number] = [
      playerPosition[0] + direction[0],
      playerPosition[1] + direction[1],
    ];

    // out of bound
    if (renderer.currentFrame.isOutOfBound(nextPlayerPosition)) {
      console.error(
        `nextPlayerPosition [${nextPlayerPosition}] is out of bound`
      );

      return;
    }

    // frame
    switch (
      renderer.currentFrame.data[nextPlayerPosition[1]][nextPlayerPosition[0]]
    ) {
      case 0:
        state.playerPosition = nextPlayerPosition;
        render();
        break;

      case 1:
      case 2:
        console.error(
          `nextPlayerPosition [${nextPlayerPosition}] is a block or building`
        );
        break;

      case 3:
        if (state.isMainFrame) {
          renderer.setFrame(testFrame);
        } else {
          renderer.setFrame(mainFrame);
        }

        state.isMainFrame = !state.isMainFrame;
        state.playerPosition = renderer.currentFrame.initialPlayerPosition;
        render();
        break;

      default:
        break;
    }
  });
});
