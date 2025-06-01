import "./style.css";

import MainFrame from "./frames/MainFrame";

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

  // config
  const pixelSize: [number, number] = [50, 50];
  const playerColor = "red";
  // state
  const state = {
    playerPosition: [0, 0],
  };

  const $scene: HTMLCanvasElement = $app.querySelector(".scene")!;
  const context: CanvasRenderingContext2D = $scene.getContext("2d")!;

  const renderPlayer = () => {
    context.fillStyle = playerColor;
    context.fillRect(
      state.playerPosition[0] * pixelSize[0],
      state.playerPosition[1] * pixelSize[1],
      pixelSize[0],
      pixelSize[1]
    );
  };

  const mainFrame = new MainFrame(context, pixelSize);
  $scene.width = pixelSize[0] * mainFrame.size[0];
  $scene.height = pixelSize[1] * mainFrame.size[1];
  state.playerPosition = mainFrame.initialPlayerPosition;

  const render = () => {
    context.clearRect(0, 0, $scene.width, $scene.height);

    mainFrame.render();
    renderPlayer();
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
    if (
      0 > nextPlayerPosition[0] ||
      0 > nextPlayerPosition[1] ||
      mainFrame.size[0] <= nextPlayerPosition[0] ||
      mainFrame.size[1] <= nextPlayerPosition[1]
    ) {
      console.error(
        `nextPlayerPosition [${nextPlayerPosition}] is out of bound`
      );

      return;
    }

    // frame
    if (0 === mainFrame.data[nextPlayerPosition[1]][nextPlayerPosition[0]]) {
      state.playerPosition = nextPlayerPosition;

      render();
    } else if (
      1 === mainFrame.data[nextPlayerPosition[1]][nextPlayerPosition[0]]
    ) {
      state.playerPosition = nextPlayerPosition;

      render();

      console.log("load new frame");
    } else {
      console.error(
        `nextPlayerPosition [${nextPlayerPosition}] is a block or building`
      );

      return;
    }
  });
});
