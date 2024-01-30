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
Instead of writing `<p></p>` inside the child component we projected it form the parent component as a placeholder within
the child component( within the open and closed tags of the child component )

To be able to fetch that projected content we use `ng-content`.

See the blow example how to use the attributes inside content projection.

// card3.component.html
```html
<div class="card">
  <div class="card-header">
    <ng-content select="[header-content]"></ng-content>
  </div>
  <div class="card-main">
    <ng-content select="[main-content]"></ng-content>
  </div>
  <div class="card-footer">
    <ng-content select="[footer-content]"></ng-content>
  </div>
</div>
```

//app.component.html
```html
<div class="container">
  <app-card3>
    <h4 header-content>Card 1: Header (content projection)</h4>
    <p main-content>Card 1:
      <button>Main</button>
      (content projection)
    </p>
    <h4 footer-content>Card 1: Footer (content projection)</h4>
  </app-card3>
</div>
```

In the above example we have projected content from the parent component(app-component) to child(card3), so as a rule of thumb let's fetch the content projected using `ng-content` in the child(card3) component. We gave atrributes to each content projected and fetched them using selected 

https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656102#questions/4970350

# Life Cycle Hooks

## ngOnInit

ngOnInit would be available to the class on implementing OnInit and importing it from the angular/core  

```typescript
import {Component, OnInit} from '@angular/core';

export class ParentComponent implements OnInit {
    
    ngOnInit(): void {
        console.log("parent OnInit is called");
    }
}
```
ngOnInit method is called only called when the component gets loaded into the DOM.

let's see an example to demonstrate that.

In the below example we only enabled the child component only on clicking the Enable child in the parent component.

```html
<button (click)="enableChild()">Enable child</button>
<app-child *ngIf="isChildEnabled"></app-child>
```

```typescript
export class ParentComponent implements OnInit {

    public isChildEnabled: boolean = false;
    constructor() {
        console.log("child constructor is called");
    }

    ngOnInit(): void {
        console.log("parent OnInit is called");
    }

    public enableChild(): void {
        this.isChildEnabled = !this.isChildEnabled;
    }
}
```

```typescript
export class ChildComponent implements OnInit {
    constructor() {
        console.log("child constructor is called");
    }

    ngOnInit(): void {
        console.log("child OnInit is called");
    }
}
```

Initially as soon as the application loads we will only see the parent component's constructor and ngOnInit methods will be called because we only enabled the child component before clicking the enable child button.

## ngOnDestroy

We use ngOnDestroy for the cleanUp activities in that particular component as it gets called before a component is removed or destroyed from the component

The same above example helps in understanding the ngOnDestroy. Click the `Enable child` button for the second time that means we are disabling the child component which means we are destroying the child component in this case ngOnDestroy will be called.

```typescript
import {Component, OnDestroy} from '@angular/core';

export class ParentComponent implements OnDestroy {
    
    ngOnDestroy(): void {
        console.log("parent onDestroy is called");
    }
}
```
## ngOnChanges

ngOnChanges is a lifecycle hook in Angular that is called whenever there is a change to the input properties of a component.

In other words ngOnChanges would be called whenever the data-bound input property changes. data-bound input property is not something that is changed in the same component but from the outside of the component through `@Input`

ngOnChanges is the only hook that has the parameter. 
```typescript
import { OnChanges, SimpleChanges } from '@angular/core';

export class MyComponent implements OnChanges {
    
  ngOnChanges(changes: SimpleChanges): void {
    // React to input changes here
  }
}
```

A simple example

```typescript
@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
})
export class ParentComponent {
  message: string = 'Initial message';

  changeMessage(): void {
    this.message = `Updated message - ${Math.floor(Math.random() * 100)}`; // Simulate dynamic data change
  }
}
```

```html
@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
})
export class ChildComponent implements OnChanges {
  @Input() message: string;

  previousMessage: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.message) {
      this.previousMessage = changes.message.previousValue;
      console.log(`Child component received new message: "${this.message}"`);
      console.log(`Previous message was: "${this.previousMessage}"`);
    }
  }
}
```
```html
<app-child-component [message]="message"></app-child-component>
<button (click)="changeMessage()">Change Message</button>
```

In the above example every time we click the button message gets changed and to react to every change we use ngOnChanges to listen to every change. 

>  ngOnChanges lifecycle hook in Angular is primarily designed to react to changes in data-bound properties, and these properties are typically decorated with` @Input`

## ngDoCheck

In Angular, ngDoCheck is a lifecycle hook that allows you to manually implement custom change detection for a component. This can be useful when the default change detection mechanism is not sufficient to detect specific changes in your component's state.

ngDoCheck is called during every change detection cycle.

It's part of the change detection process and runs more frequently than other lifecycle hooks.

Just like other hooks we also implement DoCheck and import from angular/core.

==============================================================================================================================

## @ContentChild

Similar to @ViewChild, ContentChild is used to fetch the value of local reference in the template.

ng-content is used to project the content from the parent component in the child component.

From the above 2 concepts if we have a local references inside the projected content from the parent that particular local reference can be fetched with the help of @ContentChild

```typescript
@ContentChild('myChild', { static: true }) myChild: ElementRef;
```

`{static:true}` is introduces in newer versions of angular.
