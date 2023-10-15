import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  readonly url = 'https://viacep.com.br/ws/';
  constructor(private client: HttpClient) { }

  getCep(cep: string) {
    return this.client.get(this.url + cep + '/json/');
  }
}
