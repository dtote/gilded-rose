import { Item } from "./Item";
import { ItemName } from '../value-objects/ItemName';
import { ItemSellIn } from "../value-objects/ItemSellIn";
import { ItemQuality } from "../value-objects/ItemQuality";

export class BackstagePassItem  extends Item {
  private static DOUBLE_QUALITY_INCREMENT_SELL_IN_THRESHOLD = 11
  private static TRIPLE_QUALITY_INCREMENT_SELL_IN_THRESHOLD = 6
  private static RESET_QUALITY_SELL_IN_THRESHOLD = 1

  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
    super(name, sellIn, quality)
  }

  update(): void {
    this.decreaseSellin()
    this.increaseQuality()

    if (this.hasToBeSoldInLessThan(BackstagePassItem.DOUBLE_QUALITY_INCREMENT_SELL_IN_THRESHOLD)) {
      this.increaseQuality()
    }

    if (this.hasToBeSoldInLessThan(BackstagePassItem.TRIPLE_QUALITY_INCREMENT_SELL_IN_THRESHOLD)) {
      this.increaseQuality()
    }

    if (this.hasToBeSoldInLessThan(BackstagePassItem.RESET_QUALITY_SELL_IN_THRESHOLD)) {
      this.resetQuality()
    }
  }
}

