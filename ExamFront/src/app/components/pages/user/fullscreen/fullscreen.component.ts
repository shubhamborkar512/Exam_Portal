import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.css']
})
export class FullscreenComponent implements OnInit {

  constructor(private router:Router,private _route:ActivatedRoute) { }

  quizId
  
  ngOnInit(): void {
    this.quizId=this._route.snapshot.params['qId']
  }

  elem=document.documentElement;
  fullScreen(){
    Swal.fire({
      title: 'Do you want to start exam?',
      // showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Start',
    }).then((result) => {
      
      if (result.isConfirmed) {
        if(this.elem.requestFullscreen){
          this.elem.requestFullscreen();
          this.router.navigate([this.quizId+'/startexam'])
        }
        
      } 
    })


  }

  
}
