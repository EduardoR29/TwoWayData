import { Component } from '@angular/core';
import { Alumno } from './models/alumno';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alumnosArray:Alumno[] = [
    {id:1,nombre:"Migue Angel",grado:"10",edad:20},
    {id:2,nombre:"Daniel",grado:"2",edad:20},
    {id:3,nombre:"JUAn",grado:"1",edad:20},
    {id:4,nombre:"jesus",grado:"8",edad:20},
    {id:5,nombre:"nora ",grado:"8",edad:20},
  ]
  selectAlumno:Alumno = new Alumno();
  addorEdit(){
    if(this.selectAlumno.id === 0 ){
      this.selectAlumno.id = this.alumnosArray.length+1
      this.alumnosArray.push(this.selectAlumno)
    }
    this.selectAlumno = new Alumno();
  }
  openforEdit(alumno:Alumno){
    this.selectAlumno = alumno
  }
  delete(){
    if(confirm("deseas eliminar lo seleccionado")){
      this.alumnosArray = this.alumnosArray.filter(item => item!= this.selectAlumno)
      this.selectAlumno = new Alumno();
    }
  }
}
