import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl,Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})

export class ComposeComponent implements OnInit {

  
  tname:string="Enter mailid"
  mailcon:string="Enter content"

  
    constructor(
      private router:Router,
      private route:ActivatedRoute
    ) { }
       maillist = [ 
         {
         tname:'',
         mailcon:''
         }
        
       ]
       sendMail(proname:any,procon:any)
       {
        this.maillist.push(proname.value)
         this.maillist.push(procon.value)
      
      this.router.navigate(['./send'],{
     queryParams:{maillist:JSON.stringify(this.maillist)}
      })
    }
    ngOnInit(): void {
      
      
    }
    
   
  }
