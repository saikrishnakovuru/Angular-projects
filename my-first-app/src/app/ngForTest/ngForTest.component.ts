import {Component} from "@angular/core";

@Component({
  selector: 'test-ngFor',
  templateUrl: './ngForTest.component.html',
  styleUrls: ['./ngForTest.component.css']
})
export class TestNgForComponent {

  public dynamicComponentName: string = '';
  public componentsList: string[] = [];

  public addComponentToComponentsList(): void {
    this.componentsList.push(this.dynamicComponentName);
    this.dynamicComponentName = '';
    console.log(this.componentsList);
  }

  public isNameInputFieldEmpty(): boolean {
    return this.dynamicComponentName === '';
  }
}
