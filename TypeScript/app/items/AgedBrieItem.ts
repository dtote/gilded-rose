import { Item } from "./Item";
import { ItemName } from '../value-objects/ItemName';
import { ItemSellIn } from "../value-objects/ItemSellIn";
import { ItemQuality } from "../value-objects/ItemQuality";

export class AgedBrieItem  extends Item {
  private static DOUBLE_QUALITY_INCREMENT_SELL_IN_THRESHOLD = 0

  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
    super(name, sellIn, quality)
  }

  update(): void {
    this.decreaseSellin()
    this.increaseQuality()

    if (this.hasToBeSoldInLessThan(AgedBrieItem.DOUBLE_QUALITY_INCREMENT_SELL_IN_THRESHOLD)) {
      this.increaseQuality()
    }
  }
}

