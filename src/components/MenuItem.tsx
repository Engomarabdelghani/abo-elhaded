import type { MenuItem as MenuItemType } from "../types/menu";

type Props = {
  item: MenuItemType;
};

const weightLabels: Record<string, string> = {
  quarter: "ربع",
  third: "ثلث",
  half: "نصف",
  threeQuarter: "3/4",
  kilo: "كيلو",
};

const sizeLabels: Record<string, string> = {
  small: "صغير",
  large: "كبير",
  double: "دوبل",
};

const weightOrder = ["quarter", "third", "half", "threeQuarter", "kilo"];
const sizeOrder = ["small", "large", "double"];

function fmt(n: number) {
  return n.toLocaleString("ar-EG");
}

function smallestPrice(obj: Record<string, number | undefined>, order: string[]) {
  for (const key of order) {
    const v = obj[key];
    if (typeof v === "number") return v;
  }
  return undefined;
}

export default function MenuItem({ item }: Props) {
  const hasWeight = item.weightPrices && Object.values(item.weightPrices).some((v) => typeof v === "number");
  const hasSize = item.sizePrices && Object.values(item.sizePrices).some((v) => typeof v === "number");

  const fromPrice = hasWeight
    ? smallestPrice(item.weightPrices as Record<string, number>, weightOrder)
    : hasSize
    ? smallestPrice(item.sizePrices as Record<string, number>, sizeOrder)
    : undefined;

  return (
    <li className="py-2.5 border-b border-dashed border-cream/10 last:border-none">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-cream text-sm sm:text-[15px] font-semibold">
          {item.name}
          {item.isPlaceholder && (
            <span className="ms-1.5 text-[10px] font-normal text-gold/80 align-middle">(للتأكيد)</span>
          )}
          {item.isOffer && (
            <span className="ms-1.5 text-[10px] font-display font-bold text-cream bg-ember rounded-full px-2 py-0.5 align-middle">
              عرض
            </span>
          )}
        </span>

        {typeof item.price === "number" && !hasWeight && !hasSize && (
          <span className="font-display font-bold text-ember text-sm sm:text-base whitespace-nowrap shrink-0 flex items-baseline gap-1.5">
            {item.isOffer && typeof item.offerPrice === "number" ? (
              <>
                <span className="text-gold">{fmt(item.offerPrice)} ج</span>
                <span className="text-cream-dim/50 text-xs line-through">{fmt(item.price)} ج</span>
              </>
            ) : (
              `${fmt(item.price)} ج`
            )}
          </span>
        )}

        {fromPrice !== undefined && (
          <span className="font-display font-bold text-ember text-sm sm:text-base whitespace-nowrap shrink-0">
            من {fmt(fromPrice)} ج
          </span>
        )}
      </div>

      {item.description && (
        <p className="text-cream-dim/80 text-xs mt-0.5">{item.description}</p>
      )}

      {hasWeight && (
        <p className="text-cream-dim/60 text-[11px] mt-1 leading-relaxed">
          {weightOrder
            .filter((k) => typeof item.weightPrices![k as keyof typeof item.weightPrices] === "number")
            .map((k) => `${weightLabels[k]} ${fmt(item.weightPrices![k as keyof typeof item.weightPrices] as number)}`)
            .join(" · ")}
        </p>
      )}

      {hasSize && (
        <p className="text-cream-dim/60 text-[11px] mt-1 leading-relaxed">
          {sizeOrder
            .filter((k) => typeof item.sizePrices![k as keyof typeof item.sizePrices] === "number")
            .map((k) => `${sizeLabels[k]} ${fmt(item.sizePrices![k as keyof typeof item.sizePrices] as number)}`)
            .join(" · ")}
        </p>
      )}
    </li>
  );
}
