## Injecting a service into component

Instead of log functions every were let's create a LoggingService and use it to log our logs.

To use the LoggingService class we should inject it to our component in order to use it.

```typescript
@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css'],
    providers: [LoggingService]
})
export class AccountComponent {

    constructor(private loggingService: LoggingService) {
    }
}
```
2 steps are involves in injecting a class into a component 

1. Declare the service in the constructor.
2. Add that particular service as part of providers in the component metadata.