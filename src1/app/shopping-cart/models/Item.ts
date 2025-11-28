export class Item {
  constructor(
    public productId: number,
    public title: string,
    public price: number,
    public quantity: number,
    public imageUrl: string,
    public discount: number,
    public stock: number,   // percentage
    public inStock: boolean
  ) {}
}