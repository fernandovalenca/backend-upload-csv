type HttpMethod = "get" | "post" | "patch" | "put" | "delete";

type Request = {
  headers: any;
  body: any;
  params: any;
  query: any;
  file?: Buffer;
};

export interface HttpServer {
  on(
    method: HttpMethod,
    url: string,
    callback: (request: Request) => Promise<any>
  ): void;
  listen(port: number): void;
}
