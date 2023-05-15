import { Product } from "../../domain/entities/product";

export interface ProductRepository {
  findOne(id: number): Promise<Product>;
  update(input: Input[]): Promise<void>;
}

type Input = {
  code: number;
  new_price: number;
};
