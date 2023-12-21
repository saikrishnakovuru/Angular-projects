export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        return new Promise((resolve, reject): void => {
            setTimeout((): void => {
                resolve(this.loggedIn);
            }, 800)
        });
    }

    public login(): void {
        this.loggedIn = true;
    }

    public logout(): void {
        this.loggedIn = false;
    }
}