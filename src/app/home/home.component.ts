import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data: string = "";
  taskName : string = "";
  list: any[] = [];
  startdate :string="";
  deadline :string="";
  status : string ="";
  display : boolean = false;
  temporaryObject : any[] = [];
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.data = params['data'];
      this.list = JSON.parse(JSON.parse(params['list']));
      for (var key in this.list) {
        for (var skey in this.list[key]) {
          if(skey == this.data){
            this.temporaryObject = [this.list[key][skey]];
          }
        }
    }
    })

}


  ngOnInit() {

  }

  displayChanger(){
    if(this.display){
      this.display=false;
    }
    else{
      this.display=true;
    }

  }

  submit(){
    let obj = {};
    obj = { 
      'taskName' : this.taskName,
      'startDate' : this.startdate,
      'deadline' : this.deadline,
    }
    this.taskName = "";
    this.startdate = "";
    this.deadline = "";
    this.temporaryObject[0]['To Do'].push(obj);
    this.displayChanger();

  }

}
