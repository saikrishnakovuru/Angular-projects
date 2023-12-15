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