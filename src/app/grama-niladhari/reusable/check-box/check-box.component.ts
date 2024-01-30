import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessorDirective } from '../directive/control-value-accessor.directive';
import { NG_VALUE_ACCESSOR } from '@angular/forms';



type InputType = 'checkbox'
@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>CheckBoxComponent),
      multi: true,
    }
  ]
})
export class CheckBoxComponent<T> extends ControlValueAccessorDirective<T> {

  @Input() label ='';
  @Input() flexCheckChecked = '';
  @Input() value = '';
  @Input() checkbox:InputType = 'checkbox';

  

}
