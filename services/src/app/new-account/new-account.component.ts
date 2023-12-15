import {Component, OnInit} from '@angular/core';
import {AccountsService} from "../services/accounts.service";
import {LoggingService} from "../services/logging.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
  }

  ngOnInit() {
  }

  onCreateAccount(name: string, status: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountsService.addAccount({name, status});
    this.loggingService.log(status);
    // console.log('A server status changed, new status: ' + status);
  }
}
