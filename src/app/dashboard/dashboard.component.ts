import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  currentUser !: string;

  constructor(private userService: UserService) {}

  ngOnInit(): void {

    this.getCurrentUser();
  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe(
      (username) => {
        this.currentUser = username;
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }


  getUser() {
    this.userService.getUser().subscribe(
      (user) => {
        console.log('from dashboard component all user', user);
      },
      (error) => {
        console.log('Error' + error);
      }
    );
  }



getData(){
  this.userService.getData().subscribe(
    (response) => {
      console.log("data", response);
    },
  (error) => {
    console.log('Error' + error);
    
  } 
  );
}






}
