import { Component, OnInit } from '@angular/core';
import { CategariesService } from 'src/app/services/categaries.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  categaries=[
    {
      title:"",
      description:""
    }
  ]

  constructor(private category:CategariesService,private cateogroyService:CategariesService) {
    this.category.getCategaries().subscribe(
      (data:any)=>{
        this.categaries=data;
        
      },
      (error)=>{
        Swal.fire({
          icon:"error",
          text:"Error in loading data!!!"
        })
      }
    )
   }

  ngOnInit(): void {
  }

}
