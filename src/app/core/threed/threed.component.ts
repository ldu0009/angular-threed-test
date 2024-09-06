import { Component } from "@angular/core";
import { SceneComponent } from "./common/scene/scene.component";
import { NgtCanvas, extend } from "angular-three";
import * as THREE from "three";
extend(THREE);

@Component({
  selector: "app-threed",
  standalone: true,
  imports: [NgtCanvas],
  templateUrl: "./threed.component.html",
  styleUrl: "./threed.component.scss",
})
export class ThreedComponent {
  readonly Scene = SceneComponent;
}
