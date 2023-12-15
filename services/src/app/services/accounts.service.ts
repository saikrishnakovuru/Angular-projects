import {EventEmitter} from "@angular/core";

export class AccountsService {
    private accounts: { name: string, status: string }[] = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Test Account',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    public statusUpdate = new EventEmitter<string>();

    public addAccount(newAccount: { name: string, status: string }): void {
        this.accounts.push(newAccount);
    }

    public updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
    }

    public getAccountDetails(): { name: string; status: string; }[] {
        return this.accounts;
    }
}