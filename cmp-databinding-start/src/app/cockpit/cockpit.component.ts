import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output()
  public serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output()
  public blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();


  // public newServerName: string = '';
  // public newServerContent: string = '';
  @ViewChild('serverContentInput')
  public serverContentInput: ElementRef;

  public onAddServer(name: HTMLInputElement): void {
    this.serverCreated.emit({
      serverName: name.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  public onAddBlueprint(name: HTMLInputElement): void {
    this.blueprintCreated.emit({
      serverName: name.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
