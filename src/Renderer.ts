import Engine from "./Engine";

export default class Renderer {
  private $scene: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private tileSize: [number, number];

  constructor($scene: HTMLCanvasElement, tileSize: [number, number]) {
    this.$scene = $scene;
    this.context = this.$scene.getContext("2d")!;
    this.tileSize = tileSize;
  }

  get width(): number {
    return this.$scene.width;
  }

  get height(): number {
    return this.$scene.height;
  }

  renderEngine(engine: Engine): void {
    this.context.clearRect(0, 0, this.width, this.height);

    engine.currentFrame.data.map((row, rowIndex) => {
      row.map((cellValue, columnIndex) => {
        this.renderTile([columnIndex, rowIndex], this.getTileColor(cellValue));
      });
    });

    this.renderTile(engine.player.position, "red");
  }

  resize(width: number, height: number): void {
    this.$scene.width = width * this.tileSize[0];
    this.$scene.height = height * this.tileSize[1];
  }

  private renderTile(position: [number, number], color: string): void {
    this.context.fillStyle = color;
    this.context.fillRect(
      position[0] * this.tileSize[0],
      position[1] * this.tileSize[1],
      this.tileSize[0],
      this.tileSize[1]
    );
  }

  private getTileColor(cellValue: number): string {
    switch (cellValue) {
      case 0:
        return "green";
      case 2:
        return "blue";
      case 3:
        return "grey";

      default:
        return "black";
    }
  }
}
