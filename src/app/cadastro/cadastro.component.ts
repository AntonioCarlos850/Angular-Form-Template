import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private service: CepService) { }

  ngOnInit(): void {
  }

  validateCep(e: any, form: NgForm){
    const cep = e.target.value;
    if (cep) {
      this.service.getCep(cep).subscribe(
        data => this.fillAddress(data, form)
      );
    }
  }

  fillAddress(data: any, form: NgForm){
    form.form.patchValue({
      endereco: data.logradouro,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.localidade,
      estado: data.uf
    });
  }

  register(form: NgForm){
      if (form.valid) {
        this.router.navigate(['/sucesso']);
      }
  }
}
