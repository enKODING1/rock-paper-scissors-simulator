import { State } from "../../types/game";

export default class RPSGame {
  x: number;
  y: number;
  sx: number;
  sy: number;
  width: number;
  height: number;
  state: State;
  stateImagePath: string;
  img: HTMLImageElement;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    speed: number,
    state: State,
    stateImagePath: string
  ) {
    this.x = x;
    this.y = y;
    this.sx = speed;
    this.sy = speed;
    this.width = width;
    this.height = height;
    this.state = state;
    this.stateImagePath = stateImagePath;

    this.img = new Image();
    this.img.src = this.stateImagePath;
  }

  draw(ctx: CanvasRenderingContext2D, stageWidth: number, stageHeight: number) {
    this.x += this.sx;
    this.y += this.sy;

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    ctx.closePath();

    this.crash(stageWidth, stageHeight);
  }

  crash(stageWidth: number, stageHeight: number) {
    let minX = 0;
    let minY = 0;
    let maxX = stageWidth - this.width;
    let maxY = stageHeight - this.height;

    if (this.x >= maxX || this.x <= minX) {
      this.sx *= -1;
      this.x += this.sx;
    } else if (this.y >= maxY || this.y <= minY) {
      this.sy *= -1;
      this.y += this.sy;
    }
  }
}
