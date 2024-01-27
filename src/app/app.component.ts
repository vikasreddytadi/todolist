import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
  data: any[] =[];
  datastring:string = "";
  dataNames: any[] =[];
  constructor(){
    this.dataNames=['FreelanceProject','SBIOutsource','HPCLProject1'];
    this.data=[ {FreelanceProject : { 'To Do' : [] , 'In Progress' : [] , 'In Review' : [] , 'Completed' :[]}},
    {SBIOutsource : { 'To Do' : [] ,'In Progress' : [] , 'In Review' : [] , 'Completed' : []}},
    {HPCLProject1 : { 'To Do' : [], 'In Progress' : [] , 'In Review' : [] , 'Completed' : []}}];
    this.datastring= JSON.stringify(this.data);

  }
 
  
}
