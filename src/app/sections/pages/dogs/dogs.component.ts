import { Component } from '@angular/core';
import { PetsService } from 'src/app/service/pets.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {

  constructor(private petService: PetsService) {}


  get dogs(){
    return this.petService.dogs;
  }

  ngOnInit(): void {
  }

}
