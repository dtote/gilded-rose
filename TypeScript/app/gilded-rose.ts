import { Item } from "./items/Item";

export class GildedRose {

  constructor(public items = [] as Array<Item>) {}

  updateQuality() {
    this.items.forEach((item) => item.update())
  }
}
