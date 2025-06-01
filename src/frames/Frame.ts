export default abstract class Frame {
  abstract data: number[][];
  abstract size: [number, number];
  abstract initialPlayerPosition: [number, number];

  isOutOfBound(position: [number, number]): boolean {
    return (
      0 > position[0] ||
      0 > position[1] ||
      this.size[0] <= position[0] ||
      this.size[1] <= position[1]
    );
  }
}
