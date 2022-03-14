import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  qId: any;

  questions = [
    {
      qid: '',
      quiz: {
        quizId: '',
        title: '',
        description: '',
        maxMarks: '',
        numberOfQuestions: ''
      },
      image: '',
      content: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      answer: ''
    }
  ]

  question = {
    qid: '',
    quiz: {
      quizId: '',
      title: '',
      description: '',
      maxMarks: '',
      numberOfQuestions: ''
    },
    image: '',
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''
  }

  constructor(private _route: ActivatedRoute, private router: Router, private service: QuestionsService) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];

    this.service.getQuestions(this.qId).subscribe(
      (data: any) => {
        this.questions = data
      },
      (error) => {
        Swal.fire(
          {
            icon: 'question',
            text: "Questions for this quiz not exist!!!",
            timer: 2000
          }
        )
        this.router.navigate(["/admin/quizes"])
      }
    )

  }
  delete(id: any) {
    this.service.deletequestion(id).subscribe(
      (data) => {
        this.ngOnInit()
      },
      (error) => {
        console.log(error)
      }
    )
  }

  updateQueEvent(i: any) {
    this.question = i
  }

  updateQue(data: any) {
    this.question.content = data.content
    this.question.option1 = data.option1
    this.question.option2 = data.option2
    this.question.option3 = data.option3
    this.question.option4 = data.option4
    this.question.answer = data.answer
    this.service.update(this.question).subscribe(
      (success) => {
        Swal.fire(
          {
            icon: "success",
            text: "Updated Successfully",
            timer:2000
          }
        )
      },
      (error)=>{
        Swal.fire(
          {
            icon:"error",
            text:"Somthing went wrong",
            timer:2000
          }
        )
        console.warn(error)
      }
    )
    document.getElementById("close")?.click();
  }

}
