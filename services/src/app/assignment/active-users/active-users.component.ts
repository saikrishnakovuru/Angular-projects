import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActiveInactiveUsersService} from "../service/ActiveInactiveUsersService";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css'
})
export class ActiveUsersComponent implements OnInit {
  users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userService: ActiveInactiveUsersService) {
  }

  ngOnInit() {
    this.users = this.userService.getActiveUsers();
  }

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }
}
