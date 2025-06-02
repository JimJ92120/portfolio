import Frame from "./Frame";
import Player from "./Player";

export type FrameRecord = { main: Frame; [key: string]: Frame };

export default class Engine {
  frames: FrameRecord;
  currentFrame: Frame;
  player: Player;

  constructor(frames: FrameRecord, player: Player) {
    this.frames = frames;
    this.player = player;

    this.setCurrentFrame("main");
  }

  movePlayer(direction: [number, number]): boolean {
    const nextPosition: [number, number] = [
      this.player.position[0] + direction[0],
      this.player.position[1] + direction[1],
    ];

    if (this.canPlayerMove(nextPosition)) {
      this.player.position = nextPosition;
      this.player.direction = direction;

      return true;
    }

    return false;
  }

  setCurrentFrame(frameKey: string): void {
    if (this.frames[frameKey]) {
      this.currentFrame = this.frames[frameKey];
      this.player.position = this.currentFrame.initialPosition;
    }
  }

  private canPlayerMove(nextPosition: [number, number]): boolean {
    // out of bound
    if (
      0 > nextPosition[0] ||
      0 > nextPosition[1] ||
      this.currentFrame.width <= nextPosition[0] ||
      this.currentFrame.height <= nextPosition[1]
    ) {
      console.error(`nextPosition [${nextPosition}] is out of bound`);

      return false;
    }

    const nextPositionCellValue =
      this.currentFrame.data[nextPosition[1]][nextPosition[0]];

    // collide
    if (
      undefined === nextPositionCellValue ||
      [1, 2].includes(nextPositionCellValue)
    ) {
      console.error(
        `nextPosition [${nextPosition}] with value ${nextPositionCellValue} is a block or building`
      );

      return false;
    }

    return true;
  }
}
