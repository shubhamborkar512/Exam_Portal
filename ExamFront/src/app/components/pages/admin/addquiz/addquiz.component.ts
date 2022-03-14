import { Component, OnInit } from '@angular/core';
import { CategariesService } from 'src/app/services/categaries.service';
import { QuizzesService } from 'src/app/services/quizzes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css']
})
export class AddquizComponent implements OnInit {

  quiz={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    category:null,
    active:false
  }

  category=[
    {
    cid:'',
    title:"",
    description:""
  }
  ]
  constructor(private service:CategariesService,private quizService:QuizzesService) { 
  }
  
  ngOnInit(): void {
    this.service.getCategaries().subscribe(
      (data:any)=>{
        this.category=data;
        
      },
      (error)=>{
        Swal.fire({
          icon:"error",
          text:"Error in loading data!!!"
        })
      }
    )
  }

  formAdd(){
    if(this.quiz.category==null){
      Swal.fire({
        icon:"error",
        text:"Please Select Category"
      })
      return 
    }
    console.log(this.quiz)
    this.quizService.addQuiz(this.quiz).subscribe(
      (data)=>{
        this.quiz={
          title:'',
          description:'',
          maxMarks:'',
          numberOfQuestions:'',
          category:null,
          active:false
        }
      
        Swal.fire({
          icon:'success',
          text:"Added Successfully"
        })
      },
      (error)=>{
        Swal.fire(
          {
            icon:"error",
            text:"Something went wrong"
          }
        )
      }
    )
  }
}
