import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  viewChild,
} from "@angular/core";
import { ColorPickerService } from "../../../common/color-pixer/color-picker.service";
import { Mesh, MeshStandardMaterial } from "three";

@Component({
  selector: "app-model",
  standalone: true,
  imports: [],
  templateUrl: "./model.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModelComponent implements AfterViewInit {
  protected readonly Math = Math;

  public color = "#ffffff";
  meshRef = viewChild.required<ElementRef<Mesh>>("mesh");

  constructor(private colorPickerService: ColorPickerService) {}

  ngAfterViewInit(): void {
    this.colorPickerService.color$.subscribe((color) => {
      this.color = color;
      const mesh = this.meshRef().nativeElement;
      (mesh.material as MeshStandardMaterial).color.set(color);
    });
  }
}
