import Player from "../engine/Player";

import PlayerUpImage from "../assets/player-up.png";
import PlayerDownImage from "../assets/player-down.png";
import PlayerLeftImage from "../assets/player-left.png";
import PlayerRightImage from "../assets/player-right.png";

export default new Player({
  up: PlayerUpImage,
  down: PlayerDownImage,
  left: PlayerLeftImage,
  right: PlayerRightImage,
});
