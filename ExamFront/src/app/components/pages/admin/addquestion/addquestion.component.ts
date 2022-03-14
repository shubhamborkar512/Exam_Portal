import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  public Editor=ClassicEditor

  quizId:any
  question={
    qid:'',
    quiz: {
        quizId:'',
    },
    image:'',
    content:'',
    option1:'',
    option2:'',
    option3: '',
    option4: '',
    answer:''
}

  constructor(private router:Router,private _route:ActivatedRoute,private service:QuestionsService) { }

  ngOnInit(): void {
    this.quizId = this._route.snapshot.params['qid'];
    this.question.quiz.quizId=this.quizId;
  }

  formAdd(){
      if(this.question.quiz.quizId==null || this.question.quiz.quizId==''){
        Swal.fire(
          {
            icon:"error",
            text:"Something went wrong!!!"
          }
        )
        return ;
      }

      if(this.question.content=='' || this.question.answer=='' || this.question.option1=='' || this.question.option2=='' || this.question.option3=='' || this.question.option4==''){
        Swal.fire({
          icon:"error",
          text:"Please Check that all options or question or answer type or not"
        })
        return
      }
      this.service.addQuestion(this.question).subscribe(
        (data)=>{
          Swal.fire(
            {
              icon:"success",
              text:"Question Added Successfully!!!"
            }
          )
          this.question={
            qid:'',
            quiz: {
                quizId:'',
            },
            image:'',
            content:'',
            option1:'',
            option2:'',
            option3: '',
            option4: '',
            answer:''
        }
        this.router.navigate(['admin/quiz/questions/'+this.quizId])
        },
        (error)=>{
          console.log(error);
        }
      )
  }
}
