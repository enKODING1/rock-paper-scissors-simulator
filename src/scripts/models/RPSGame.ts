import { State } from "../../types/game";
import ImageManager from "./ImageManager";

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
  isLoaded: boolean;

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

    ImageManager.loadImage(stateImagePath)
      .then((img) => {
        this.img = img;
        this.isLoaded = true;
      })
      .catch((error) => console.error(error));
  }

  draw(ctx: CanvasRenderingContext2D, stageWidth: number, stageHeight: number) {
    this.x += this.sx;
    this.y += this.sy;

    ctx.beginPath();
    if (this.isLoaded && this.img) {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    } else {
      console.error("Image not yet loaded:", this.stateImagePath);
    }

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
