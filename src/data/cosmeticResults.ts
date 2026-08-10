/**
 * DEMO CONTENT ONLY.
 * Illustrative cosmetic dentistry cases for a fictional practice.
 * These are not photographs of real patients or real treatment outcomes.
 */
import whiteningBefore from "@/assets/ba-whitening-before.jpg";
import whiteningAfter from "@/assets/ba-whitening-after.jpg";
import veneersBefore from "@/assets/ba-veneers-before.jpg";
import veneersAfter from "@/assets/ba-veneers-after.jpg";
import makeoverBefore from "@/assets/ba-makeover-before.jpg";
import makeoverAfter from "@/assets/ba-makeover-after.jpg";
import bondingBefore from "@/assets/ba-bonding-before.jpg";
import bondingAfter from "@/assets/ba-bonding-after.jpg";

export type CosmeticResult = {
  id: string;
  title: string;
  description: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  caption: string;
};

export const cosmeticResults: CosmeticResult[] = [
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    description:
      "Professional whitening designed to brighten the appearance of naturally stained or discolored teeth.",
    beforeSrc: whiteningBefore,
    afterSrc: whiteningAfter,
    beforeAlt:
      "Illustrative before image for teeth whitening: close-up of naturally stained, yellowed teeth.",
    afterAlt:
      "Illustrative after image for teeth whitening: the same smile appearing noticeably brighter yet natural.",
    caption: "In-practice whitening, single session",
  },
  {
    id: "porcelain-veneers",
    title: "Porcelain Veneers",
    description:
      "Custom veneers can improve the appearance of tooth shape, symmetry, color, and overall smile aesthetics.",
    beforeSrc: veneersBefore,
    afterSrc: veneersAfter,
    beforeAlt:
      "Illustrative before image for porcelain veneers: uneven tooth shapes, a small gap and mild discoloration.",
    afterAlt:
      "Illustrative after image for porcelain veneers: symmetrical, evenly shaped and natural-looking front teeth.",
    caption: "Six upper veneers over three visits",
  },
  {
    id: "smile-makeover",
    title: "Smile Makeover",
    description:
      "A personalized combination of cosmetic treatments designed around the patient's smile goals, proportions, and overall appearance.",
    beforeSrc: makeoverBefore,
    afterSrc: makeoverAfter,
    beforeAlt:
      "Illustrative before image for a smile makeover: irregular alignment, uneven tooth lengths, spacing and discoloration.",
    afterAlt:
      "Illustrative after image for a smile makeover: a balanced, aligned and naturally brighter smile.",
    caption: "Whitening, bonding and reshaping combined",
  },
  {
    id: "composite-bonding",
    title: "Composite Bonding",
    description:
      "A minimally invasive cosmetic treatment that can improve the appearance of minor chips, gaps, shape irregularities, and discoloration.",
    beforeSrc: bondingBefore,
    afterSrc: bondingAfter,
    beforeAlt:
      "Illustrative before image for composite bonding: a visible chip on the edge of an upper front tooth.",
    afterAlt:
      "Illustrative after image for composite bonding: the chipped edge repaired with a seamless, shade-matched finish.",
    caption: "Edge repair on a front tooth, one visit",
  },
];