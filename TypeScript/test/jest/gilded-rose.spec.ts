import {  GildedRose } from '@/gilded-rose';
import { AgedBrieItem } from '../../app/items/AgedBrieItem';
import { BackstagePassItem } from '../../app/items/BackstagePassItem';
import { DefaultItem } from '../../app/items/DefaultItem';
import { ItemName } from '../../app/value-objects/ItemName';
import { SulfurasItem } from '../../app/items/SulfurasItem';
import { ItemSellIn } from '../../app/value-objects/ItemSellIn';
import { ItemQuality } from '../../app/value-objects/ItemQuality';

describe('Gilded Rose', () => {

  describe('Default items', () => {
    it('should decrease sellIn', () => {
      const gildedRose = new GildedRose([new DefaultItem(ItemName.create("+5 Dexterity Vest"), ItemSellIn.create(10), ItemQuality.create(20))]);
      gildedRose.updateQuality();

      const [result] = gildedRose.items;
      expect(result.sellIn.getValue()).toBe(9);
    });

    it('should decrease item quality x2', () => {
      const gildedRose = new GildedRose([new DefaultItem(ItemName.create("+5 Dexterity Vest"), ItemSellIn.create(10), ItemQuality.create(20))]);
      gildedRose.updateQuality();

      const [result] = gildedRose.items;
      expect(result.quality.getValue()).toBe(18);
    });

    it('should decrease item without exceeding min quality limit', () => {
      const gildedRose = new GildedRose([new DefaultItem(ItemName.create("+5 Dexterity Vest"), ItemSellIn.create(10), ItemQuality.create(1))]);
      gildedRose.updateQuality();

      const [result] = gildedRose.items;
      expect(result.quality.getValue()).toBe(0);
    });
   })

  describe('Aged brie items', () => {
    it('should decrease sellIn', () => {
      const gildedRose = new GildedRose([new AgedBrieItem(ItemName.create("Aged Brie"),  ItemSellIn.create(2),  ItemQuality.create(0))]);
      gildedRose.updateQuality();

      const [result] = gildedRose.items;
      expect(result.sellIn.getValue()).toBe(1);
    });

    it('should increase item quality x1', () => {
      const gildedRose = new GildedRose([new AgedBrieItem(ItemName.create("Aged Brie"),  ItemSellIn.create(2),  ItemQuality.create(0))]);
      gildedRose.updateQuality();

      const [result] = gildedRose.items;
      expect(result.quality.getValue()).toBe(1);
    });

    it('should increase item quality x2', () => {
      const gildedRose = new GildedRose([new AgedBrieItem(ItemName.create("Aged Brie"),  ItemSellIn.create(0),  ItemQuality.create(0))]);
      gildedRose.updateQuality();

      const [result] = gildedRose.items;
      expect(result.quality.getValue()).toBe(2);
    });
  })

  describe('Sulfuras items', () => {
    it('should have the same sellIn', () => {
      const gildedRose = new GildedRose([new SulfurasItem(ItemName.create("Sulfuras, Hand of Ragnaros"),  ItemSellIn.create(0),  ItemQuality.create(80))]);
      gildedRose.updateQuality();

      const [result] = gildedRose.items;
      expect(result.sellIn.getValue()).toBe(0);
    });

    it('should have the same quality', () => {
      const gildedRose = new GildedRose([new SulfurasItem(ItemName.create("Sulfuras, Hand of Ragnaros"),  ItemSellIn.create(0),  ItemQuality.create(80))]);
      gildedRose.updateQuality();

      const [result] = gildedRose.items;
      expect(result.quality.getValue()).toBe(80);
    });
  })

  describe("Backstage passes items", () => {
    it('should decrease sellIn', () => {
      const gildedRose = new GildedRose([new BackstagePassItem(ItemName.create("Backstage passes to a TAFKAL80ETC concert"),  ItemSellIn.create(15),  ItemQuality.create(20))]);
      gildedRose.updateQuality();

      const [result] = gildedRose.items;
      expect(result.sellIn.getValue()).toBe(14);
    });

    it('should increase item quality x1', () => {
      const gildedRose = new GildedRose([new BackstagePassItem(ItemName.create("Backstage passes to a TAFKAL80ETC concert"),  ItemSellIn.create(15),  ItemQuality.create(20))]);
      gildedRose.updateQuality();

      const [result] = gildedRose.items;
      expect(result.quality.getValue()).toBe(21);
    });

    it('should increase item quality x2', () => {
      const gildedRose = new GildedRose([new BackstagePassItem(ItemName.create("Backstage passes to a TAFKAL80ETC concert"),  ItemSellIn.create(10),  ItemQuality.create(49))]);
      gildedRose.updateQuality();

      const [result] = gildedRose.items;
      expect(result.quality.getValue()).toBe(50);
    });

    it('should increase item quality x3', () => {
      const gildedRose = new GildedRose([new BackstagePassItem(ItemName.create("Backstage passes to a TAFKAL80ETC concert"),  ItemSellIn.create(5),  ItemQuality.create(49))]);
      gildedRose.updateQuality();

      const [result] = gildedRose.items;
      expect(result.sellIn.getValue()).toBe(4);
    });

    it('should reset item quality', () => {
      const gildedRose = new GildedRose([new BackstagePassItem(ItemName.create("Backstage passes to a TAFKAL80ETC concert"),  ItemSellIn.create(0),  ItemQuality.create(49))]);
      gildedRose.updateQuality();

      const [result] = gildedRose.items;
      expect(result.quality.getValue()).toBe(0);
    });

    it('should increase quality without exceeding max quality limit', () => {
      const gildedRose = new GildedRose([new BackstagePassItem(ItemName.create("Backstage passes to a TAFKAL80ETC concert"),  ItemSellIn.create(10),  ItemQuality.create(49))]);
      gildedRose.updateQuality();

      const [result] = gildedRose.items;
      expect(result.quality.getValue()).toBe(50);
    });
  })
});
