import { Component, Input } from '@angular/core';
import { CrearService } from './crear.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eva2023Parraga';
  @Input() name = "Michelle"
  

  constructor(private CrearService: CrearService) { 
  }

  ngOnInit() {
  }
}
