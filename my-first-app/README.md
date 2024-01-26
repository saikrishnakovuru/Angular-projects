## PropertyBinding vs String Interpolation

`Property Binding` is Recommended very much to always use property binding for dynamic properties of an element

`String Interpolation` to display the output text.

In the stringInterpolation we can also call the method written in TS class. However, that should return a string; 
```java
// TS Code
 getName(): string {
    return 'Server';
  }

  getId(): number {
    return 10;
  }

  getServerStatus(): string {
    return this.serverStatus;
  }
  // HTML Code
   <p>
    {{getName()}} with id {{getId()}} is {{getServerStatus()}}
  </p>
```

## Directives

# Structural directives
Structural directives change the structure of the DOM by adding, removing, or manipulating elements. They are preceded by an asterisk (*) in the syntax. The most common structural directive is `*ngIf`.

Other examples of structural directives include `*ngFor` for iterating over a list and `*ngSwitch` 

# Attribute directives
Attribute directives modify the appearance or behavior of an element.

They are applied to elements as attributes. Unlike structural directives, they don't change the structure of the DOM. Examples of attribute directives include `ngStyle and ngClass`.


## Different way of using selector

```typescript
@Component({
  selector: "app-server",
  templateUrl:'./server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent{

}
```
In the above code snippet selector is declared in the normal way. If we enclose teh selector between  `[]` , then the way we call the selector to attach that particular component into HTML changes

```typescript
selector: "[app-server]"
```

with the above change in representing selector the way we render it on to the HTML page changes 

```html
<div app-server></div>
```


another alternate is to select by class which looks like

```typescript
selector: ".app-server"
```

now the HTML code to render the component looks like 

```html
<div class="app-server"></div>
```