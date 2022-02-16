import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {

  name : string = "";

  constructor( private message : MessageService) { }

  ngOnInit() 
  {
     this.message.getMessage().subscribe(data => {
       if (data){
          this.name = data;
        }
     })
  }

}
