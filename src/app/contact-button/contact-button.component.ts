import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.scss']
})
export class ContactButtonComponent implements OnInit {
  
  @Input() title:string = "";
  
  constructor() {
  }

  ngOnInit(): void {
  }

}
