import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';




@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  id!: string;
  jugador! : string;
  icono!: string;
  cuadrado1 = true;
  cuadrado2 = true;
  cuadrado3 = true;
  cuadrado4 = true;
  cuadrado5 = true;
  cuadrado6 = true;
  cuadrado7 = true;
  cuadrado8 = true;
  cuadrado9 = true;

  circulo1 = true;
  circulo2 = true;
  circulo3 = true;
  circulo4 = true;
  circulo5 = true;
  circulo6 = true;
  circulo7 = true;
  circulo8 = true;
  circulo9 = true;

  letrax1 = true;
  letrax2 = true;
  letrax3 = true;
  letrax4 = true;
  letrax5 = true;
  letrax6 = true;
  letrax7 = true;
  letrax8 = true;
  letrax9 = true;

  partida! : string;
  posicion! : any;
  game:any;
  jugador1!: string;


constructor(private route: ActivatedRoute,private db:AngularFirestore) {
    
    this.id = this.route.snapshot.params['id'];
    this.jugador = this.route.snapshot.params['jugador'];
    this.icono = this.route.snapshot.params['icono'];
    // this.posicion = window.localStorage.getItem('posActual')
    
    
}

  ngOnInit(): void {
  }

  /**
   * dataGame
   * Funcion para traer los datos de la partida
   */
  dataGame() {
    this.posicion = {};
   
    this.db.collection('game').doc(this.id).get().forEach(data=>{
          this.partida = data.id;
          this.posicion = data.data();
          
    })
    let arreglo = this.posicion;
    return arreglo;

  }
 

  /**
   * gameInPlay
   * Funcion para validar posiciones y asignar icono segun el criterio 
   */
  public gameInPlay(icon: string, position: number) {
    
    this.dataGame();
  
    if(position == 1){      
        this.savePosition(this.id,1);
      if(icon == '1'){
        this.cuadrado1 = false;
        this.circulo1 = false;
      }else{
        this.cuadrado1 = false;
        this.letrax1 = false;
      }

    }else if(position == 2){      
      this.savePosition(this.id,2);
      if(icon == '1'){
        this.cuadrado2 = false;
        this.circulo2 = false;
      }else{
        this.cuadrado2 = false;
        this.letrax2 = false;
      }

    }else if(position == 3){
      this.savePosition(this.id,3);
      if(icon == '1'){
        this.cuadrado3 = false;
        this.circulo3 = false;
      }else{
        this.cuadrado3 = false;
        this.letrax3 = false;
      }

    }else if(position == 4){
      this.savePosition(this.id,4);
      if(icon == '1'){
        this.cuadrado4 = false;
        this.circulo4 = false;
      }else{
        this.cuadrado4 = false;
        this.letrax4 = false;
      }

    }else if(position == 5){
      this.savePosition(this.id,5);
      if(icon == '1'){
        this.cuadrado5 = false;
        this.circulo5 = false;
      }else{
        this.cuadrado5 = false;
        this.letrax5 = false;
      }

    }else if(position == 6){
      this.savePosition(this.id,6);
      if(icon == '1'){
        this.cuadrado6 = false;
        this.circulo6 = false;
      }else{
        this.cuadrado6 = false;
        this.letrax6 = false;
      }

    }else if(position == 7){
      this.savePosition(this.id,7);
      if(icon == '1'){
        this.cuadrado7 = false;
        this.circulo7 = false;
      }else{
        this.cuadrado7 = false;
        this.letrax7 = false;
      }

    }else if(position == 8){
      this.savePosition(this.id,8);
      if(icon == '1'){
        this.cuadrado8 = false;
        this.circulo8 = false;
      }else{
        this.cuadrado8 = false;
        this.letrax8 = false;
      }

    }else if(position == 9){
      this.savePosition(this.id,9);
      if(icon == '1'){
        this.cuadrado9 = false;
        this.circulo9 = false;
      }else{
        this.cuadrado9 = false;
        this.letrax9 = false;
      }

    }
    
  }

  /**
   * Funcion para guardar las posiciones seleccionadas segun la partida
   * savePosition
   */
   savePosition(id: any ,seleccionado: any) {
     window.localStorage.setItem('posActual', seleccionado);
    this.db.collection('game').doc(id).update({
      posicion : [seleccionado]
    })
  }


}
