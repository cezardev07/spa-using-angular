import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-angular';

  state: boolean = true
  classToggle: string = ""

  toggle() : void{
    this.state = !this.state
    if(this.state === true)  this.classToggle = ""
    if(this.state === false) this.classToggle = "close"
  }
}
