import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
        { id: 1, title:'Apple Mac-Book Pro', price: 1799, imgurl:'http://cdn.cultofmac.com/wp-content/uploads/2014/03/old-MacBook-Pro-13-640x386.jpg' },
        { id: 2, title:'Panasonic GH-4', price: 1299, imgurl:'http://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/12/2014/07/Panasonic_Lumix_DMC_GH4_front.jpg' }
    ];
    return {products};
  }
}
