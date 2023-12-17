import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActiveInactiveUsersService} from "../service/ActiveInactiveUsersService";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.css'
})
export class InactiveUsersComponent implements OnInit {
  public users: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  constructor(private userService: ActiveInactiveUsersService) {
  }

  ngOnInit() {
    this.users = this.userService.getInActiveUsers();
  }

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  }
}
