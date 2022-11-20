import { Item } from "./Item";
import { ItemName } from '../value-objects/ItemName';
import { ItemSellIn } from "../value-objects/ItemSellIn";
import { ItemQuality } from "../value-objects/ItemQuality";

export class SulfurasItem  extends Item {
  constructor(name: ItemName, sellIn: ItemSellIn, quality: ItemQuality) {
    super(name, sellIn, quality)
  }

  update(): void {}
}

