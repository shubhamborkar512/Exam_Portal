import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzesService } from 'src/app/services/quizzes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.css']
})
export class QuizesComponent implements OnInit {
  
  constructor(private quizService: QuizzesService, private _route: ActivatedRoute,private router:Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  
  categoryId = null;
  categoryTitle = null;
  
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
  
  ngOnInit(): void {
    this.categoryId = this._route.snapshot.params['id'];
    this.categoryTitle = this._route.snapshot.params['category'];
    this.quizService.getQuizzesById(this.categoryId).subscribe(
      (data: any) => {
        this.quizes = data
      },
      (error) => {
        Swal.fire(
          {
            icon: 'error',
            text: 'Error in loading quizes'
          }
        )
      }
    )
  }

}
