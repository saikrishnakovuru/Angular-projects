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

