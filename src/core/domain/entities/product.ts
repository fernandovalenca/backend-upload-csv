import Code from "./code";
import Price from "./price";

export class Product {
  public error: string | null = null;
  public new_price: Price | null = null;
  private constructor(
    public code: Code,
    public name: string,
    public cost_price: number,
    public sales_price: number
  ) {}

  static create(input: Input) {
    return new Product(
      new Code(input.code),
      input.name,
      input.cost_price,
      input.sales_price
    );
  }

  setNewPrice(new_price: number) {
    const tenPercentMore = this.sales_price * 1.1;
    const tenPercentLess = this.sales_price * 0.9;

    if (new_price < this.cost_price) {
      this.error = "New price must be less than the cost price";
    }

    if (new_price > tenPercentMore) {
      this.error = "New price is more than 10% greater than current price";
    }

    if (new_price < tenPercentLess) {
      this.error = "New price is more than 10% less than current price";
    }

    this.new_price = new Price(new_price);
  }

  setError(message: string): void {
    this.error = message;
  }
}

type Input = {
  code: number;
  name: string;
  cost_price: number;
  sales_price: number;
};
