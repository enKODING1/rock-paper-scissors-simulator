import { State } from "../../types/game";
import RPSGame from "./RPSGame";

export default class RPS extends RPSGame {
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    speed: number,
    state: State
  ) {
    const stateImagePath = RPS.getStateImagePath(state);

    super(x, y, width, height, speed, state, stateImagePath);
  }

  static getStateImagePath(state: string): string {
    if (state == "rock") return "assets/rock.png";
    if (state == "paper") return "assets/paper.png";
    if (state == "scissor") return "assets/scissor.png";
    return null;
  }

  updateState(newState: State) {
    this.state = newState;
    this.stateImagePath = `/src/assets/${newState}.png`;
    this.img.src = RPS.getStateImagePath(newState);
  }
}
