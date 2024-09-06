import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import iro from "@jaames/iro";
import { ColorPickerService } from "./color-picker.service";

@Component({
  selector: "app-color-pixer",
  standalone: true,
  imports: [],
  templateUrl: "./color-pixer.component.html",
  styleUrl: "./color-pixer.component.scss",
})
export class ColorPixerComponent implements AfterViewInit {
  @ViewChild("picker") picker: ElementRef<HTMLDivElement>;

  public colorPicker: iro.ColorPicker;

  constructor(private colorPickerService: ColorPickerService) {}

  ngAfterViewInit(): void {
    if (this.picker) {
      this.colorPicker = iro.ColorPicker(this.picker.nativeElement, {
        width: 100,
        color: "#f00",
      });

      this.colorPicker.on("color:change", (color) => {
        this.colorPickerService.color$.next(color.hexString);
      });
    }
  }
}
