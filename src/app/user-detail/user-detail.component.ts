import { Component, OnInit, Input } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user:User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  setStatus():void{
    this.userService.setStatus(this.user);
  }

}
