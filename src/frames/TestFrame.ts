import Frame from "./Frame";

export default class TestFrame extends Frame {
  data: number[][] = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 2, 0, 0, 2, 2, 1],
    [1, 2, 0, 0, 0, 0, 1],
    [1, 2, 0, 0, 0, 2, 1],
    [1, 1, 1, 3, 3, 1, 1],
  ];
  size: [number, number] = [7, 5];
  initialPlayerPosition: [number, number] = [3, 3];
}
