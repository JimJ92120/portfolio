export type PlayerAssetRecord = { [key: string]: string } & {
  up: string;
  down: string;
  left: string;
  right: string;
};
export enum PlayerDirection {
  Up,
  Down,
  Left,
  Right,
}

export default class Player {
  position: [number, number] = [0, 0];
  direction: PlayerDirection = PlayerDirection.Up;
  assets: PlayerAssetRecord;

  constructor(assets: PlayerAssetRecord) {
    this.assets = assets;
  }
}
