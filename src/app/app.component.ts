import { Component } from "@angular/core";
import { ThreedComponent } from "./core/threed/threed.component";
import { ColorPixerComponent } from "./core/common/color-pixer/color-pixer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ThreedComponent, ColorPixerComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {}
