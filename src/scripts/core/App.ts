import RPS from "../models/RPS";

class App {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  rock: RPS;
  paper: RPS;
  scissor: RPS;

  constructor() {
    this.canvas = document.querySelector("#canvas");
    this.ctx = this.canvas.getContext("2d");

    this.rock = new RPS(14, 13, 20, 20, 1, "rock");
    this.paper = new RPS(20, 0, 20, 20, 0.2, "paper");
    this.scissor = new RPS(100, 10, 20, 20, -1, "scissor");
    window.requestAnimationFrame(this.animate.bind(this));
    this.animate();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    window.requestAnimationFrame(this.animate.bind(this));

    this.rock.draw(this.ctx, this.canvas.width, this.canvas.height);
    this.paper.draw(this.ctx, this.canvas.width, this.canvas.height);
    this.scissor.draw(this.ctx, this.canvas.width, this.canvas.height);
  }
}

window.onload = () => {
  new App();
};
