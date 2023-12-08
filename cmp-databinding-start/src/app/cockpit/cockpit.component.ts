import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() public serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() public blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();


  public newServerName: string = '';
  public newServerContent: string = '';

  public onAddServer(): void {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  public onAddBlueprint(): void {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
