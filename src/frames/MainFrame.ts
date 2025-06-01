import Frame from "./Frame";

export default class MainFrame extends Frame {
  data: number[][] = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 3, 3, 3, 0, 0, 0, 0, 3, 3, 2],
    [2, 3, 1, 3, 0, 0, 0, 0, 3, 3, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 1, 3, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 1, 3, 2],
    [2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 2],
    [2, 3, 3, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 3, 1, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 3, 3, 0, 0, 0, 0, 0, 0, 0, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  ];
  size: [number, number] = [11, 10];
  colors: { [key: string]: string } = {
    empty: "green",
    block: "black",
    building: "blue",
    door: "grey",
  };
  initialPlayerPosition: [number, number] = [5, 8];

  getCellColor(cellValue: number): string {
    switch (cellValue) {
      case 1:
        return this.colors.door;
      case 2:
        return this.colors.block;
      case 3:
        return this.colors.building;

      default:
        return this.colors.empty;
    }
  }
}
