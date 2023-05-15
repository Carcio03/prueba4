import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit, OnChanges {
  @Input() registros: any[] = [];
  registrosMostrados: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.registros && this.registros.length > 0) {
      this.registrosMostrados = this.registros;
    }
  }
}
