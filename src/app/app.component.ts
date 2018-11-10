import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface person {
  id: number;
  name: string;
  address: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private friendsList: person[];

  private url = 'API/friendsList'; 

  constructor(private http: HttpClient) { };

  ngOnInit() {
    this.getAllFriends().subscribe(
      object => this.friendsList = object
    )
  }

  getAllFriends() {
    return this.http.get<person[]>(this.url)
  }
}
