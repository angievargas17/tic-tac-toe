import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'; 
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private db:AngularFirestore) { }

  ngOnInit(): void {
  }

  /**
   * Funcion para tomar los parametros iniciales de la partida
   * game
   */
  public game() {
    const id =Math.random().toString(36).substring(2);
    
    Swal.fire({
      title: 'El codigo de su partida es:',
      text: id,
      imageUrl: '/assets/image/tic-tac-toe_39453.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      showCancelButton: true,
      confirmButtonColor: '#372CE7',
      cancelButtonColor: '#A32CE7',
      confirmButtonText: 'Iniciar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
          this.selectFigure(id);
      }
    })
  }

  /**
   * Funcion para seleccionar el icono de la partida 
   * selectFigure
   */
  selectFigure(id: any){
    Swal.fire({
      title: '<strong>Seleccione su icono!</strong>',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#372CE7',
      cancelButtonColor: '#A32CE7',
      confirmButtonText: '<img src="/assets/image/icono1.png" width="10%">',
      cancelButtonText: '<img src="/assets/image/icono2.png" width="10%">',
    }).then((result) => {
      if (result.isConfirmed) {
        const figure = '1';
        this.saveGame(id,figure);
        this.router.navigate(['/game',id,1,1]);
      }else{
          const figure = '2';
          this.saveGame(id,figure);
          this.router.navigate(['/game',id,1,2]);
      }
    })

    
  }
  

  /**
   * Funcion para guardar una nueva partida
   * saveGame
   */
  saveGame(identificador: any, figure : any) {
    this.db.collection('game').doc(identificador).set({
      id: identificador,
      jugador1 : 'jugador 1',
      icono1 : figure      
    })
  }

  

  

  

}
