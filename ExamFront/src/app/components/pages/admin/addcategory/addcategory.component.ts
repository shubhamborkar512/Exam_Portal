import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategariesService } from 'src/app/services/categaries.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  category={
    title:"",
    description:""
  }

  constructor(private cateogroyService:CategariesService,private router:Router) { }

  ngOnInit(): void {
  }

  formAdd(){
    if(this.category.title==""){
      Swal.fire({
        icon:"error",
        title:"Category Title Required"
      })
      return
    }
    if(this.category.description.length<=5){
      Swal.fire({
        icon:"error",
        text:"Category Description Must be greater than 5 word"
      })
      return
    }
      this.cateogroyService.addCategory(this.category).subscribe(
        (success)=>{
          this.category.title=""
          this.category.description=""
          Swal.fire({
            icon:"success",
            title:"Successful"
          })
        },
        (error)=>{
          Swal.fire({
            icon:"error",
            text:"Something went wrong!!!"
          })
        }
      )
      this.router.navigate(["/admin"])
  }
}
