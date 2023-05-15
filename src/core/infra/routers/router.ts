import { HttpServer } from "../../application/protocols/http-server";
import { UpdatePriceUseCase } from "../../application/use-cases/product/update-prices";
import { ValidateNewPricesUseCase } from "../../application/use-cases/product/validate-new-prices";

export class Router {
  constructor(
    private readonly httpServer: HttpServer,
    private readonly validateNewPrices: ValidateNewPricesUseCase,
    private readonly updatePrice: UpdatePriceUseCase
  ) {}

  async init() {
    this.httpServer.on("post", "/validate", async (request) => {
      const { file } = request;

      try {
        const { buffer } = file!;
        const products = await this.validateNewPrices.execute(buffer);

        return {
          status: 200,
          data: products,
        };
      } catch (error) {
        const { message } = error as Error;
        throw new Error(message);
      }
    });

    this.httpServer.on("patch", "/update", async (request) => {
      const { file } = request;

      try {
        const { buffer } = file!;
        const products = await this.validateNewPrices.execute(buffer);
        await this.updatePrice.execute(products);

        return {
          status: 200,
          data: {
            message: "Updated successfully",
          },
        };
      } catch (error) {
        const { message } = error as Error;
        throw new Error(message);
      }
    });

    this.httpServer.listen(3333);
  }
}
