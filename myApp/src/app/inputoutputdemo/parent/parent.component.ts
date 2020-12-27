import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit  {

  parentVariable: number = 30

  documents: any= 
    [
      {
        'privacy': 'Internal Use',
        'author': 'IASG'
      }
      ,
      {
        'privacy': 'External Use',
        'author': 'Fx Team'
      }
    ]

  constructor() { }

  @ViewChild(ChildComponent) childObj : ChildComponent;

  ngOnInit() {
    // let author = this.childObj.getAuthor();
    // let privacy = this.childObj.getPrivacy();

    // console.log('author',author);
    // console.log('privacy',privacy);
  }

  ngAfterViewInit(){
    let author = this.childObj.getAuthor();
    let privacy = this.childObj.getPrivacy();

    console.log('author',author);
    console.log('privacy',privacy);    
  }

}
