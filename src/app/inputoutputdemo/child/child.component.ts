import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childVariable : string  
  @Input() privacy : string
  @Input() author : any
  
  constructor() { }

  ngOnInit() {
    console.log(this.childVariable);
    console.log(this.privacy);
    console.log(this.author);
  }

  getAuthor(){
    return 'Author 1';
  }

  getPrivacy(){
    return 'Privacy 1';
  }

}
