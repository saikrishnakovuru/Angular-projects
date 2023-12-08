## View Encapsulation

This is a feature provided by the angular where all the elements in each component will be give an unique selector.

mechanism that allows you to isolate the styles of a component
from the styles of the rest of the application. This can be useful for preventing styles from conflicting with each other, and for making it easier to maintain your code.

The default one is Emulated and the other options are None and ShadowDom

```java
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
  encapsulation: ViewEncapsulation.None
})
```

using None removes the unique selector to the elements in a component added by angular and the styles gets applied globally though on writing in one CSS file.

## Local references in templates

This is an alternate to {(ngModel)} where we can right away use the text entered in a field. However, we can use that inside the template not in the TS file.  

```html
    <label>Server Name</label>
    <input type="text" class="form-control" #serverNameInput>
    <label>Server Content</label>
    <input type="text" class="form-control" [(ngModel)]="newServerContent">
    <br>
    <button
            class="btn btn-primary"
            (click)="onAddServer(serverNameInput)">Add Server
    </button>
    <button
            class="btn btn-primary"
            (click)="onAddBlueprint()">Add Server Blueprint
    </button>
```

```typescript
public newServerName: string = '';
public newServerContent: string = '';

public onAddServer(serverName: HTMLInputElement): void {
    this.serverCreated.emit({
        serverName: serverName.value,
        serverContent: this.newServerContent
    });
}

public onAddBlueprint(): void {
    this.blueprintCreated.emit({
        serverName: this.newServerName,
        serverContent: this.newServerContent
    });
}
```
we used `serverNameInput` as a local reference in the above example. We cannot right away use that in the TS file if it is not passed as an argument to a method.