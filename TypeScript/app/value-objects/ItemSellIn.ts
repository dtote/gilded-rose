export class ItemSellIn {
  constructor(public value: number) {}


  static create(value: number) {
    return new ItemSellIn(value)
  }

  decrease() {
    return new ItemSellIn(this.value - 1)
  }

  isLessThan(days: number): boolean {
    return this.value < days
  }

  getValue() {
    return this.value
  }

  equals(s: ItemSellIn) {
    return this.value === s.value
  }
}
