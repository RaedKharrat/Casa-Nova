import { 
  Coffee, 
  IceCream, 
  CupSoda, 
  Wine, 
  Leaf, 
  Flame, 
  GlassWater, 
  ChefHat, 
  Cookie,
  Beer,
  Zap
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
  themeColor: string; // Required for specific backgrounds
}

export interface MenuSection {
  id: string;
  title: string;
  categories: MenuCategory[];
}

const generateId = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const images = {
  iced: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=600&auto=format&fit=crop',
  frappe: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop',
  milkshake: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop',
  juice: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=600&auto=format&fit=crop',
  hot: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=600&auto=format&fit=crop',
  dessert: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=600&auto=format&fit=crop',
  cocktail: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop',
  smoothie: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?q=80&w=600&auto=format&fit=crop',
  mojito: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop',
};

const createProducts = (list: string[], categoryLabel: string, basePrice: number = 8.5): Product[] => {
  return list.map((item, index) => {
    const name = item.trim();
    const formattedName = name.replace(/\b\w/g, c => c.toUpperCase());
    const price = (basePrice + (index % 3)).toFixed(2) + ' TND';
    
    let image = images.hot;
    if(categoryLabel.toLowerCase().includes('iced')) image = images.iced;
    if(categoryLabel.toLowerCase().includes('frappe')) image = images.frappe;
    if(categoryLabel.toLowerCase().includes('milkshake')) image = images.milkshake;
    if(categoryLabel.toLowerCase().includes('juice')) image = images.juice;
    if(categoryLabel.toLowerCase().includes('dessert')) image = images.dessert;
    if(categoryLabel.toLowerCase().includes('cocktail')) image = images.cocktail;
    if(categoryLabel.toLowerCase().includes('smoothie')) image = images.smoothie;
    if(categoryLabel.toLowerCase().includes('mojito')) image = images.mojito;

    return {
      id: generateId(name),
      name: formattedName,
      subtitle: `Authentic house specialty`,
      price,
      image,
      popular: index === 1
    };
  });
};

export const menuData: MenuSection[] = [
  {
    id: 'cold-drinks',
    title: 'Cold Drinks',
    categories: [
      {
        id: 'iced-coffee',
        name: 'Iced Coffee',
        icon: Coffee,
        themeColor: '#1a1816', // Dark Brown
        items: createProducts(['iced americano', 'Dolce', 'iced latte', 'icy nova'], 'iced')
      },
      {
        id: 'affogato',
        name: 'Affogato',
        icon: IceCream,
        themeColor: '#2b221a', // Warm Wood
        items: createProducts(['vanillato', 'chocolato', 'pistagato'], 'iced', 12.5)
      },
      {
        id: 'frappuccino',
        name: 'Frappuccino',
        icon: CupSoda,
        themeColor: '#1d1a2b', // Deep Purple Coffee
        items: createProducts(['Classico', 'caramel', 'vanille', 'noisette', 'speculose', 'oreo', 'nutella', 'pistache'], 'frappe', 9.5)
      },
      {
        id: 'milkshake',
        name: 'Milkshake',
        icon: CupSoda,
        themeColor: '#2b1a20', // Berry/Coffee mix
        items: createProducts(['vanille', 'caramel', 'noisette', 'nutella', 'banane', 'fraise', 'blueberry', 'oreo', 'speculose', 'pistache', 'nutella oreo', 'nutella speculose', 'banatella', 'ice burg', 'casa shake'], 'milkshake', 10.0)
      },
      {
        id: 'cocktail',
        name: 'Cocktail',
        icon: Wine,
        themeColor: '#1a2b1d', // Dark Forest Green
        items: createProducts(['Pinacolada', 'Tropical', 'Sunrise', 'peachy', 'flower'], 'cocktail', 11.0)
      },
      {
        id: 'iced-tea',
        name: 'Iced Tea',
        icon: Leaf,
        themeColor: '#1a262b', // Midnight Teal
        items: createProducts(['sweety tea', 'Victory', 'hawai', 'agrume', 'roibos'], 'iced')
      },
      {
        id: 'fresh-juice',
        name: 'Fresh Juice',
        icon: GlassWater,
        themeColor: '#2b281a', // Bronze Juice Hue
        items: createProducts(['citronade', 'fraise', 'banane', 'kiwi', 'banane+datte', 'orange'], 'juice', 7.5)
      },
      {
        id: 'smoothie',
        name: 'Smoothie',
        icon: ChefHat,
        themeColor: '#202b1a', // Organic Green
        items: createProducts(['yellow', 'lover', 'tropicland', 'exotic', 'green power'], 'smoothie', 9.0)
      },
      {
        id: 'mojito',
        name: 'Mojito',
        icon: Beer,
        themeColor: '#1a1f2b', // Deep Sea Blue
        items: createProducts(['Classico', 'blue light', 'red light', 'black hole', 'apple', 'peche', 'ananas', 'aurora', 'ice cream', 'energetique'], 'mojito', 10.5)
      },
      {
        id: 'detox',
        name: 'Detox',
        icon: Leaf,
        themeColor: '#0a0d0a', // True Black Detox
        items: createProducts(['green detox', 'power detox', 'citronade a la menthe'], 'juice', 8.0)
      }
    ]
  },
  {
    id: 'hot-drinks',
    title: 'Hot & Others',
    categories: [
      {
        id: 'coffee',
        name: 'Coffee',
        icon: Coffee,
        themeColor: '#1c1917', // Espresso Black
        items: createProducts(['espresso', 'americano', 'cappuccino', 'latte', 'chocolat au lait', 'nescafe', 'caffe turc'], 'coffee', 4.5)
      },
      {
        id: 'supplements',
        name: 'Supplements',
        icon: Zap,
        themeColor: '#262626', // Charcoal
        items: createProducts(['vanille', 'noisette', 'caramel', 'nestle'], 'coffee', 1.5)
      },
      {
        id: 'tea',
        name: 'Tea',
        icon: Leaf,
        themeColor: '#1c211c', // Tea Garden
        items: createProducts(['the vert', 'menthe/grenadine', 'aux amandes', 'pignons', 'infusion', 'kyufi'], 'coffee', 3.5)
      },
      {
        id: 'hot-chocolate',
        name: 'Hot Chocolate',
        icon: Flame,
        themeColor: '#221a17', // Cocoa Red-Brown
        items: createProducts(['classique', 'pistache', 'caramel', 'specuHot'], 'coffee', 6.5)
      },
      {
        id: 'sweetness',
        name: 'Sweetness',
        icon: Cookie,
        themeColor: '#251c1c', // Ruby Sweet
        items: createProducts(['pistache', 'chocolat blanc', 'framboise', 'noisette'], 'coffee', 7.5)
      },
      {
        id: 'water-soda',
        name: 'Water & Soda',
        icon: GlassWater,
        themeColor: '#171a22', // Industrial Blue
        items: createProducts(['eau 1L', 'eau 0.5L', 'soda', 'boisson energetique'], 'juice', 3.0)
      },
      {
        id: 'desserts',
        name: 'Desserts',
        icon: Cookie,
        themeColor: '#2b1a1a', // Chocolate Dessert
        items: createProducts(['cheesecake', 'saint sebastien', 'tiramisu', 'fondant', 'gateau american', 'pain au chocolat', 'croissant nature', 'cake'], 'dessert', 12.0)
      }
    ]
  }
];
