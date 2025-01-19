import RPS from "./RPS";

export default class CollisionManager {
  static checkCollision(obj1: RPS, obj2: RPS) {
    const dx = obj2.x - obj1.x;
    const dy = obj2.y - obj1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance <= obj1.width;
  }

  static resolveCollision(obj1: RPS, obj2: RPS) {
    const rules = {
      rock: "scissor",
      paper: "rock",
      scissor: "paper",
    };

    if (rules[obj1.state] === obj2.state) obj2.updateState(obj1.state);
    else if (rules[obj2.state] === obj1.state) obj1.updateState(obj2.state);
  }

  static handleCollision(obj: RPS[]) {
    const length = obj.length;
    for (let i = 0; i < length; i++) {
      for (let j = i + 1; j < length; j++) {
        if (this.checkCollision(obj[i], obj[j])) {
          this.resolveCollision(obj[i], obj[j]);
        }
      }
    }
  }
}
