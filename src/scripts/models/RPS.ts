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
    if (state == "rock") return "/src/assets/rock.png";
    if (state == "paper") return "/src/assets/paper.png";
    if (state == "scissor") return "/src/assets/scissor.png";
    return null;
  }

  updateState(state: State) {
    this.state = state;
    this.img.src = RPS.getStateImagePath(state);
  }
}
