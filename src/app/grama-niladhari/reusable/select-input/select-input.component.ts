import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorDirective } from '../directive/control-value-accessor.directive';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>SelectInputComponent),
      multi: true,
    }
  ]
})
export class SelectInputComponent<T> extends ControlValueAccessorDirective<T> {
  @Input() selectId = '';
  @Input() label='';
  @Input() value1 = '';
  @Input() value2 = '';
  @Input() value3 = '';

}
