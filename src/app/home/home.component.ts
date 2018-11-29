import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeTab = 'about';

  activeCall(activeTab){
     if(activeTab == "about"){
      this.activeTab = "about";
     }else if(activeTab == "result"){
      this.activeTab = "result";
     }else if(activeTab == "admission"){
      this.activeTab = "admission";
     }else if(activeTab == "result"){
      this.activeTab = "result";
     }else if(activeTab == "event"){
      this.activeTab = "event";
     }else if(activeTab == "ncc"){
      this.activeTab = "ncc";
     }else if(activeTab == "contact"){
      this.activeTab = "contact";
     }
   // this.activeTab = activeTab;
  }
  
  admission(activeTab){
    this.activeTab = activeTab;
  }
  // result(activeTab){
  //   this.activeTab = activeTab;
  // }
  constructor() { 
    
  }

  ngOnInit() {
  }

}
