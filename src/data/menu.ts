import {
  Coffee,
  IceCream,
  CupSoda,
  Wine,
  Leaf,
  Flame,
  GlassWater,
  Cookie,
  Beer,
  Waves,
  Sparkles
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  image: string;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon?: LucideIcon;
  items: Product[];
  themeColor: string;
}

export interface MenuSection {
  id: string;
  title: string;
  categories: MenuCategory[];
}

export const supplementData = {
  name: 'Supplements',
  price: '1.500dt',
  items: ['Vanille', 'Noisette', 'Caramel', 'Nestle'],
  subtitle: 'Customize your hot drink with our premium add-ons'
};

export const menuData: MenuSection[] = [
  {
    id: 'hot-drinks',
    title: 'Hot Drinks',
    categories: [
      {
        id: 'coffee',
        name: 'Coffee',
        icon: Coffee,
        themeColor: '#4e342e',
        items: [
          { id: 'espresso', name: 'Esspresso', subtitle: 'Strong and bold shot', price: '2.800dt', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=600&auto=format&fit=crop' },
          { id: 'americano', name: 'Americano', subtitle: 'Diluted espresso for a smooth taste', price: '3.00dt', image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=600&auto=format&fit=crop' },
          { id: 'cappuccin', name: 'Cappuccin', subtitle: 'Espresso with steamed milk foam', price: '3.300dt', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600&auto=format&fit=crop' },
          { id: 'latte', name: 'Latte', subtitle: 'Creamy espresso with steamed milk', price: '3.600dt', image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=600&auto=format&fit=crop' },
          { id: 'chocolat-au-lait', name: 'Chocolat au Lait', subtitle: 'Rich milk chocolate', price: '3.500dt', image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=600&auto=format&fit=crop' },
          { id: 'nescafe', name: 'Nescafe', subtitle: 'Classic instant coffee blend', price: '4.00dt', image: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=600&auto=format&fit=crop' },
          { id: 'caffe-turc', name: 'Caffe Turc', subtitle: 'Traditional fine ground coffee', price: '4.500dt', image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=600&auto=format&fit=crop' },
          { id: 'cappuccino-large', name: 'Cappuccino', subtitle: 'Large and frothy', price: '5.500dt', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=600&auto=format&fit=crop' },
        ]
      },
      {
        id: 'tea',
        name: 'Tea',
        icon: Leaf,
        themeColor: '#2e7d32',
        items: [
          { id: 'the-vert', name: 'The Vert', subtitle: 'Refreshing green tea', price: '2.500dt', image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=600&auto=format&fit=crop' },
          { id: 'menthe-grenadine', name: 'Menthe / Grenadine', subtitle: 'Minty with a touch of sweetness', price: '3.500dt', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600&auto=format&fit=crop' },
          { id: 'the-infusion', name: 'The Infusion', subtitle: 'Aromatic herbal blend', price: '3.500dt', image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop' },
          { id: 'the-kyufi', name: 'The Kyufi', subtitle: 'Traditional intense tea', price: '4.00dt', image: 'https://images.unsplash.com/photo-1594631252845-29fc4586c557?q=80&w=600&auto=format&fit=crop' },
          { id: 'the-aux-amande', name: 'The aux Amande', subtitle: 'Tea with toasted almonds', price: '4.500dt', image: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=600&auto=format&fit=crop', popular: true },
          { id: 'the-aux-pignons', name: 'The aux Pignons', subtitle: 'Premium tea with pine nuts', price: '8.00dt', image: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=600&auto=format&fit=crop' },
        ]
      },
      {
        id: 'hot-chocolat',
        name: 'Hot Chocolat',
        icon: Flame,
        themeColor: '#3e2723',
        items: [
          { id: 'hc-classique', name: 'Classique', subtitle: 'Pure velvety cocoa', price: '5.00dt', image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=600&auto=format&fit=crop' },
          { id: 'hc-caramel', name: 'Caramel', subtitle: 'Sweet caramel infused cocoa', price: '6.500dt', image: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=600&auto=format&fit=crop' },
          { id: 'hc-pistachio', name: 'Pistachio', subtitle: 'Nutty pistachio chocolate', price: '8.00dt', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&auto=format&fit=crop' },
          { id: 'specumagic', name: 'Specumagic', subtitle: 'Speculoos spiced magic', price: '7.00dt', image: 'https://images.unsplash.com/photo-1607260550778-aa9eff9be6e4?q=80&w=600&auto=format&fit=crop' },
        ]
      },
      {
        id: 'water-soda',
        name: 'Water / Soda',
        icon: GlassWater,
        themeColor: '#0277bd',
        items: [
          { id: 'eau-1l', name: 'Eau 1L', subtitle: 'Pure mineral water', price: '2.500dt', image: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?q=80&w=600&auto=format&fit=crop' },
          { id: 'eau-05l', name: 'Eau 0.5L', subtitle: 'Pure mineral water', price: '1.500dt', image: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?q=80&w=600&auto=format&fit=crop' },
          { id: 'soda', name: 'Soda', subtitle: 'Refreshing soft drink', price: '3.500dt', image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?q=80&w=600&auto=format&fit=crop' },
          { id: 'boisson-energetique', name: 'Boisson Energetique', subtitle: 'Energy boost', price: '8.00dt', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=600&auto=format&fit=crop' },
        ]
      }
    ]
  },
  {
    id: 'refreshments',
    title: 'Refreshments',
    categories: [
      {
        id: 'iced-coffee',
        name: 'Iced Coffee',
        icon: Coffee,
        themeColor: '#263238',
        items: [
          { id: 'iced-americano', name: 'Iced Americano', subtitle: '2 shots espresso, syrup, ice', price: '5.00dt', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=600&auto=format&fit=crop' },
          { id: 'dolce', name: 'Dolce', subtitle: '2 shots espresso, condensed milk, ice', price: '5.00dt', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop' },
          { id: 'iced-latte', name: 'Iced Latte', subtitle: 'Milk, espresso, casa cream, syrup, ice', price: '6.00dt', image: 'https://images.unsplash.com/photo-1553909489-ee692da22c0e?q=80&w=600&auto=format&fit=crop' },
          { id: 'icy-nova', name: 'Icy Nova', subtitle: 'Milk, nescafe, casa cream, sauce, ice', price: '7.00dt', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop', popular: true },
        ]
      },
      {
        id: 'affogato',
        name: 'Affogato',
        icon: IceCream,
        themeColor: '#5d4037',
        items: [
          { id: 'vanillato', name: 'Vanillato', subtitle: '2 shots espresso, vanilla ice cream', price: '5.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'chocolato', name: 'Chocolato', subtitle: '2 shots espresso, chocolate ice cream', price: '6.00dt', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&auto=format&fit=crop' },
          { id: 'pistagato', name: 'Pistagato', subtitle: '2 shots espresso, pistachio ice cream', price: '8.00dt', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=600&auto=format&fit=crop' },
        ]
      },
      {
        id: 'frappoccino',
        name: 'Frappoccino',
        icon: CupSoda,
        themeColor: '#795548',
        items: [
          { id: 'f-classico', name: 'Classico', subtitle: 'Coffee base, milk, casa cream, whipped cream', price: '6.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'f-vanille', name: 'Vanille', subtitle: 'Vanilla syrup, milk, whipped cream', price: '7.500dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'f-caramel', name: 'Caramel', subtitle: 'Caramel sauce, milk, whipped cream', price: '8.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop', popular: true },
          { id: 'f-noisette', name: 'Noisette', subtitle: 'Hazelnut sauce, milk, whipped cream', price: '8.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'f-nutella', name: 'Nutella', subtitle: 'Nutella, milk, whipped cream', price: '8.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'f-oreo', name: 'Oreo', subtitle: 'Oreo bits, milk, whipped cream', price: '9.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'f-speculoos', name: 'Speculoos', subtitle: 'Speculoos sauce, milk, whipped cream', price: '9.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'f-pistachio', name: 'Pistachio', subtitle: 'Pistachio sauce, milk, whipped cream', price: '11.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
        ]
      },
      {
        id: 'fresh-juices',
        name: 'Fresh Juices',
        icon: GlassWater,
        themeColor: '#ff9800',
        items: [
          { id: 'citronade', name: 'Citronade', subtitle: 'Zesty fresh lemon', price: '4.500dt', image: 'https://images.unsplash.com/photo-1523472721958-978152f4d69b?q=80&w=600&auto=format&fit=crop' },
          { id: 'orange', name: 'Orange', subtitle: 'Freshly squeezed oranges', price: '4.500dt', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=600&auto=format&fit=crop' },
          { id: 'fraise', name: 'Fraise', subtitle: 'Sweet seasonal strawberries', price: '5.500dt', image: 'https://images.unsplash.com/photo-1517093157656-b99917bc5d18?q=80&w=600&auto=format&fit=crop' },
          { id: 'banane', name: 'Banane', subtitle: 'Creamy fresh banana blend', price: '8.00dt', image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=600&auto=format&fit=crop' },
          { id: 'kiwi', name: 'Kiwi', subtitle: 'Targeted fresh kiwi blend', price: '9.00dt', image: 'https://images.unsplash.com/photo-1585250918409-1f4a05511b71?q=80&w=600&auto=format&fit=crop' },
          { id: 'banane-datte', name: 'Banane Datte', subtitle: 'Banana and sweet dates', price: '9.00dt', image: 'https://images.unsplash.com/photo-1550583724-b26cc28df5f1?q=80&w=600&auto=format&fit=crop' },
        ]
      },
      {
        id: 'mojito',
        name: 'Mojito',
        icon: Beer,
        themeColor: '#1b5e20',
        items: [
          { id: 'el-classico', name: 'El Classico', subtitle: 'Mint, lemon, mojito syrup', price: '5.500dt', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop' },
          { id: 'red-light', name: 'Red Light', subtitle: 'Red fruits, mint, lemon, syrup', price: '7.00dt', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop' },
          { id: 'blue-light', name: 'Blue Light', subtitle: 'Blue curacao, mint, lemon, syrup', price: '7.00dt', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop' },
          { id: 'aurora', name: 'Aurora', subtitle: 'Red fruit, blue curacao, mint, lemon', price: '8.500dt', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop' },
          { id: 'black-hole', name: 'Black Hole', subtitle: 'Mint, lemon, coca cola, syrup', price: '8.00dt', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop' },
          { id: 'm-apple', name: 'Apple', subtitle: 'Mint, lemon, apple, apple soda', price: '9.00dt', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop' },
          { id: 'm-peach', name: 'Peach', subtitle: 'Mint, lemon, peach, peach soda', price: '9.00dt', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop' },
          { id: 'm-pineapple', name: 'Pineapple', subtitle: 'Mint, lemon, pineapple, pineapple soda', price: '10.00dt', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop' },
          { id: 'm-frost', name: 'Frost', subtitle: '2 scoops ice cream, mint, lemon', price: '12.00dt', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop' },
          { id: 'm-zenith', name: 'Zenith', subtitle: 'Redbull, mint, lemon, syrup', price: '12.00dt', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop' },
        ]
      },
      {
        id: 'iced-tea',
        name: 'Iced Tea',
        icon: Leaf,
        themeColor: '#00796b',
        items: [
          { id: 'ruby', name: 'Ruby', subtitle: 'Raspberry, blueberry, refreshing ice', price: '5.00dt', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600&auto=format&fit=crop' },
          { id: 'arizona', name: 'Arizona', subtitle: 'Grapefruit, mint, refreshing ice', price: '6.00dt', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600&auto=format&fit=crop' },
          { id: 'glow', name: 'Glow', subtitle: 'Peach, lemon, mint, refreshing ice', price: '6.00dt', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600&auto=format&fit=crop' },
          { id: 'dawn', name: 'Dawn', subtitle: 'Orange, lemon, grenadine, ice', price: '6.00dt', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600&auto=format&fit=crop' },
          { id: 'luna', name: 'Luna', subtitle: 'Blue curacao, lemon, mint, sparkling', price: '7.00dt', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600&auto=format&fit=crop' },
        ]
      },
      {
        id: 'milkshakes',
        name: 'Milkshakes',
        icon: CupSoda,
        themeColor: '#ad1457',
        items: [
          { id: 'ms-vanilla', name: 'Vanilla', subtitle: 'Vanilla ice cream, casa cream', price: '7.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'ms-caramel', name: 'Caramel', subtitle: 'Vanilla ice cream, caramel sauce', price: '7.500dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'ms-hazelnut', name: 'Hazelnut', subtitle: 'Vanilla ice cream, hazelnut sauce', price: '8.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'ms-nutella', name: 'Nutella', subtitle: 'Vanilla ice cream, real nutella', price: '8.500dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop', popular: true },
          { id: 'ms-banana', name: 'Banana', subtitle: 'Vanilla ice cream, fresh banana', price: '10.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'ms-strawberry', name: 'Strawberry', subtitle: 'Vanilla ice cream, fresh strawberry', price: '9.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'ms-blueberry', name: 'Blueberry', subtitle: 'Vanilla ice cream, fresh blueberry', price: '9.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'ms-oreo', name: 'Oreo', subtitle: 'Vanilla ice cream, oreo sauce', price: '8.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'ms-speculoos', name: 'Speculoos', subtitle: 'Vanilla ice cream, speculoos sauce', price: '8.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'ms-pistachio', name: 'Pistachio', subtitle: 'Vanilla ice cream, pistachio sauce', price: '10.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'ms-ember', name: 'Ember', subtitle: 'Nutella and speculoos blend', price: '11.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'ms-ash', name: 'Ash', subtitle: 'Nutella and oreo blend', price: '11.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'ms-bella', name: 'Bella', subtitle: 'Nutella and fresh banana', price: '12.500dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'ms-zuka', name: 'Zuka', subtitle: 'Citronade, banana, berries mix', price: '13.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop' },
          { id: 'ms-casa-shake', name: 'Casa Shake', subtitle: 'Choice of ice cream, donut, casa cream', price: '14.00dt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop', popular: true },
        ]
      },
      {
        id: 'cocktail',
        name: 'Cocktail',
        icon: Wine,
        themeColor: '#4527a0',
        items: [
          { id: 'pinacolada', name: 'Pinacolada', subtitle: 'Pineapple and coconut blend', price: '8.00dt', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop' },
          { id: 'coral', name: 'Coral', subtitle: 'Strawberry and coconut blend', price: '8.00dt', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop' },
          { id: 'sol', name: 'Sol', subtitle: 'Pineapple and orange blend', price: '8.00dt', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop' },
          { id: 'mist', name: 'Mist', subtitle: 'Pineapple, mint, lemon fresh', price: '9.00dt', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop' },
          { id: 'bluch', name: 'Bluch', subtitle: 'Peach and banana blend', price: '10.00dt', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop' },
        ]
      },
      {
        id: 'smoothie',
        name: 'Smoothie',
        icon: Sparkles,
        themeColor: '#2e7d32',
        items: [
          { id: 'neon', name: 'Neon', subtitle: 'Pineapple, melon, blue curacao', price: '10.00dt', image: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?q=80&w=600&auto=format&fit=crop' },
          { id: 'bloom', name: 'Bloom', subtitle: 'Strawberry, raspberry, honey', price: '11.00dt', image: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?q=80&w=600&auto=format&fit=crop' },
          { id: 'jungle', name: 'Jungle', subtitle: 'Pineapple, mango, melon, passion fruit', price: '11.00dt', image: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?q=80&w=600&auto=format&fit=crop', popular: true },
          { id: 'solar', name: 'Solar', subtitle: 'Orange, pineapple, mango, banana', price: '13.00dt', image: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?q=80&w=600&auto=format&fit=crop' },
          { id: 'revive', name: 'Revive', subtitle: 'Healthy green boost', price: '13.00dt', image: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?q=80&w=600&auto=format&fit=crop' },
        ]
      },
      {
        id: 'detox',
        name: 'Detox',
        icon: Waves,
        themeColor: '#558b2f',
        items: [
          { id: 'detox-citronade', name: 'Citronade a la Menthe', subtitle: 'Fresh minty lemonade', price: '5.500dt', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=600&auto=format&fit=crop' },
          { id: 'green-detox', name: 'Green Detox', subtitle: 'Lemon, apple, cucumber, mint', price: '8.00dt', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=600&auto=format&fit=crop' },
          { id: 'power-detox', name: 'Power Detox', subtitle: 'Lemon, pineapple, cucumber, mint', price: '9.00dt', image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=600&auto=format&fit=crop' },
        ]
      },
      {
        id: 'dessert',
        name: 'Dessert',
        icon: Cookie,
        themeColor: '#6d4c41',
        items: [
          { id: 'croissant', name: 'Croissant Nature', subtitle: 'Buttery classic french pastry', price: '2.00dt', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop' },
          { id: 'pain-chocolat', name: 'Pain au Chocolat', subtitle: 'Satisfying chocolate pastry', price: '2.500dt', image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=600&auto=format&fit=crop' },
          { id: 'cake', name: 'Cake', subtitle: 'Homemade special cake', price: '2.500dt', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop' },
          { id: 'cheesecake', name: 'Cheesecake', subtitle: 'Creamy with your choice of sauce', price: '8.00dt', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600&auto=format&fit=crop', popular: true },
          { id: 'tiramissu', name: 'Tiramissu', subtitle: 'Italian classic coffee dessert', price: '9.00dt', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600&auto=format&fit=crop' },
          { id: 'fondant', name: 'Fondant', subtitle: 'Melting chocolate heart', price: '7.00dt', image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=600&auto=format&fit=crop' },
          { id: 'gateau-americain', name: 'Gateau Americain', subtitle: 'Rich American style cake', price: '10.00dt', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop' },
        ]
      }
    ]
  }
];

