import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public genders: string[] = ['male', 'female'];
  public signUpForm: FormGroup;
  public forbiddenNamesList: string[] = ['sai', 'uj'];

  persons: { name: string, age: number, address: string }[] = [
    {
      name: 'sai',
      age: 26,
      address: 'Florence'
    },
    {
      name: 'uj',
      age: 22,
      address: 'Floral'
    }
  ];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userDetails: new FormGroup({
        userName: new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail.bind(this))
      }),
      gender: new FormControl('male')
    });
    // console.log(this.persons[0]);

  }

  public onSubmit(): void {
    console.log(this.signUpForm);
    this.call();
  }

  public call(): void {
    // this.person.push({
    //   name: 'manikyam'
    // });
  }

  public forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenNamesList.includes(control.value))
      return {'forbiddenName': true};
    return null;
  }

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
}
