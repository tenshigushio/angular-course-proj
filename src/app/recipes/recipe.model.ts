export class Recipe {
  //blueprint for objects we create
  public name: string;
  public description: string;
  public imagePath: string; //urlpath for the image
  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
