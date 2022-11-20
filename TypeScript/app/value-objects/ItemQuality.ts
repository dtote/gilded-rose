export class ItemQuality {
  private static MIN_QUALITY = 0
  private static MAX_QUALITY = 50

  constructor(public value: number) { }

  static create(value: number) {
    return new ItemQuality(value)
  }

  increase() {
    const increasedValue = this.value + 1
    if (increasedValue > ItemQuality.MAX_QUALITY) {
      return new ItemQuality(ItemQuality.MAX_QUALITY)
    }
    return ItemQuality.create(increasedValue)
  }

  decrease() {
    const decreasedValue = this.value - 1
    if (decreasedValue < ItemQuality.MIN_QUALITY) {
      return new ItemQuality(ItemQuality.MIN_QUALITY)
    }
    return ItemQuality.create(decreasedValue)
  }

  reset() {
    return new ItemQuality(0)
  }

  getValue() {
    return this.value
  }
}
