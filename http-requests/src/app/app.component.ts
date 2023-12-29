import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";
import {Post} from "./post.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loadedPosts: Post[] = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.fetchPosts();
    }

    onCreatePost(postData: { title: string; content: string }) {
        // Send Http request
        console.log(postData);
        this.http
            .post(
                'https://fir-backend-584e5-default-rtdb.firebaseio.com/posts.json',
                postData
            ).subscribe(responseData => console.log(responseData));
    }

    onFetchPosts() {
        // Send Http request
        this.fetchPosts();
    }

    onClearPosts() {
        // Send Http request
    }

    private fetchPosts(): void {
        this.http
            .get<{ [key: string]: Post }>('https://fir-backend-584e5-default-rtdb.firebaseio.com/posts.json')
            .pipe(
                map(responseData => {
                    const postsArray: Post[] = [];
                    for (let key in responseData) {
                        postsArray.push({...responseData[key], id: key});
                    }
                    return postsArray;
                })
            )
            .subscribe(allPosts => {
                this.loadedPosts = allPosts
                console.log(this.loadedPosts);
            });
    }
}