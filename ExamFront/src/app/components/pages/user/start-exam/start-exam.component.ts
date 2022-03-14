import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';





@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {
  questions
  quizId = 0
  finishExam = false;
  passStatus = false;

  finishButton = false;
  minute = 0;
  second = 60;

  Attempted = 0
  correct = 0
  percentage = 0

  
  
  constructor(private router: Router, private queService: QuestionsService,private _route:ActivatedRoute) {     
  }
    
    
    
    ngOnInit(): void {
      this.quizId = this._route.snapshot.params['qId']
      this.loadQuestions();
      this.startexam()
    }
    
    
    
    loadQuestions() {
      this.queService.getQuestions(this.quizId).subscribe(
        (data: any) => {
          this.questions = data;
          this.questions.forEach((q) => {
            q['userAns'] = '';
          });
          this.minute = this.questions.length * 2 - 1;
        },
        (error) => {
          Swal.fire(
            {
              icon: 'error',
              text: "error in loading questions !!! pleasr try again"
            }
            )
            this.router.navigate(['user'])
            if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
      
      
      )
    }
    
    
    //marks calculation
    calculateMarks() {
      this.questions.forEach((q) => {
        if (q.userAns !== '') {
          this.Attempted++;
          if (q.userAns.trim().toUpperCase() === q.answer.trim().toUpperCase()) {
            this.correct++;
          }
        }
      });
    this.percentage = (this.correct / this.questions.length) * 100;
    if (this.correct >= (this.questions.length / 2)) {
      this.passStatus = true
    }
  }

//method call after finish button click  
  finishexam() {
    Swal.fire({
      title: 'Do you want to Finish exam?',
      showCancelButton: true,
      confirmButtonText: 'Finish',
    }).then((result) => {
      
      if (result.isConfirmed) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        }
        this.calculateMarks()
        this.finishButton = true
        this.finishExam = true;
        clearInterval(this.clearInt)
      }
    })
    
  }
  
  //variable for storing the interval
  clearInt:any
  
  //timer
  startexam() {
    let t: any = window.setInterval(() => {
      window.document.getElementById('timer')!.innerHTML = this.minute + "min " + this.second + "sec"
      this.second--
      if (this.second <= 0 && this.minute <= 0) {
        Swal.fire({
          title: "Time Has Ended",
          timer:2000
        })
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
        this.finishExam = true;
        this.calculateMarks()
        clearInterval(t)
      }

      //check broweser under control or not
      this.checkFullScreenMode()

      this.clearInt=t
      if (this.second <= 0) {
        this.minute--;
        this.second = 60
      }
    }, 1000)
  }

//method for checking the browser is under control or not
checkFullScreenMode(){
    if (document.hidden) {
      Swal.fire(
        {
          
          title: "Browser is out of control !!!",
          text: "You are disqualified from exam",
        }
        )
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
        
        this.router.navigate(['user'])
        clearInterval(this.clearInt)
      }
    }


    printResult(){
      window.print()
    }
}
