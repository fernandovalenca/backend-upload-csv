import { ProductRepository } from "../../../application/repositories/product-repository";
import { Product } from "../../../domain/entities/product";
import { prisma } from "./main";

export class ProductRepositoryMysql implements ProductRepository {
  private readonly prisma;
  constructor() {
    this.prisma = prisma;
  }

  async findOne(id: number): Promise<Product> {
    try {
      const productFound = await this.prisma.products.findUnique({
        where: {
          code: id,
        },
      });

      if (!productFound) {
        throw new Error("Product not found");
      }

      const product = Product.create({
        code: Number(productFound.code),
        name: productFound.name,
        cost_price: Number(productFound.cost_price),
        sales_price: Number(productFound.sales_price),
      });

      return product;
    } catch (error) {
      throw new Error(`Error find product by code: ${id}`);
    }
  }

  async update(input: Input[]): Promise<void> {
    try {
      input.forEach(
        async (item) =>
          await this.prisma.products.update({
            where: { code: item.code },
            data: {
              sales_price: item.new_price,
            },
          })
      );
    } catch (error) {
      throw new Error("Error to update products");
    }
  }
}

type Input = {
  code: number;
  new_price: number;
};
