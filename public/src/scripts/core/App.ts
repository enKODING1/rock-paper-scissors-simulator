import { State } from "../../types/game";
import RPS from "../models/RPS";
import CollisionManager from "../models/CollisionManager";
import ImageManager from "../models/ImageManager";

class App {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  stageWidth: number;
  stageHeight: number;
  rpsList: RPS[];

  constructor() {
    this.canvas = document.querySelector("#canvas");
    this.ctx = this.canvas.getContext("2d");
    this.stageWidth = this.canvas.width;
    this.stageHeight = this.canvas.height;
    const range = 30;

    this.rpsList = [
      ...this.createRPS(this.stageWidth, this.stageHeight, "rock", range),
      ...this.createRPS(this.stageWidth, this.stageHeight, "paper", range),
      ...this.createRPS(this.stageWidth, this.stageHeight, "scissor", range),
    ];

    this.startAnimation();
  }

  async startAnimation() {
    await Promise.all(
      this.rpsList.map((rps) =>
        ImageManager.loadImage(RPS.getStateImagePath(rps.state))
      )
    );

    console.log("All images loaded. Starting animation...");
    window.requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    window.requestAnimationFrame(this.animate.bind(this));

    CollisionManager.handleCollision(this.rpsList);
    this.rpsList.forEach((v) =>
      v.draw(this.ctx, this.stageWidth, this.stageHeight)
    );
  }

  createRPS(
    stageWidth: number,
    stageHeight: number,
    state: State,
    range: number
  ) {
    const array: RPS[] = [];
    const width = 35;
    const height = 35;
    const createRange = Math.floor(Math.random() * range);

    for (let i = 0; i < createRange; i++) {
      const x = Math.floor(Math.random() * (stageWidth - width));
      const y = Math.floor(Math.random() * (stageHeight - height));
      const speed = Math.random() * 5 - 2;
      array.push(new RPS(x, y, width, height, speed, state));
    }

    return array;
  }
}

window.onload = () => {
  new App();
};
