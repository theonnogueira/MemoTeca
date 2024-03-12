import { Component, OnInit, NgModule } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {}

  async criar() {
    await this.service.create(this.pensamento).subscribe();
    await alert('Pensamento criado!');
    this.router.navigate(['/listarPensamento']);
  }
  async cancelar() {
    alert('Pensamento cancelado!');
    await this.router.navigate(['/listarPensamento']);
  }
}
