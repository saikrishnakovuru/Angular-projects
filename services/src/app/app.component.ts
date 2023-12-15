import {Component, OnInit} from '@angular/core';
import {AccountsService} from "./services/accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {
  public accounts: { name: string; status: string; }[];

  constructor(private accountsService: AccountsService) {
  }

  ngOnInit() {
    this.accounts = this.accountsService.getAccountDetails();
  }

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }
  //
  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}
