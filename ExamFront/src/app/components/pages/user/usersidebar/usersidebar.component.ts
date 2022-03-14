import { Component, OnInit } from '@angular/core';
import { CategariesService } from 'src/app/services/categaries.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent implements OnInit {

  categories=[
  {
    cid:'',
    title:'',
    description:''
  }]

  constructor(private categoryService:CategariesService) { }

  ngOnInit(): void {
    this.categoryService.getCategaries().subscribe(
      (data:any)=>{
        this.categories=data;
      },
      (error)=>{
        Swal.fire(
          {
            icon:"error",
            text:"Error in loading data"
          }
        )
      }
    )
  }

}
