export class ActiveInactiveUsersService {
    private activeUsers: string[] = ['Max', 'Anna'];
    private inactiveUsers: string[] = ['Chris', 'Manu'];

    public getActiveUsers(): string[] {
        return this.activeUsers;
    }

    public getInActiveUsers(): string[] {
        return this.inactiveUsers;
    }
}