import { Component } from '@angular/core';
import { PetsService } from 'src/app/service/pets.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent  {

  constructor(private petService: PetsService) {}

  get cats(){
    return this.petService.cats;
  }

  ngOnInit(): void {
  }

}
