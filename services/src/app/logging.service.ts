
export class LoggingService {

    public log(status: string): void{
        console.log('A server status changed, new status '+ status)
    }
}