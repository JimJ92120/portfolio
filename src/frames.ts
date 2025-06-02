import Frame, { FrameActionType } from "./engine/Frame";

export default {
  main: new Frame(
    [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 0, 1, 0, 0, 2, 2, 1],
      [1, 2, 3, 2, 0, 1, 0, 0, 2, 2, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 3, 2, 1],
      [1, 0, 0, 0, 1, 0, 0, 0, 3, 2, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1],
      [1, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1],
      [1, 2, 3, 2, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    {
      ["2,2"]: [FrameActionType.Load, "office"],
      ["8,3"]: [FrameActionType.Load, "gallery"],
      ["8,4"]: [FrameActionType.Load, "gallery"],
      ["2,7"]: [FrameActionType.Load, "home"],
    },
    [5, 9]
  ),
  home: new Frame(
    [
      [1, 1, 1, 1, 1, 1],
      [1, 2, 0, 3, 3, 1],
      [1, 3, 0, 0, 0, 1],
      [1, 2, 0, 0, 0, 1],
      [1, 0, 0, 0, 3, 1],
      [1, 1, 3, 3, 1, 1],
    ],
    {
      ["1,2"]: [FrameActionType.Prompt, "gaming"],
      ["3,1"]: [FrameActionType.Prompt, "guitar"],
      ["4,1"]: [FrameActionType.Prompt, "tinkering"],
      ["4,4"]: [FrameActionType.Prompt, "moto"],
      ["2,5"]: [FrameActionType.Load, "main"],
      ["3,5"]: [FrameActionType.Load, "main"],
    },
    [2, 4]
  ),
  office: new Frame(
    [
      [1, 1, 1, 1, 1, 1],
      [1, 2, 0, 3, 3, 1],
      [1, 3, 0, 0, 0, 1],
      [1, 2, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 1, 3, 3, 1, 1],
    ],
    {
      ["1,2"]: [FrameActionType.Prompt, "here's a desk"],
      ["3,1"]: [FrameActionType.Prompt, "here's a shelve"],
      ["4,1"]: [FrameActionType.Prompt, "here's another shelve"],
      ["2,5"]: [FrameActionType.Load, "main"],
      ["3,5"]: [FrameActionType.Load, "main"],
    },
    [2, 4]
  ),
  gallery: new Frame(
    [
      [1, 1, 1, 1, 1, 1],
      [1, 3, 3, 3, 3, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 1],
      [1, 1, 3, 3, 1, 1],
    ],
    {
      ["1,1"]: [FrameActionType.Prompt, "here's project #1"],
      ["2,1"]: [FrameActionType.Prompt, "here's project #2"],
      ["3,1"]: [FrameActionType.Prompt, "here's project #3"],
      ["4,1"]: [FrameActionType.Prompt, "here's project #4"],
      ["2,5"]: [FrameActionType.Load, "main"],
      ["3,5"]: [FrameActionType.Load, "main"],
    },
    [2, 4]
  ),
};
