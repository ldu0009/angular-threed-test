import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ColorPickerService {
  public color: string = "#ffffff";
  public color$: BehaviorSubject<string> = new BehaviorSubject<string>(
    this.color
  );
  constructor() {}
}
