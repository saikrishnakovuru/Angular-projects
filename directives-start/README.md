
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

