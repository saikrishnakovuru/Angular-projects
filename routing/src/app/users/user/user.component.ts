import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
    public user: { id: number, name: string };
    private paramsSubscription: Subscription;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.paramsSubscription = this.activatedRoute.params
            .subscribe(
                (params: Params): void => {
                    this.user = {
                        id: params['id'],
                        name: params['name']
                    }
                }
            );
    }

    ngOnDestroy() {
        this.paramsSubscription.unsubscribe();
    }
}
