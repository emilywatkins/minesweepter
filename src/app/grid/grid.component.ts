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
}

//create board object, generateBoard creates new Board. show that board in page.
