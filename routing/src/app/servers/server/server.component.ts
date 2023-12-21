import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // let id: number;
    // this.route.params.subscribe(param => id = +param);


    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    this.route.params.subscribe(params => {
      this.server = this.serversService.getServer(+params['id'])
    });
  }

  public onEditServer(): void {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: "preserve"});
    // this.router.navigate(['/servers', this.server.id, 'edit']);
  }

}
