import { PlayerDirection } from "./engine/Player";
import Engine from "./engine";

export function getScreenSize(maxSceneSize: number): number {
  const { width, height } = window.screen;
  let size = height <= width ? height : width;

  if (maxSceneSize < size) {
    size = maxSceneSize;
  }

  return size;
}

export function moveEventCallback(engine: Engine, directionKey: string): void {
  let direction: PlayerDirection | null = null;

  switch (directionKey) {
    case "up":
      direction = PlayerDirection.Up;
      break;

    case "down":
      direction = PlayerDirection.Down;
      break;

    case "left":
      direction = PlayerDirection.Left;
      break;

    case "right":
      direction = PlayerDirection.Right;
      break;
  }

  if (null !== direction) {
    engine.movePlayer(direction);
    engine.render();
  }
}
