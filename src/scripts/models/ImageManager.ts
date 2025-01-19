export default class ImageManager {
  private static images: Map<string, HTMLImageElement> = new Map();

  static loadImage(path: string): Promise<HTMLImageElement> {
    if (this.images.has(path)) {
      return Promise.resolve(this.images.get(path));
    }

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = path;

      img.onload = () => {
        this.images.set(path, img);
        resolve(img);
      };

      img.onerror = () => {
        reject(new Error(`Failed to load image: ${path}`));
      };
    });
  }

  static getImage(path: string): HTMLImageElement | undefined {
    return this.images.get(path);
  }
}
