import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamBasics {

  @Input() componentNameFromParent: string;

  public textFiledText: string='';

  public isTextFiledEmpty(): boolean {
    return this.textFiledText.length === 0;
  }

  public onButtonClick(): void{
    this.textFiledText = '';
  }

  public getTextFiledText(): string{
    return this.textFiledText;
  }


}

