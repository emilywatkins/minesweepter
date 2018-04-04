import { Component, OnInit } from '@angular/core';
import { Tile } from '../tile.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  board: Tile[] = this.generateBoard(?);

  generateBoard(x,y) {
    let board: Tile[] = [];
    for (var i = 0; i<x; i++) {
    	for (var j = 0; j<y; j++) {
        let coord = [];
    	  coord.push(i, j);
        let newTile = new Tile(coord);
        board.push(newTile);
      }
	  }
    console.log(board);
    return board;
  }
}

//create board object, generateBoard creates new Board. show that board in page.
