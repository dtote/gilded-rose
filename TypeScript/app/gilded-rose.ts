import { Item } from "./item";

const ITEM_NAME_AGED_BRIE = 'Aged Brie';
const ITEM_NAME_BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
const ITEM_NAME_SULFURAS = 'Sulfuras, Hand of Ragnaros';
const ITEM_MIN_QUALITY = 0;
const ITEM_MAX_QUALITY = 50;

function decreaseSellIn(item: Item) {
  item.sellIn -= 1
}

function updateAgedBrieQuality(item: Item) {
  if (item.quality < ITEM_MAX_QUALITY) {
    item.quality += 1
  }
}
function updateBackstagePassesQuality(item: Item) {
  if (item.quality < ITEM_MAX_QUALITY) {
    item.quality = item.quality + 1
  }
}
function updateDefaultItemQuality(item: Item) {
  if (item.quality > ITEM_MIN_QUALITY) {
    item.quality = item.quality - 1
  }
}

export class GildedRose {

  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      switch (item.name) {
        case ITEM_NAME_AGED_BRIE:
          decreaseSellIn(item)
          updateAgedBrieQuality(item)
          break;

        case ITEM_NAME_BACKSTAGE_PASSES:
          decreaseSellIn(item)
          updateBackstagePassesQuality(item)
          break;

        case ITEM_NAME_SULFURAS:
          break;

        default:
          decreaseSellIn(item)
          updateDefaultItemQuality(item)
          break;
      }
    }

    return this.items;
  }
}
