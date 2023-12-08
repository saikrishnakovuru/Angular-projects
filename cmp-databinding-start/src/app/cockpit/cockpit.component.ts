import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() public serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() public blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();


  // public newServerName: string = '';
  public newServerContent: string = '';

  public onAddServer(name: HTMLInputElement): void {
    this.serverCreated.emit({
      serverName: name.value,
      serverContent: this.newServerContent
    });
  }

  public onAddBlueprint(name: HTMLInputElement): void {
    this.blueprintCreated.emit({
      serverName: name.value,
      serverContent: this.newServerContent
    });
  }
}
