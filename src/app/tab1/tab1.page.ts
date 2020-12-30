import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}

    ngOnInit(){
      let num =10;
      debugger; //con esto se detiene automaticamente en el navegador
      num = 20;
      num = num + 5;
      num = 0;
    
      console.log(num);
    }

}
