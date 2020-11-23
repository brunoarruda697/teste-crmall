import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MockCupomService {
  mockData = [
    {
      id: 1,
      isRare: true,
      discount: 20.0
    },
    {
      id: 2,
      isRare: false,
      discount: 10.0
    }
  ];
  constructor() { }

  public getAllCupoms() {
    return new Promise((resolve, reject) => {
      resolve({
        data: {
          data: this.mockData,
          total: this.mockData.length,
        },
      });
      reject();
    });
  }
}
