import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
})
export class DinamicosComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  nombreValido(): boolean {
    return (
      this.miFormulario?.controls['nombre']?.invalid &&
      this.miFormulario?.controls['nombre']?.touched
    );
  }

  persona: Persona = {
    nombre: 'Edy',
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'Death Stranding' },
    ],
  };

  nuevoJuego: string = '';

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    };

    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }

  eliminarFavorito(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  guardar() {
    console.log('Formulario posteado');
  }
}
