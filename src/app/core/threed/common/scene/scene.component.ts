import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { injectStore, extend, NgtArgs } from "angular-three";
import { ModelComponent } from "../model/model.component";

import { OrbitControls } from "three-stdlib";
extend({ OrbitControls });

@Component({
  standalone: true,
  imports: [NgtArgs, ModelComponent],
  templateUrl: "./scene.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SceneComponent {
  protected readonly Math = Math;
  private store = injectStore();
  protected camera = this.store.select("camera");
  protected glDomElement = this.store.select("gl", "domElement");
}
