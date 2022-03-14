import { Component, OnInit } from '@angular/core';
import { QuizzesService } from 'src/app/services/quizzes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewquizes',
  templateUrl: './viewquizes.component.html',
  styleUrls: ['./viewquizes.component.css']
})
export class ViewquizesComponent implements OnInit {

  quizes = [
    {
      quizId: '',
      title: '',
      description: '',
      maxMarks: '',
      numberOfQuestions: '',
      active: '',
      category: {
        title: '',
      }
    }
  ]


  updatequiz = {
    quizId: '',
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: false,
    category: null
  }

  constructor(private service: QuizzesService) {
  }

  ngOnInit(): void {
    this.service.getQuizzes().subscribe(
      (data: any) => {
        this.quizes = data;
        console.log(data);
      },
      (error) => {
        console.log(error)
        Swal.fire({
          icon: 'error',
          text: 'Error!!! error in loading data!!!'
        })
      }
    )
  }

  delete(id: any) {

    Swal.fire({
      title: 'Do you want to Delete Quiz ?',

      confirmButtonText: 'Delete',
      showCancelButton: true,

    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.service.deleteQuiz(id).subscribe(
          (success) => {
            this.quizes = this.quizes.filter((quiz) => quiz.quizId != id);
            Swal.fire({
              icon: "success",
              text: "Quiz deleted successfully"
            })
          },
          (error) => {
            Swal.fire({
              icon: "error",
              text: "something went wrong"
            })
          }
        )
      }
    })
  }

  updateclick(quiz: any) {
    this.updatequiz = quiz;
  }

  updateQuiz() {
    if (this.updateQuiz == null) {
      alert("Something went wrong")
    }
    this.service.updateQuiz(this.updatequiz).subscribe(
      (success) => {
        console.log(success)
      },
      (error) => {
        console.log(error)
      }
    )
    document.getElementById("cancel")?.click();
  }
}
