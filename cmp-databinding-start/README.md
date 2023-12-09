## View Encapsulation

This is a feature provided by the angular where all the elements in each component will be give an unique selector.

mechanism that allows you to isolate the styles of a component
from the styles of the rest of the application. This can be useful for preventing styles from conflicting with each other, and for making it easier to maintain your code.

The default one is Emulated and the other options are None and ShadowDom

```typescript
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

> Here in the below example we used localReferences using method

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

## Local reference using `@ViewChild`

We can also fetch the value of local reference in the template using the decorator `@ViewChild`

```html
<input type="text" class="form-control" #serverContentInput>
```

```typescript
@ViewChild('serverContentInput')
  public serverContentInput: ElementRef;

  public onAddServer(name: HTMLInputElement): void {
    this.serverCreated.emit({
      serverName: name.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
```
> ElementRef should be imported from angular/core.


## ngContent

ng-content is used to project content from the parent component into a designated placeholder within the child component

```html
<!-- parent.component.html -->
<div>
  <h2>Parent Component</h2>
  <app-child>
    <p>This content is projected into the child component.</p>
  </app-child>
</div>
```

```html
<!-- child.component.html -->
<div class="child-container">
  <h3>Child Component</h3>
  <ng-content></ng-content>
</div>
```
Instead of writing <p></p> inside the child component we projected it form the parent component as a placeholder within
the child component( within the open and closed tags of the child component )

To be able to fetch that projected content we use `ng-content` 