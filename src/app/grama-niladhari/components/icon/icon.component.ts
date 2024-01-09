import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent {
  @Input() name: string = '';
  @Input() width: string = '24';
  @Input() height: string = '24';
  @Input() color: string = 'black';



  ngOnInit() {

  }

}
