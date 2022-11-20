export class ItemName {
  constructor(public value: string) {}

  getValue() {
    return this.value
  }

  static create(value: string) {
    return new ItemName(value)
  }
}
