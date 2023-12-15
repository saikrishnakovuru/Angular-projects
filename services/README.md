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


## Hierarchical Injection

Let's right away come to the point, In our example `app.component` is the parent component to `account.component` and  `new-account.component` components. If a dependency is injected into the parent component, the child components automatically inherit those dependencies.

If we add the same dependency in the providers in the child component's metadata, the instance of the dependency is overridden by the child component.

> just pass the dependency in the constructor and remove it in the providers in component metadata in the `child components`

Since every instance of our dependency is saved in a new memory, we may notice some flaws in our application such as data not being updated in the UI.

## Injecting one service to another service

Adding teh dependencies in the providers pf `app-module` is also a good option to make the dependencies centralized. 

Let's make one service available to another service

We follow 2 steps to make service available to a component as written in the
`Injecting a service into component` section. However, the services don't have the metadata unlike a component. So we use a decorator on the service called `@Injectable()`.

With the example we have in this section, let's consider using the `LoggingService` inside `AccountsService`. Logically only `AccountsService` has to be annotated with `@Injectable()`. However, in the latest versions of angular it's recommended to use `@Injectable()` for both the service classes.    


## Using services for cross-component communication

Just imagine a situation where we need print some data in the `new-account.component` on clicking a button in `account-component`
we normally have to do plenty of steps they are

emmit an event in the `account-component` and get that in the `app.component.html` and use that in the `app.component.ts` and again pass the fetched value to the `new-account.component` via property binding again.

Service helps us in eliminating all these steps.

Let's just simply provide an event in the service class which can trigger in one component and listen to in another.

//service
```typescript
statusUpdate = new EventEmitter<string>();
```
//AccountComponent
```typescript
onSetTo(status: string): void {
    this.accountsService.statusUpdate.emit(status);
  }
```

NewAccountComponent
```typescript
constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
    accountsService.statusUpdate.subscribe(status => alert('status selected is ' + status));
}
```

> The flow is: emit() basically tells the EventEmitter to send a new piece of data to all subscribers. A subscriber is connected via subscribe()

