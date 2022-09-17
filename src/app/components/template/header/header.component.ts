import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  get icon(): string {
    return this._headerService.headerData.icon
  }

  get title(): string {
    return this._headerService.headerData.title
  }

  get routeUrl(): string {
    return this._headerService.headerData.routeUrl
  }
  
  constructor(private _headerService: HeaderService) { }

  ngOnInit(): void {
  }

}
