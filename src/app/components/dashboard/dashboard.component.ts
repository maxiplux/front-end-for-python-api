import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {LeftBarComponent} from "../../ui/left-bar/left-bar.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    LeftBarComponent
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

}
