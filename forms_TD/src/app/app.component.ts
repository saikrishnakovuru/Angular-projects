import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f')
  public signUpForm: NgForm;

  public defaultSecurityOption: string = 'pet';
  public description: string = '';
  public genders: string[] = ['male', 'female'];

  public user: { name: string, mail: string, secretQuestion: string, description: string, gender: string };
  public isFormSubmitted: boolean = false;

  suggestUserName() {
    const suggestedName: string = 'Superuser';
    this.signUpForm.form.patchValue({
      username: suggestedName
    });
  }

  // onSubmit(formReference: NgForm) {
  //   console.log(formReference);
  // }

  onSubmit() {
    this.isFormSubmitted = true;
    console.log(this.signUpForm);
    this.user = {
      name: this.signUpForm.value.username,
      mail: this.signUpForm.value.email,
      secretQuestion: this.signUpForm.value.secret,
      description: this.signUpForm.value.description,
      gender: this.signUpForm.value.gender
    }
    console.log(this.user);
  }
}
