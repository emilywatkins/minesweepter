import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile.model';
import { Board } from '../board.model'

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  board;

  generateBoard(x,y) {
    this.board = new Board();
    for (var i = 0; i<x; i++) {
    	for (var j = 0; j<y; j++) {
        let coord = [];
    	  coord.push(i, j);
        let newTile = new Tile(coord);
        this.board.tiles.push(newTile);
      }
	  }
    // console.log(this.board);
    return this.board;
  }

  generateBomb(min, max, number) {
    // let number = Math.floor(max*.25);
    console.log(number);
    for (let i = 1; i <= number; i++) {
      min = Math.ceil(min);
      max = Math.floor(max);
      let randomIndex = Math.floor(Math.random() * (max - min)) + min;
      if (this.board.tiles[randomIndex].bomb == false) {
        this.board.tiles[randomIndex].bomb = true;
      } else if (this.board.tiles[randomIndex].bomb == true) {
        this.board.tiles[randomIndex+1].bomb = true;
        // this.generateBomb(min, max, (number-1));
      }
    }
  }

  display(tile){
    // console.log(tile);
    if (tile.coordinate[1] == 0) {
      if (tile.bomb == true){
        return "bomb breakBox";
      } else {
        return "b breakBox";
      }
    } else if (tile.coordinate[1] != 0) {
      if (tile.bomb == true){
        return "bomb box";
      } else {
        return "b box";
      }
    }
  }
}
