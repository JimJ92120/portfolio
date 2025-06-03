export enum FrameActionType {
  Load,
  Prompt,
}
type FrameAction = [FrameActionType, any];
export type FrameActionRecord = { [key: string]: FrameAction };

export default class Frame {
  data: number[][];
  actions: FrameActionRecord;
  initialPosition: [number, number];
  backgroundImageUrl: string;

  constructor(
    data: number[][],
    actions: FrameActionRecord,
    initialPosition: [number, number],
    backgroundImageUrl: string
  ) {
    this.data = data;
    this.actions = actions;
    this.initialPosition = initialPosition;
    this.backgroundImageUrl = backgroundImageUrl;
  }

  get width(): number {
    return this.data[0].length ?? 0;
  }

  get height(): number {
    return this.data.length;
  }

  getAction(position: [number, number]): FrameAction | null {
    if (this.hasAction(position)) {
      return this.actions[position.join(",")];
    }

    return null;
  }

  private hasAction(position: [number, number]): boolean {
    return undefined !== this.actions[position.join(",")];
  }
}
