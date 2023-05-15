import { ProductRepository } from "../../repositories/product-repository";
import { Readable } from "stream";
import readline from "readline";
import { Product } from "../../../domain/entities/product";

export class ValidateNewPricesUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(buffer: ArrayBufferLike): Promise<Output[]> {
    const products: Product[] = [];
    const readableFile = new Readable();
    readableFile.push(buffer);
    readableFile.push(null);

    const productsLine = readline.createInterface({
      input: readableFile,
    });

    for await (let line of productsLine) {
      const productLineSlip = line.split(",");

      if (
        productLineSlip[0] !== "product_code" &&
        productLineSlip[1] !== "new_price"
      ) {
        const product = await this.productRepository.findOne(
          Number(productLineSlip[0])
        );

        product.setNewPrice(Number(productLineSlip[1]));

        products.push(product);
      }
    }

    return products.map((item) => ({
      code: item.code.value,
      name: item.name,
      cost_price: item.cost_price,
      sales_price: item.sales_price,
      new_price: item.new_price?.value || null,
      error: item.error,
    }));
  }
}

type Output = {
  code: number;
  name: string;
  cost_price: number;
  sales_price: number;
  new_price: number | null;
  error: string | null;
};
