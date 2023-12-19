# Angular routes

Routes helps in switching between the pages. In other words, We bring a specific component on to the page through the routes.

We associate a path to each component in the app.module.ts

Thi's is how typically the app.module.ts looks like

```typescript
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UsersComponent,
        ServersComponent,
        UserComponent,
        EditServerComponent,
        ServerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [ServersService],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

Now lets define our routes

```typescript
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'servers', component: ServersComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UsersComponent,
        ServersComponent,
        UserComponent,
        EditServerComponent,
        ServerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [ServersService],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

In order to let angular know which component has to be called on calling which path, we define those in Routes like shown in hte above example.

> HomeComponent path is left empty, that is just to make it the default path that means, `localhost:4200` is the default URL loaded and some page has to show up which is Home component in our case by making it empty.

We are not yet done, we just declared the routes however, they need to get registered somewhere and that place is `RouterModule in imports`.

```typescript
imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ]
```

## Rendering

As we registered our routes, we now don't right away call the component by its name ex: `<app-server></app-server>` we 
instead call `<router-outlet></router-outlet>` which is a `directive`.

## Navigating with routerLinks

So, we declared and registered our routes and used `<router-outlet></router-outlet>` to switch between pages and there's one last step 
yet to be done which is by giving routerLinks.

> In Angular, routerLink is typically used inside the anchor (</a> ) tag to create navigation links

``` html
<ul class="nav nav-tabs">
  <li role="presentation" class="active"><a routerLink="/">Home</a></li>
  <li role="presentation"><a routerLink="/servers">Servers</a></li>
  <li role="presentation"><a [routerLink]="['/users']" >Users</a></li>
</ul>
```

Another way of using routerLink is by propertyBinding used for `/users` in the above code snippet. 
If we right away write the path inside " " after declaring routerLink inside [], angular will search for that variable in ts file which is wrong so we again define it as a string.

> `[routerLink]="/users"` --> angular searches for /users variable in ts file. So, we make it a string `[routerLink]="'/users'"`

To make it simpler when we need to attach multiple routes we enclose it in between array again `[routerLink]="['/users']"`
for example `[routerLink]="['/users','user']"` now the path is `/users/user`.