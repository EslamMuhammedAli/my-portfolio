export const OFFER = {
  kicker: "عرض لفترة محدودة",
  discountLabel: "خصم",
  discountValue: "50%",
  title: "التدريب الأونلاين",
  subtitle: "جسم متناسق · أقصى استفادة",
  whatsappNumber: "201281618954",
  whatsappDisplay: "+20 128 161 8954",
  whatsappMessage:
    "مرحبا، أريد الاشتراك في عرض التدريب الأونلاين (خصم 50٪)",
  plans: [
    {
      id: "quarter",
      name: "3 أشهر",
      price: "1,500",
      was: "3,000",
      featured: true,
    },
    {
      id: "month",
      name: "الشهر",
      price: "500",
      was: "1,000",
      featured: false,
    },
  ],
  services: [
    {
      id: "remote",
      title: "تدريب عن بُعد",
      detail: "برنامج تدريبي محكم وبشكل مبسط، أينما كنت.",
    },
    {
      id: "nutrition",
      title: "تغذية محكمة",
      detail: "خطط لبناء العضلات أو حرق الدهون العنيدة.",
    },
    {
      id: "whatsapp",
      title: "متابعة يومية",
      detail: "تواصل واتساب يومي على +20 128 161 8954.",
    },
    {
      id: "program",
      title: "برنامج مبسّط",
      detail: "خطة واضحة ومنضبطة بدون تعقيد زائد.",
    },
  ],
  posterServices: [
    "تدريب عن بُعد",
    "تغذية محكمة",
    "متابعة واتساب يومياً",
    "برنامج تدريبي مبسّط",
  ],
  cta: "احجز الآن",
  endsAt: "2026-10-09T20:59:00.000Z",
} as const;

export function whatsappHref() {
  const text = encodeURIComponent(OFFER.whatsappMessage);
  return `https://wa.me/${OFFER.whatsappNumber}?text=${text}`;
}
