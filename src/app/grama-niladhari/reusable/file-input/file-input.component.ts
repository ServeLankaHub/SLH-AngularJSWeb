import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorDirective } from '../directive/control-value-accessor.directive';

type InputType = 'file'
@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=>FileInputComponent),
    multi:true,
  }
    
  ]
})
export class FileInputComponent<T> extends ControlValueAccessorDirective<T> {
  @Input() id = '';
  @Input() type:InputType = 'file';
  @Input() label ='';

}
