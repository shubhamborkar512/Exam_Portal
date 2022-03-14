import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'Exam_portal';

  constructor(private router:Router){

  }

  ngOnInit(): void {
    localStorage.clear()
  }

  show(){
    if(this.router.url.toString().endsWith('/startexam')){
      return false;
    }
    return true;
  }

}
