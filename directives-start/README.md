
# Directives

In Angular, directives are a way to extend and modify the behavior of elements in the DOM.

## Attribute Directives:

`Purpose`: Attribute directives are used to change the appearance of a DOM element by manipulating its attributes.

`Usage`: They are applied as attributes of elements in the template.

`Example`: `ngClass`, `ngStyle` are common attribute directives that dynamically set the class or style of an element based on certain conditions


## Structural Directives:

`Purpose`: Structural directives are used to modify the structure of the DOM by adding or removing elements.

`Usage`: They are applied as attributes with an `asterisk (*)` in the template.

`Example`: `ngIf`, `ngFor`, and `ngSwitch` are common structural directives that conditionally add or remove elements, or repeat elements based on a collection.

## Binding to directive properties

look into the section of binding-to-directive-properties to see how to set the properties to directive from the host element

> Host element is the one that uses our directive.

```typescript
import { Directive} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'yellow';
}
```

We usually annotate out component with `@Component` similarly we annotate the directive with `@Directive` with a selector to specify the directive name.

When you use @HostBinding('style.backgroundColor'), you are telling Angular to bind the property backgroundColor of the host element's style object

Look into the folder `using-hostBinding we right away target the style in the CSS class.

In the folder `binding-to-directive-properties` we also declared few properties to the directive to that the user can set the values to the directive in the host element.

## Creating our own structural Directive

# Behind the seens of using `*`
Instead of using `*` in front of any structural directive we can use <ng-template></ng-template> to achieve the same.

```html
<p *ngIf="isTrue">
  Condition passed
</p>
```

Lets replace this with `ng-template`

```html

<ng-template [ngIf]="isTrue">
  Condition passed
</ng-template>
```

# Cretaing structural directive

```typescript
@Directive({
    selector: '[unless]'
})
export class UnlessDirective {

    @Input() set unless(condition: boolean) {
        if (!condition) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainerRef.clear();
        }
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef
    ) {
    }
}
```

we defined the setter in front of unless, this allows us to perform the custom logic when ever the value of the input property changes  

The two parameters in the constructor are TemplateRef and ViewContainerRef.

`TemplateRef (what)` is basically provides access to the structure of the template. Instances of TemplateRef are typically obtained from the ng-template.

`ViewContainerRef (where)` represents a container `where` views can be attached and detached dynamically.

## ngSwitch

One more directive that needs to be covered is ngSwitch, it is identical to normal switch case

```typescript
value: number = 5
```

```html
<div [ngSwitch]="value">
  <p *ngSwitchCase="1">value is 1</p>
  <p *ngSwitchCase="2">value is 2</p>
  <p *ngSwitchCase="3">value is 3</p>
  <p *ngSwitchCase="4">value is 4</p>
  <p *ngSwitchCase="5">value is 5</p>
  <p *ngSwitchDefault>Default value</p>
</div>
```

## Notes on creating own attributeDirectives 

```typescript
@Directive({
  selector: 'appBasicHighlight',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
```

```HTML
<div class="row">
    <h1>
      <appBasicHighlight>Test Basic Highlight directive</appBasicHighlight>
    </h1>
  </div>
```

# CASE:1
When the selector `appBasicHighlight` is NOT ENCLOSED between `[]`, so to access the directive we should use the above way of calling it as an element `<appBasicHighlight></appBasicHighlight>`

# CASE:2
When the selector `appBasicHighlight` is ENCLOSED between `[]` like
```Typescript
@Directive({
  selector: '[appBasicHighlight]',
})
```

we can right away use that like
```HTML
 <div class="row">
    <p appBasicHighlight>Test Basic Highlight directive</p>
  </div>
```