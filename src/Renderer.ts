import Frame from "./frames/Frame";

export default class Renderer {
  $canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  pixelSize: [number, number];
  colors: { [key: string]: string } = {
    empty: "green",
    block: "black",
    door: "grey",
    object: "blue",
    player: "red",
  };
  currentFrame: Frame;

  constructor(
    $canvas: HTMLCanvasElement,
    pixelSize: [number, number],
    mainFrame: Frame
  ) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext("2d")!;
    this.pixelSize = pixelSize;

    this.setFrame(mainFrame);
  }

  setFrame(frame: Frame): void {
    this.currentFrame = frame;
    this.resize();
  }

  renderFrame() {
    this.currentFrame.data.map((row, rowIndex) => {
      row.map((cellValue, columnIndex) => {
        this.renderCell([columnIndex, rowIndex], this.getCellColor(cellValue));
      });
    });
  }

  renderPlayer(playerPosition: [number, number]) {
    this.context.fillStyle = this.colors.player;
    this.context.fillRect(
      playerPosition[0] * this.pixelSize[0],
      playerPosition[1] * this.pixelSize[1],
      this.pixelSize[0],
      this.pixelSize[1]
    );
  }

  private resize(): void {
    this.$canvas.width = this.currentFrame.size[0] * this.pixelSize[0];
    this.$canvas.height = this.currentFrame.size[1] * this.pixelSize[1];
  }

  private getCellColor(cellValue: number): string {
    switch (cellValue) {
      case 1:
        return this.colors.block;
      case 2:
        return this.colors.object;
      case 3:
        return this.colors.door;

      default:
        return this.colors.empty;
    }
  }

  private renderCell(position: [number, number], color: string) {
    this.context.fillStyle = color;
    this.context.fillRect(
      position[0] * this.pixelSize[0],
      position[1] * this.pixelSize[1],
      this.pixelSize[0],
      this.pixelSize[1]
    );
  }
}
