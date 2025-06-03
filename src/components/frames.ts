import Frame, { FrameActionType } from "../engine/Frame";

import MainFrameBackground from "../assets/main.png";
import HomeFrameBackground from "../assets/home.png";
import OfficeFrameBackground from "../assets/office.png";
import GalleryFrameBackground from "../assets/gallery.png";

import config from "../config";

// 10 x 10 boards
export default {
  main: new Frame(
    [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 1, 2, 2, 2, 2, 1],
      [1, 2, 3, 2, 1, 2, 3, 3, 2, 1],
      [1, 1, 0, 3, 0, 0, 0, 0, 0, 1],
      [1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 2, 2, 2, 0, 0, 0, 1, 1, 1],
      [1, 2, 3, 2, 0, 0, 0, 1, 1, 1],
      [1, 1, 0, 0, 3, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    {
      ["4,7"]: [FrameActionType.Prompt, config.welcomeMessage],
      ["2,2"]: [FrameActionType.Load, "office"],
      ["3,3"]: [FrameActionType.Prompt, "Office mailbox"],
      ["6,2"]: [FrameActionType.Load, "gallery"],
      ["7,2"]: [FrameActionType.Load, "gallery"],
      ["2,6"]: [FrameActionType.Load, "home"],
    },
    [5, 8],
    MainFrameBackground
  ),
  home: new Frame(
    [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 3, 1, 3, 1, 1, 1],
      [1, 1, 2, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 3, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 2, 0, 0, 0, 0, 3, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 3, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 3, 3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    {
      ["2,4"]: [FrameActionType.Prompt, "gaming"],
      ["4,2"]: [FrameActionType.Prompt, "guitar"],
      ["6,2"]: [FrameActionType.Prompt, "tinkering"],
      ["7,5"]: [FrameActionType.Prompt, "shelf"],
      ["7,6"]: [FrameActionType.Prompt, "moto"],
      ["4,8"]: [FrameActionType.Load, "main"],
      ["5,8"]: [FrameActionType.Load, "main"],
    },
    [4, 7],
    HomeFrameBackground
  ),
  office: new Frame(
    [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 3, 1, 3, 1, 1, 1],
      [1, 1, 2, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 3, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 2, 0, 0, 0, 0, 3, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 3, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 3, 3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    {
      ["2,4"]: [FrameActionType.Prompt, "desk"],
      ["4,2"]: [FrameActionType.Prompt, "shelf"],
      ["6,2"]: [FrameActionType.Prompt, "shelf"],
      ["7,5"]: [FrameActionType.Prompt, "shelf"],
      ["7,6"]: [FrameActionType.Prompt, "shelf"],
      ["4,8"]: [FrameActionType.Load, "main"],
      ["5,8"]: [FrameActionType.Load, "main"],
    },
    [4, 7],
    OfficeFrameBackground
  ),
  gallery: new Frame(
    [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 3, 1, 1, 3, 1, 1, 1],
      [1, 1, 3, 0, 0, 0, 0, 3, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 3, 0, 0, 0, 0, 3, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 1, 1, 3, 3, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    {
      ["3,2"]: [FrameActionType.Prompt, "project-3"],
      ["6,2"]: [FrameActionType.Prompt, "project-4"],
      ["2,3"]: [FrameActionType.Prompt, "project-2"],
      ["7,3"]: [FrameActionType.Prompt, "project-5"],
      ["2,5"]: [FrameActionType.Prompt, "project-1"],
      ["7,5"]: [FrameActionType.Prompt, "project-6"],
      ["4,8"]: [FrameActionType.Load, "main"],
      ["5,8"]: [FrameActionType.Load, "main"],
    },
    [4, 7],
    GalleryFrameBackground
  ),
};
