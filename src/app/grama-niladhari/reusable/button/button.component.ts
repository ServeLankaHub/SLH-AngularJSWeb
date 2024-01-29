import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessorDirective } from '../directive/control-value-accessor.directive';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent<T> extends ControlValueAccessorDirective<T> {

  @Input() type = '';
  @Input() btnName = '';
}
