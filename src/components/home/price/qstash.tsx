"use client";

import {
  PriceBadge,
  PriceBox,
  PriceButton,
  PriceDesc,
  PriceHr,
  PriceTitle,
  PriceValue,
} from "@/components/home/price/comp";
import IconQStash from "@/components/icon-qstash";
import { useSegment } from "@/hooks/use-segment";

export default function PriceQStash() {
  const segment = useSegment();
  return (
    <PriceBox>
      <header>
        <IconQStash className="mb-4 inline-flex" />
        <PriceTitle>QStash</PriceTitle>
      </header>

      <PriceHr />

      <div>
        <PriceBadge>Free</PriceBadge>
        <PriceValue className="mt-3">500 messages</PriceValue>
        <PriceDesc>per day</PriceDesc>
      </div>

      <PriceHr />

      <div>
        <PriceBadge type="payg">Pay as you go</PriceBadge>
        <PriceValue className="mt-3">$1</PriceValue>
        <PriceDesc>per 100K messages</PriceDesc>
      </div>

      <PriceHr />

      <div>
        <PriceBadge type="pro">Pro</PriceBadge>
        <PriceDesc className="mt-3">Starts from</PriceDesc>
        <PriceValue>$180</PriceValue>
        <PriceDesc>Up to 100M</PriceDesc>
      </div>

      <PriceHr />

      <PriceButton
        href="/pricing/qstash"
        onClick={() => {
          segment.track("button.pricing.redis");
        }}
      >
        More information
      </PriceButton>
    </PriceBox>
  );
}
