import RPS from "../models/RPS";

class App {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  stageWidth: number;
  stageHeight: number;
  rocks: RPS[];
  papers: RPS[];
  scissors: RPS[];

  constructor() {
    this.canvas = document.querySelector("#canvas");
    this.ctx = this.canvas.getContext("2d");
    this.stageWidth = this.canvas.width;
    this.stageHeight = this.canvas.height;

    this.rocks = this.createRPS(this.stageWidth, this.stageHeight, "rock", 30);
    this.papers = this.createRPS(
      this.stageWidth,
      this.stageHeight,
      "paper",
      30
    );
    this.scissors = this.createRPS(
      this.stageWidth,
      this.stageHeight,
      "scissor",
      30
    );

    window.requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    window.requestAnimationFrame(this.animate.bind(this));
    this.rocks.forEach((v) =>
      v.draw(this.ctx, this.stageWidth, this.stageHeight)
    );
    this.papers.forEach((v) =>
      v.draw(this.ctx, this.stageWidth, this.stageHeight)
    );
    this.scissors.forEach((v) =>
      v.draw(this.ctx, this.stageWidth, this.stageHeight)
    );
  }

  createRPS(
    stageWidth: number,
    stageHeight: number,
    state: string,
    range: number
  ) {
    const array: RPS[] = [];
    const width = 20;
    const height = 20;
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
