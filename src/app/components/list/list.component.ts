import { Component, OnInit } from '@angular/core';
import { ListCharacters } from 'src/app/models/list-character.model';
import { CharacterService } from 'src/app/services/character.service';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('fadeIn', [
      state(
        'void',
        style({
          opacity: 0.2,
        })
      ),
      transition('void <=> *', animate(1000)),
    ])
  ]
})
export class ListComponent implements OnInit{
  listCharacters: ListCharacters | null =null;
  viewList: boolean = true;
  loading = false;
  currentPage = 1;
  pages: number[] = [];

  constructor( private characterService: CharacterService ) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters() {
    this.loading = true;
    this.characterService.getCharacters(this.currentPage).subscribe((listCharacters) => {
      if (listCharacters){
        this.listCharacters = listCharacters;
        this.pages = [];
        for (let i = 1; i <= listCharacters.info.pages; i++) {
          this.pages.push(i);
        }
      }
      this.loading = false;
    });
  }

  setView( viewList: boolean ) {
    this.viewList = viewList;
  }

  viewDetail(id: number) {
    console.log("detail->",id);
    // Navigate to detail view
  }
}
