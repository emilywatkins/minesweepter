export class Tile {
  public bomb: boolean = false;
  public bombsNear: number = 0;
  constructor(public coordinate: number[] = []) { }
}
