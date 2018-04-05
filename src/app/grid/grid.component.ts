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
    console.log(this.board);
    return this.board;
  }

  generateBomb(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(min,max);
    console.log(Math.floor(Math.random() * (max - min)) + min);
    let randomIndex = Math.floor(Math.random() * (max - min)) + min;
    this.board.tiles[randomIndex].bomb = true;
  }

  display(tile){
    if (tile.coordinate[1] == 0){
      return "b breakBox";
    } else if (tile.coordinate[1] != 0) {
      return  "b box";
    } else {
      return "b box";
    }
  }
}


//create board object, generateBoard creates new Board. show that board in page.
