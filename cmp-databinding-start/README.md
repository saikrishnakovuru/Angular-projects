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

using None removes the unique selector added by angular and the styles gets applied globally though on writing in one CSS file.