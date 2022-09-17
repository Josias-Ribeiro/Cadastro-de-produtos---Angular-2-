import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _headerService: HeaderService) { 
    _headerService.headerData = {
      title: 'Inicio',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

}
