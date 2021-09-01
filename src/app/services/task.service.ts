import { Injectable } from '@angular/core';

import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks:Task[]=[];

  
  constructor() {

    this.tasks = [

      {
        title:'read',
        description:'i have to read',
        hide:true
      },
      {
        title:'create a website',
        description:'i have to create a website',
        hide:true
      }
  

    ];

   }

    getTasks(){

      if (localStorage.getItem('tasks') === null){
        return this.tasks;
      } else {
          
         this.tasks = JSON.parse(localStorage.getItem('tasks')!);
         return this.tasks;
      }
      
    }
    
    addTask(task:Task){


        this.tasks.push(task);
        let tasks: Task[] =[];
        
        if (localStorage.getItem('tasks') === null){
            tasks.push(task);
            localStorage.setItem('tasks',JSON.stringify(tasks));
        } else {
          tasks =JSON.parse(localStorage.getItem('tasks')!) ;
          tasks.push(task);
          localStorage.setItem('tasks',JSON.stringify(tasks));
        }



        return false;
    }

    deleteTask(task:Task){

      for (let index = 0; index < this.tasks.length; index++) {
        
          if (this.tasks[index] === task){
               this.tasks.splice(index,1);
               localStorage.setItem('tasks',JSON.stringify(this.tasks));
          }
        
      }

    }

}
