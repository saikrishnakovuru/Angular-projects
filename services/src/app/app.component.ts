import {Component} from '@angular/core';
import {AccountsService} from "./services/accounts.service";
import {ActiveInactiveUsersService} from "./assignment/service/ActiveInactiveUsersService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent {
  // public accounts: { name: string; status: string; }[];
  //
  // constructor(private accountsService: AccountsService) {
  // }
  //
  // ngOnInit() {
  //   this.accounts = this.accountsService.getAccountDetails();
  // }


  // assignment

  constructor(private userService: ActiveInactiveUsersService) {
  }

  // activeUsers: string[] = ['Max', 'Anna'];
  // inactiveUsers: string[] = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.userService.getInActiveUsers().push(this.userService.getActiveUsers()[id]);
    this.userService.getActiveUsers().splice(id, 1);
  }

  onSetToActive(id: number) {
    this.userService.getActiveUsers().push(this.userService.getInActiveUsers()[id]);
    this.userService.getInActiveUsers().splice(id, 1);
  }
}
