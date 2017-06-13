import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users = [];
  user = {
    firstName: '',
    lastName: '',
  }

  title = 'Angular Playground';

  num = 1;

  onSubmit() {
    event.preventDefault();
    console.log(this.user);
    this.users.push(this.user);
    this.user = {
      firstName: '',
      lastName: '',
    }
  };

	logNum(){
		console.log("num is: ", this.num);
	};

  numIncrement() {
    this.num++;
  };

}
