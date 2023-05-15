export default class Code {
  constructor(private readonly code: number) {
    if (typeof code !== "number") {
      throw new Error("Code must be a number");
    }
  }

  get value(): number {
    return this.code;
  }
}
