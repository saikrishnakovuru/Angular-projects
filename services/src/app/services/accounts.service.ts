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

    public addAccount(newAccount: { name: string, status: string }): void {
        console.log(newAccount);
        this.accounts.push(newAccount);
        console.log(this.accounts);
    }

    public updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
    }

    public getAccountDetails(): { name: string; status: string; }[] {
        return this.accounts;
    }
}