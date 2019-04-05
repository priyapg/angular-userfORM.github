import { Component } from '@angular/core';
import { Project, Build, SubBuild } from '../project';
import { PROJECT, BUILD, SUB_BUILD } from '../project-data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  projects: Project[]=PROJECT;
  builds: Build[]=BUILD;
  subBuilds: SubBuild[]=SUB_BUILD;
  
 onCancel(userForm){
   userForm.reset();
   console.log("form reset");

 }
 onSubmit(userForm){
   console.log(userForm.value);
   
 }
}
