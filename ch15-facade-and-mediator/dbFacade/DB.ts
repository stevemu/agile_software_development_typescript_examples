import { ProductData } from './ProductData.ts';

export class DB {
  store(data: ProductData): void {
    console.log(`Stored ${data.name} in the database`);
  }

  getProductData(id: number): ProductData {
    console.log(`Retrieved product data for id ${id}`);
    return {
      id,
      name: 'Some product',
      price: 100,
      category: 'Some category',
    };
  }

  deleteProductData(id: number): void {
    console.log(`Deleted product data for id ${id}`);
  }
}
