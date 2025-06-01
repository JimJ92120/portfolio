export default abstract class Frame {
  context: CanvasRenderingContext2D;
  pixelSize: [number, number];

  abstract data: number[][];
  abstract size: [number, number];
  abstract colors: { [key: string]: string };
  abstract initialPlayerPosition: [number, number];

  constructor(context: CanvasRenderingContext2D, pixelSize: [number, number]) {
    this.context = context;
    this.pixelSize = pixelSize;
  }

  render() {
    this.data.map((row, rowIndex) => {
      row.map((cellValue, columnIndex) => {
        this.renderCell([columnIndex, rowIndex], cellValue);
      });
    });
  }

  renderCell(position: [number, number], cellValue: number) {
    this.context.fillStyle = this.getCellColor(cellValue);
    this.context.fillRect(
      position[0] * this.pixelSize[0],
      position[1] * this.pixelSize[1],
      this.pixelSize[0],
      this.pixelSize[1]
    );
  }

  abstract getCellColor(cellValue: number): string;
}
