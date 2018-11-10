import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FakeEndpointService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const friendsList = [
      { id: 1, name: 'Dip', address: 'Kathmandu' },
      { id: 2, name: 'Sam', address: 'Pokhara' },
      { id: 3, name: 'Rick', address: 'Berlin' },
      { id: 4, name: 'Ram', address: 'Butwal' },
      { id: 5, name: 'Andres', address: 'New York' }
    ];
    return { friendsList };
  }
}
