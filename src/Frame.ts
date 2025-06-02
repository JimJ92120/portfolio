export default class Frame {
  data: number[][];
  initialPosition: [number, number];

  constructor(data: number[][], initialPosition: [number, number]) {
    this.data = data;
    this.initialPosition = initialPosition;
  }

  get width(): number {
    return this.data[0].length ?? 0;
  }

  get height(): number {
    return this.data.length;
  }
}
