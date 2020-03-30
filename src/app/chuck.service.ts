import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  private state = 'Chuck Norris can stop the earth from turning';
  private subject = new BehaviorSubject<string>(this.state);

  constructor() { }

  public getFact$() {
    return this.subject.asObservable();
  }

  public setFact() {
    this.subject.next('Chuck Norris can stop the coronavirus')
  }
}
