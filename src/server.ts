import { UpdatePriceUseCase } from "./core/application/use-cases/product/update-prices";
import { ValidateNewPricesUseCase } from "./core/application/use-cases/product/validate-new-prices";
import { ExpressHttpServerAdapter } from "./core/infra/protocols/express-http-server-adapter";
import { ProductRepositoryMysql } from "./core/infra/repositories/prisma/product-repository-mysql";
import { Router } from "./core/infra/routers/router";

const httpServicer = new ExpressHttpServerAdapter();
const productRepository = new ProductRepositoryMysql();
const validaNewPrices = new ValidateNewPricesUseCase(productRepository);
const updatePrice = new UpdatePriceUseCase(productRepository);

const router = new Router(httpServicer, validaNewPrices, updatePrice);

router.init();
