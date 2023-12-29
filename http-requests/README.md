## Sending POST Request

`HttpClientModule` has to be imported in `app.module.ts` whereas the component class `HttpClient` should be made use of to make HTTP tequests

```typescript
constructor(private http: HttpClient) {}
```

Let's go ahead and make a POST request to `fireBase` which is in the URL `https://fir-backend-584e5-default-rtdb.firebaseio.com`

```typescript
onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    this.http
        .post(
            'https://fir-backend-584e5-default-rtdb.firebaseio.com/posts.json',
            postData
        ).subscribe(responseData => console.log(responseData));
  }
```

/posts is to create a folder and .json is firebase thing which is not needed for other APIs.

***
> Important point to keep in mind

Requests are only send when we subscribe. That means, in the above code snippet try removing .subscribe(), we would never be able to send the request to API.
***

## Fetching/getting data

```typescript
 private fetchPosts(): void {
    this.http
        .get('https://fir-backend-584e5-default-rtdb.firebaseio.com/posts.json')
        .pipe(
            map(responseData => {
                const postsArray = [];
                for (let key in responseData) {
                    postsArray.push(responseData[key]);
                }
                return postsArray;
            })
        )
        .subscribe(allPosts => console.log(allPosts));
}
```

