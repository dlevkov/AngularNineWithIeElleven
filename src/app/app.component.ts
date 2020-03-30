// javascript discruture
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hello-world';
  theJoke: string;
  sub: Observable<string>;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.retrieveJoke();
    this.sub.subscribe(x => {
      this.theJoke = x;
    });
  }

  retrieveJoke(): void {
     this.sub = this.httpClient.get<{value: string}>('https://api.chucknorris.io/jokes/random')
       .pipe(
         map(x => x.value)
       );
  }
}
