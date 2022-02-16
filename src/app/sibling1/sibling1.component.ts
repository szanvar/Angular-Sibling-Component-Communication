import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  name : string = "";

  constructor(private message : MessageService) { }

  ngOnInit(): void {
  }

  inputOnChange()
  {
    this.message.sendMessage(this.name);
  }

}
