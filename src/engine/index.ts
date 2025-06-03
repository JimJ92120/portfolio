import Frame, { FrameActionType } from "./Frame";
import Player, { PlayerDirection } from "./Player";
import Renderer from "./Renderer";

export type FrameRecord = { main: Frame; [key: string]: Frame };

export default class Engine {
  renderer: Renderer;
  frames: FrameRecord;
  currentFrameKey: string;
  player: Player;
  assets: { [key: string]: HTMLImageElement } = {};
  isPromptShown: boolean = false;

  constructor(renderer: Renderer, frames: FrameRecord, player: Player) {
    this.renderer = renderer;
    this.frames = frames;
    this.player = player;

    this.setCurrentFrame("main");
  }

  async loadAssets(): Promise<HTMLImageElement[]> {
    return await Promise.all([
      ...Object.keys(this.frames).map((frameKey) =>
        this.loadImage(frameKey, this.frames[frameKey].backgroundImageUrl)
      ),
      ...Object.keys(this.player.assets).map((assetKey: any) =>
        this.loadImage(`player-${assetKey}`, this.player.assets[assetKey])
      ),
    ]);
  }

  render() {
    this.renderer.renderData(this.currentFrame.data);
    this.renderer.renderBackground(
      this.assets[this.currentFrameKey],
      this.currentFrame.width,
      this.currentFrame.height
    );

    this.renderer.renderTile(this.player.position, "red");
    this.renderer.renderPlayer(this.getPlayerAsset()!, this.player.position);
  }

  movePlayer(direction: PlayerDirection): boolean {
    const nextPosition: [number, number] =
      this.getPlayerNextPosition(direction);

    if (!this.canPlayerMove(nextPosition)) {
      return false;
    }

    const action = this.currentFrame.getAction(nextPosition);

    if (action) {
      this.runAction(action[0], action[1]);
    } else {
      this.player.position = nextPosition;

      if (this.isPromptShown) {
        this.renderer.hidePrompt();
        this.isPromptShown = !this.isPromptShown;
      }
    }

    this.player.direction = direction;

    return true;
  }

  setCurrentFrame(frameKey: string): void {
    if (this.frames[frameKey]) {
      this.currentFrameKey = frameKey;
      this.player.position = this.currentFrame.initialPosition;
      this.player.direction = PlayerDirection.Up;

      this.renderer.resize(this.currentFrame.width, this.currentFrame.height);
    }
  }

  get currentFrame(): Frame {
    return this.frames[this.currentFrameKey];
  }

  private async loadImage(
    imageKey: string,
    imageUrl: string
  ): Promise<HTMLImageElement> {
    return new Promise((resolve) => {
      this.assets[imageKey] = new Image();
      this.assets[imageKey].src = imageUrl;

      this.assets[imageKey].addEventListener("load", () => {
        console.log(`${imageKey} image loaded`);

        return resolve(this.assets[imageKey]);
      });
    }) as Promise<HTMLImageElement>;
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
          1 === nextPositionCellValue ? "block" : "object"
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
        this.isPromptShown = true;
        break;

      default:
        break;
    }
  }

  private getPlayerAsset(): HTMLImageElement | null {
    switch (this.player.direction) {
      case PlayerDirection.Up:
        return this.assets["player-up"];
      case PlayerDirection.Down:
        return this.assets["player-down"];
      case PlayerDirection.Left:
        return this.assets["player-left"];
      case PlayerDirection.Right:
        return this.assets["player-right"];
      default:
        return null;
    }
  }

  private getPlayerNextPosition(direction: PlayerDirection): [number, number] {
    let nextPosition: [number, number] = [...this.player.position];

    switch (direction) {
      case PlayerDirection.Up:
        --nextPosition[1];
        break;
      case PlayerDirection.Down:
        ++nextPosition[1];
        break;
      case PlayerDirection.Left:
        --nextPosition[0];
        break;
      case PlayerDirection.Right:
        ++nextPosition[0];
        break;
    }

    return nextPosition;
  }
}
