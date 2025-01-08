import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  character: any;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadCharacterDetail(+id);
    }
  }

  loadCharacterDetail(id: number) {
    this.loading = true;
    this.characterService.getCharacterById(id).subscribe((data) => {
      this.character = data;
      this.loading = false;
    });
  }
}
