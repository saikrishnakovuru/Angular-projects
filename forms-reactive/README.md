## Creating form in TS class

To make use if reactive form approach `ReactiveFormsModule` has to be imported in `app.module.ts`.

```typescript
public signUpForm: FormGroup;

ngOnInit() {
    this.signUpForm = new FormGroup({
        userName: new FormControl(null),
        email: new FormControl(null),
        gender: new FormControl('male')
    });
}
```
`FormGroup` is the one that manages and handles the form.

`FormControl` accepts 3 parameters
1. Default vales that we would like to set to the field.
2. Add Validators
3. Asynchronous validators.

## Syncing HTML and form created in TS

Two steps are involved in doing this 

In this step we are binding FormGroup declared in TS to the form in HTML.
```html
<form [formGroup]="signUpForm"></form>
```
Now by doing the above step HTML form is `synchronized` with the form we created in TS class.

As part of next step we connect the controls. For this we have a directive called `formControlName`.

```html
<input
        type="text"
        id="username"
        class="form-control"
        formControlName="userName">
```

`formControlName` i.e `userName` must match with the name we defined in the control in TS class.

## Submitting the form

```html
<form [formGroup]="signUpForm" (ngSubmit)="onSubmit()"></form>
```

Remember we used a local reference to get hold of the form in TD approach. However, we don't need that now because, HTML form is now synchronized with TS form. We can right away print the form in TS class like below

```typescript
public signUpForm: FormGroup;

public onSubmit(): void {
    console.log(this.signUpForm);
}
```

By this we can see the whole form data printed in the console similar to the form data in TD approach.

## Adding validation and getting access to controls

```typescript
ngOnInit() {
    this.signUpForm = new FormGroup({
        userName: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        gender: new FormControl('male')
    });
}
```
Here in this approach we validate the fields in TS file itself.

```html
<input
        type="text"
        id="username"
        class="form-control"
        formControlName="userName">
<p *ngIf="!signUpForm.get('userName').valid && signUpForm.get('userName').touched">
  Please enter userName!
</p>
```
signUpForm.get('userName') fetches the specific field.

```html
<p *ngIf="!signUpForm.valid && signUpForm.touched">
```
`signUpForm.valid` returns the whole form.

## Grouping controls.

While representing JavaScript objets (JSON) we would need few of the details as part of a sub object. That means we need to group our controlls. Let's see how it can be done

```typescript
  ngOnInit() {
    this.signUpForm = new FormGroup({
        userDetails: new FormGroup({
            userName: new FormControl(null, Validators.required),
            email: new FormControl(null, [Validators.required, Validators.email])
        }),
        gender: new FormControl('male')
    });
}
```

We added userName and email to a sub object which is userDetails. We generally declare group as `FormGroup` and controlls as `FormControl`.

Since we divided our couple of controls into a `FormGroup` HTML has to be changed eventually. So, lets wrap those 2 controls into a div.

```html
<div formGroupName="userDetails">
  <div class="form-group">
    <label for="username">Username</label>
    <input
            type="text"
            id="username"
            class="form-control"
            formControlName="userName">
    <p *ngIf="!signUpForm.get('userDetails.userName').valid && signUpForm.get('userDetails.userName').touched">
      Please enter userName!
    </p>
  </div>
  <div class="form-group">
    <label for="email">email</label>
    <input
            type="text"
            id="email"
            class="form-control"
            formControlName="email">
    <p *ngIf="!signUpForm.get('userDetails.email').valid && signUpForm.get('userDetails.email').touched">
      please enter valid email!
    </p>
  </div>
</div>
```

`formGroupName` must match with the newly created FormGroup so, it should look like `formGroupName="userDetails"`

One more thing we need to look into is to access the control, we need to get it through userDetails
```html
<p *ngIf="!signUpForm.get('userDetails.userName').valid && signUpForm.get('userDetails.userName').touched">
```

## Creating custom validations

Let's implement a scenario where user should not be able to enter specific names in userName filed.

```typescript
public forbiddenNamesList: string[] = ['sai', 'uj'];

ngOnInit() {
    this.signUpForm = new FormGroup({
        userDetails: new FormGroup({
            userName: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
            email: new FormControl(null, [Validators.required, Validators.email])
        }),
        gender: new FormControl('male')
    });
}

public forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenNamesList.includes(control.value))
        return {'forbiddenName': true};
    return null;
}
```

we create a method that equates with the name user entered as an userName to one of the value in the forbidden list, which is `forbiddenNames`.

As part of next step bind that method to the userName control in ngOnInit `this.forbiddenNames.bind(this)`.

let's look into the related HTML code, there won't be any additional logic we would write in the HTML but just display messages to let the user know why the form is invalid.

```html
<div class="form-group">
  <label for="username">Username</label>
  <input
          type="text"
          id="username"
          class="form-control"
          formControlName="userName">
  <div *ngIf="!signUpForm.get('userDetails.userName').valid && signUpForm.get('userDetails.userName').touched">

    <div *ngIf="signUpForm.get('userDetails.userName').errors['forbiddenName']">
      Entered name is forbidden!
    </div>
    <div *ngIf="signUpForm.get('userDetails.userName').errors['required']">
      Please enter userName!
    </div>
  </div>
</div>
```
The key thing we need to notice here is, we captured the `forbiddenName` we set in the TS code while the userName is invalid.

## crating a custom async validators

FormControl accepts async validators as the third parameter.

Now, let's go ahead and create an asynchronous validation to validate the email control.

```typescript
public forbiddenEmail(control: FormControl): Observable<any> | Promise<any> {
    const promise: Promise<any> = new Promise<any>((resolve, reject) => {
    setTimeout(() => {
        if (control.value === 'test@test.com')
            resolve({'forbiddenEmail': true});
        else resolve(null);
    }, 1000);
});
return promise;
}
```

use the custom validator to email control 

```typescript
ngOnInit() {
    this.signUpForm = new FormGroup({
        userDetails: new FormGroup({
            userName: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
            email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail.bind(this))
        }),
        gender: new FormControl('male')
    });
}
```

`this.forbiddenEmail.bind(this)` as part of `email`.

## Reset the form

we can simply reset the form simply calling reset() method later clicking the submit button.

```typescript
onsubmit(){
    this.signUpForm.reset();
}
```

## setValue and patchValue

setValue method is used to set the values for all form controls in the form group.

The below code should be called in a new method after clicking submit which is `(ngSubmit)="onSubmit()"` 
```typescript
this.signUpForm.setValue({
    'userData':{
        'userName': 'Max',
        'email': 'max@test.com'
    },
    'gender': 'male',
    'hobbies': []
})
```
The patchValue method is used to set the values for some or all form controls in the form group.
```typescript
this.signUpForm.patchValue({
    'userData':{
        'userName': 'max'
    }
})
```
