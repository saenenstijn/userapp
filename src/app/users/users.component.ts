import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {USERS} from "../mock-users";
import {UserService} from "../user.service";
import {timer} from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    console.log(this.getUsers())
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }





  
  getUsers(): void {
    timer(0, 2000).subscribe(() => {
      this.userService.getUsers().subscribe(users => this.users = users);
    });

  }
}

