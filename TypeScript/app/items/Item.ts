import { ItemName } from '../value-objects/ItemName';
import { ItemSellIn } from "../value-objects/ItemSellIn";
import { ItemQuality } from "../value-objects/ItemQuality";

export abstract class Item {
  constructor(public name: ItemName, public sellIn: ItemSellIn, public quality: ItemQuality) {}

  abstract update(): void


  getSellIn() : ItemSellIn {
    return this.sellIn
  }

  getQuality(): ItemQuality {
    return this.quality
  }

  getName(): ItemName {
    return this.name
  }

  increaseQuality(): void {
    this.quality = this.quality.increase()
  }

  decreaseQuality(): void {
    this.quality = this.quality.decrease()
  }

  resetQuality() : void {
    this.quality = this.quality.reset();
  }

  decreaseSellin(): void {
    this.sellIn = this.sellIn.decrease()
  }

  hasToBeSoldInLessThan(days: number): boolean {
    return this.sellIn.isLessThan(days)
  }
}
