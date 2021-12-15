import { Injectable } from "@angular/core";

//decorador de servicio. En los servicios consumimos las api-rest
@Injectable()
export class PetsService {

  //Personaje es la interfaz que vamos a importar
  private _cats = [
    {
    id: 1,
    name: "Michi",
    age: "3 años",
    description: "A Michi le gusta jugar con ratoncitos y dormir en las alturas."
  },

  {
    id: 2,
    name: "Blasa",
    age: "1 año",
    description: "Blasa es muy tranquila y le gusta dormir la siesta."
  },

  { id: 3,
    name: "Blanquita",
    age: "6 meses",
    description: "Blanquita es amistosa y se lleva bien con gatos y perros."
  }
  ];

  private _dogs = [
    {
    id: 1,
    name: "Tobby",
    age: "6 meses",
    description: "Tobby es muy cariñoso, obediente y es un mestizo de labrador con Border Collie."
  },

  {
    id: 2,
    name: "Gastón",
    age: "5 años",
    description: "Gastón es un galgo discreto y elegante. Le gustan los niños."
  },

  {
    id: 3,
    name: "Loli",
    age: "1 año",
    description: "A Loli le encanta jugar a la pelota y salir a dar paseos por el campo."
  }
  ];


  get cats() {
    return [...this._cats];
  }

  get dogs() {
    return [...this._dogs];
  }

  constructor(){
    console.log("Servicio Iniciado");
  }



}
