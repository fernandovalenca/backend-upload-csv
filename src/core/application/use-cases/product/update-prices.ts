import { ProductRepository } from "../../repositories/product-repository";

export class UpdatePriceUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(input: Input[]) {
    const newPrices = input.map((product) => {
      if (product.error) {
        throw new Error(
          "File has error or invalid values, please validate again"
        );
      }
      return {
        code: product.code,
        new_price: product.new_price!,
      };
    });

    await this.productRepository.update(newPrices);
  }
}

type Input = {
  code: number;
  name: string;
  cost_price: number;
  sales_price: number;
  new_price: number | null;
  error: string | null;
};
