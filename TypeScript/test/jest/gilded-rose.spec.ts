import {  GildedRose } from '@/gilded-rose';
import { Item } from '../../app/item';

describe('Gilded Rose', () => {

  describe('default item +5 Dexterity Vest', () => {
    it('should be named +5 Dexterity Vest', () => {
      const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 10, 20)]);
      const result = gildedRose.updateQuality();
      expect(result[0].name).toBe('+5 Dexterity Vest');
    });

    it('should have sellin 9', () => {
      const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 10, 20)]);
      const result = gildedRose.updateQuality();
      expect(result[0].sellIn).toBe(9);
    });

    it('should have quality 19', () => {
      const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 10, 20)]);
      const result = gildedRose.updateQuality();
      expect(result[0].quality).toBe(19);
    });
   })

  describe('aged brie', () => {
    it('should have sellin 1', () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 2, 0)]);
      const result = gildedRose.updateQuality();
      expect(result[0].sellIn).toBe(1);
    });

    it('should have quality 1', () => {
      const gildedRose = new GildedRose([new Item("Aged Brie", 2, 0)]);
      const result = gildedRose.updateQuality();
      expect(result[0].quality).toBe(1);
    });
  })

  describe('default item Elixir of the Mongoose', () => {
    it('should have sellin 4', () => {
      const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", 5, 7)]);
      const result = gildedRose.updateQuality();
      expect(result[0].sellIn).toBe(4);
    });

    it('should have quality 6', () => {
      const gildedRose = new GildedRose([new Item("Elixir of the Mongoose", 5, 7)]);
      const result = gildedRose.updateQuality();
      expect(result[0].quality).toBe(6);
    });
    })


  describe('Sulfuras, Hand of Ragnaros (0, 80)', () => {
    it('should have sellin 0', () => {
      const gildedRose = new GildedRose([ new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
      const result = gildedRose.updateQuality();
      expect(result[0].sellIn).toBe(0);
    });

    it('should have quality 80', () => {
      const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
      const result = gildedRose.updateQuality();
      expect(result[0].quality).toBe(80);
    });
  })

  describe('Sulfuras, Hand of Ragnaros (-1, 80)', () => {
    it('should have sellin -1', () => {
      const gildedRose = new GildedRose([ new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
      const result = gildedRose.updateQuality();
      expect(result[0].sellIn).toBe(-1);
    });

    it('should have quality 80', () => {
      const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
      const result = gildedRose.updateQuality();
      expect(result[0].quality).toBe(80);
    });
  })



  describe('"Backstage passes to a TAFKAL80ETC concert", 15, 20', () => {
    it('should have sellin 14', () => {
      const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
      const result = gildedRose.updateQuality();
      expect(result[0].sellIn).toBe(14);
    });

    it('should have quality 21', () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
      const result = gildedRose.updateQuality();
      expect(result[0].quality).toBe(21);
    });
  })

  describe('"Backstage passes to a TAFKAL80ETC concert", 10, 49', () => {
    it('should have sellin 9', () => {
      const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
      const result = gildedRose.updateQuality();
      expect(result[0].sellIn).toBe(9);
    });

    it('should have quality 50', () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
      const result = gildedRose.updateQuality();
      expect(result[0].quality).toBe(50);
    });
  })

  describe('"Backstage passes to a TAFKAL80ETC concert", 5, 49', () => {
    it('should have sellin 4', () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)]);
      const result = gildedRose.updateQuality();
      expect(result[0].sellIn).toBe(4);
    });

    it('should have quality 50', () => {
      const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)]);
      const result = gildedRose.updateQuality();
      expect(result[0].quality).toBe(50);
    });
  })

  describe('Default item Conjured Mana Cake', () => {
    it('should have sellin 2', () => {
      const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 3, 6)]);
      const result = gildedRose.updateQuality();
      expect(result[0].sellIn).toBe(2);
    });

    it('should have quality 5', () => {
      const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 3, 6)]);
      const result = gildedRose.updateQuality();
      expect(result[0].quality).toBe(5);
    });
  })
});
