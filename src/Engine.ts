import Frame from "./Frame";
import Player from "./Player";

export type FrameRecord = { main: Frame; [key: string]: Frame };
type FrameActionRecord = { [key: string]: CallableFunction };
export type ActionRecord = {
  main: FrameActionRecord;
  [key: string]: FrameActionRecord;
};

export default class Engine {
  frames: FrameRecord;
  actions: ActionRecord;
  currentFrameKey: string;
  player: Player;

  constructor(frames: FrameRecord, player: Player, actions: ActionRecord) {
    this.frames = frames;
    this.player = player;
    this.actions = actions;

    this.setCurrentFrame("main");
  }

  movePlayer(direction: [number, number]): boolean {
    const nextPosition: [number, number] = [
      this.player.position[0] + direction[0],
      this.player.position[1] + direction[1],
    ];

    if (!this.canPlayerMove(nextPosition)) {
      return false;
    }

    if (
      this.actions[this.currentFrameKey] &&
      this.actions[this.currentFrameKey][nextPosition.join(",")]
    ) {
      this.actions[this.currentFrameKey][nextPosition.join(",")]();
    } else {
      this.player.position = nextPosition;
      this.player.direction = direction;
    }

    return true;
  }

  setCurrentFrame(frameKey: string): void {
    if (this.frames[frameKey]) {
      this.currentFrameKey = frameKey;
      this.player.position = this.currentFrame.initialPosition;
    }
  }

  get currentFrame(): Frame {
    return this.frames[this.currentFrameKey];
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
        `nextPosition [${nextPosition}] with value ${nextPositionCellValue} is a ${
          1 === nextPositionCellValue ? "block" : "building"
        }`
      );

      return false;
    }

    return true;
  }
}
