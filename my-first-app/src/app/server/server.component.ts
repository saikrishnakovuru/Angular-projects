import {Component} from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  public serverStatus: string = 'offline';
  public serverId: number = 10;
  public enableAddServerButtonInTimeLimit: boolean = false;
  // variable used for event on button click binding
  public serverCreationStatus: string = 'No server created';

  public serverName: string = '';

  // exercise
  public userName: string = '';

  // ngIf demonstration, to display the server name only on button click.
  public nameCreated: boolean = false;
  public name: string = '';

  //ng-style
  paragraphTextColor: string = '';

  //*ngFor
  public examComponents: string[] = [];


  constructor() {
    setTimeout(() => {
      this.enableAddServerButtonInTimeLimit = true;
    }, 2000);
  }

  getName(): string {
    return 'Server';
  }

  getId(): number {
    return 10;
  }

  getServerStatus(): string {
    return this.serverStatus;
  }

  // method used for event on button click binding
  public onAddServerButtonClick(): void {
    this.serverCreationStatus = 'Server created';
  }

  //exercise
  public resetNameOnClick(): void {
    this.userName = '';
  }

  public isUserNameEmpty(): boolean {
    return this.userName.length === 0;
  }

  // ngIf demonstration.
  public onSubmitButtonClick(): void {
    this.nameCreated = true;
  }

  // =============  ngStyle ================
  public onChangeColorClick(): void {
    // Math.random() > 0.5 ? this.paragraphTextColor = 'blue' : this.paragraphTextColor = `red`;
    this.paragraphTextColor === 'blue' ? this.paragraphTextColor = `red` : this.paragraphTextColor = `blue`;
    //   this.paragraphTextColor = `blue`;
    // this.paragraphTextColor = `red`;
  }

  public getParagraphTextColor(): string {
    return this.paragraphTextColor;
  }

  // =============  ngFor  ===============
  public onAddExamComponentButtonClick(): void{
    this.examComponents.push('');
  }

}
