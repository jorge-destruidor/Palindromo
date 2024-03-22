import { Component } from '@angular/core';



@Component({
  selector: 'app-codidgo',
  templateUrl: './codidgo.component.html',
  styleUrl: './codidgo.component.css'
})
export class CodidgoComponent {

  palavra: string = '';
  resultado: boolean | null = null;

  verificarPalindromo(): void {
    const palavraInvertida = this.palavra.split('').reverse().join('');
    this.resultado = this.palavra.toLowerCase() === palavraInvertida.toLowerCase();
  }
}
