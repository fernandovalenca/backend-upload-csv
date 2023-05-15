import { HttpServer } from "../../application/protocols/http-server";
import express, { Application, Request, Response, Router } from "express";
import multer, { Multer } from "multer";
import cors from "cors";

export class ExpressHttpServerAdapter implements HttpServer {
  private app: Application;
  private multer: Multer;
  private router: Router;

  constructor() {
    this.app = express();
    this.app.use(cors());
    this.app.use(express.json());
    this.router = Router();
    this.multer = multer();
    this.app.use(this.router);
  }

  on(
    method: "get" | "post" | "patch" | "put" | "delete",
    url: string,
    callback: Function
  ): void {
    this.router[method](
      url,
      this.multer.single("file"),
      async (req: Request, res: Response) => {
        try {
          const output = await callback(req);

          res.status(output.status || 200).json(output.data);
        } catch (error) {
          const { message } = error as Error;
          return res.status(400).json({
            error: message,
          });
        }
      }
    );
  }
  listen(port: number): void {
    this.app.listen(port, () => console.log(`listening on ${port}`));
  }
}
