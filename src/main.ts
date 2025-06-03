import "./style.css";

import App from "./App";

import Renderer from "./engine/Renderer";
import Engine from "./engine";

import config from "./config";
import frameRecord from "./components/frames";
import player from "./components/player";
import { MoveEvents } from "./components/events";
import { getScreenSize, moveEventCallback } from "./helpers";

document.addEventListener("DOMContentLoaded", async () => {
  const app = new App(document.querySelector("#app")!);
  app.render();

  const size = getScreenSize(config.maxSceneSize);
  const engine = new Engine(
    new Renderer(
      app.$container.querySelector(".scene")!,
      app.$container.querySelector(".prompt")!,
      [size / config.frameSize[0], size / config.frameSize[1]],
      config.typeSpeed
    ),
    frameRecord,
    player,
    document.querySelector("#content")!
  );

  await engine.loadAssets();
  engine.render();

  // events
  MoveEvents(
    (directionKey: string) => moveEventCallback(engine, directionKey),
    app.$container.querySelectorAll(".direction-button")!
  );
});
