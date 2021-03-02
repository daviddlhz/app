import { Component } from '@angular/core';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
  nombre: String = 'Prueba UDEM';
  personas: any;
  addPerson: any = {
    nombres: '',
    apellidos: '',
    documento: '',
    telefono: '',
  };
  constructor(private personasService: PersonasService) {
    this.getPersonas();
  }

  getPersonas() {
    this.personasService.getAllPersonas().subscribe(
      (result) => {
        this.personas = result.persona;
      },
      (err) => {
        console.log(JSON.stringify(err));
      }
    );
  }
  savePersona() {
    this.personasService.addPersonas(this.addPerson).subscribe(
      (result) => {
        this.getPersonas();
      },
      (err) => {
        console.log(JSON.stringify(err));
      }
    );
  }
}
