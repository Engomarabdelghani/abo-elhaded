export type WeightPrices = {
  quarter?: number; // ربع
  third?: number; // ثلث (375 جرام)
  half?: number; // نصف
  threeQuarter?: number; // 3\4
  kilo?: number; // كيلو
};

export type SizePrices = {
  small?: number; // صغير
  large?: number; // كبير
  double?: number; // دوبل
};

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price?: number;
  prices?: Record<string, number>;
  weightPrices?: WeightPrices;
  sizePrices?: SizePrices;
  image?: string;
  available?: boolean;
  isPlaceholder?: boolean;
  isOffer?: boolean;
  offerPrice?: number;
};

export type MenuCategory = {
  id: string;
  name: string;
  description?: string;
  priceUnit?: string;
  items: MenuItem[];
};
