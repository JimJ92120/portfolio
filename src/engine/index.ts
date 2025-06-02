import Frame, { FrameActionType } from "./Frame";
import Player from "./Player";
import Renderer from "./Renderer";

export type FrameRecord = { main: Frame; [key: string]: Frame };

export default class Engine {
  renderer: Renderer;
  frames: FrameRecord;
  currentFrameKey: string;
  player: Player;
  assets: { [key: string]: HTMLImageElement } = {};

  constructor(renderer: Renderer, frames: FrameRecord) {
    this.renderer = renderer;
    this.frames = frames;
    this.player = new Player();

    this.setCurrentFrame("main");
  }

  async loadAssets(): Promise<HTMLImageElement[]> {
    return await Promise.all(
      Object.keys(this.frames).map(
        (frameKey) =>
          new Promise((resolve) => {
            this.assets[frameKey] = new Image();
            this.assets[frameKey].src = this.frames[frameKey].backgroundUrl;

            this.assets[frameKey].addEventListener("load", () => {
              console.log(`${frameKey} image loaded`);

              return resolve(this.assets[frameKey]);
            });
          }) as Promise<HTMLImageElement>
      )
    );
  }

  render() {
    this.renderer.renderData(this.currentFrame.data);
    this.renderer.renderBackground(
      this.assets[this.currentFrameKey],
      this.currentFrame.width,
      this.currentFrame.height
    );
    this.renderer.renderTile(this.player.position, "red");
  }

  movePlayer(direction: [number, number]): boolean {
    const nextPosition: [number, number] = [
      this.player.position[0] + direction[0],
      this.player.position[1] + direction[1],
    ];

    if (!this.canPlayerMove(nextPosition)) {
      return false;
    }

    const action = this.currentFrame.getAction(nextPosition);

    if (action) {
      this.runAction(action[0], action[1]);
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

      this.renderer.resize(this.currentFrame.width, this.currentFrame.height);
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

  private runAction(actionType: FrameActionType, data: any): void {
    switch (actionType) {
      case FrameActionType.Load:
        if ("main" === this.currentFrameKey) {
          this.frames["main"].initialPosition = this.player.position;
        }

        this.setCurrentFrame(data);
        break;

      case FrameActionType.Prompt:
        this.renderer.showPrompt(data);

        setTimeout(() => this.renderer.hidePrompt(), 3000);
        break;

      default:
        break;
    }
  }
}
