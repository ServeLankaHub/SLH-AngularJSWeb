import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gnDetailsTable',
  templateUrl: './gnDetailsTable.component.html',
  styleUrls: ['./gnDetailsTable.component.css']
})
export class GnDetailsTableComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;
  constructor() { }

  ngOnInit() {
  }

}
