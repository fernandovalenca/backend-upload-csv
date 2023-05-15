export default class Price {
  constructor(private readonly price: number) {
    if (typeof price !== "number") {
      throw new Error("price must be a number");
    }
  }

  get value(): number {
    return this.price;
  }
}
