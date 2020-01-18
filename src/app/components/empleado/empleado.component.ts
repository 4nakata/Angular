import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  providers: [EmpleadoService],
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  registroForm: FormGroup;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private _empleadoService: EmpleadoService
    ) { }


  ngOnInit() {
    this.registroForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],
      fechaNacimiento: ['', [Validators.required,]],
      correoElectronico: ['', [Validators.required, Validators.email]],
      puesto: ['', Validators.required],
      skill: ['', Validators.required]
    });
  }
  get f() { return this.registroForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registroForm.invalid) {
        return;
    }
    this._empleadoService.createEmpleado(this.registroForm.value).subscribe(
      response => {
        console.log(response)
    
      },
      error => {
        console.error(error)
      }
      )
  
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registroForm.value, null, 4));
}

}
