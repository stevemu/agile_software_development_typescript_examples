import { DB } from './DB.ts';

const db = new DB();
db.store({
  id: 1,
  name: 'Some product',
  price: 100,
  category: 'Some category',
});
console.log(db.getProductData(1));
db.deleteProductData(1);
