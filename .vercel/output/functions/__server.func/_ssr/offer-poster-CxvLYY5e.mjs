import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Dumbbell, i as ListChecks, n as Salad, r as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/offer-poster-CxvLYY5e.js
var import_jsx_runtime = require_jsx_runtime();
var OFFER = {
	kicker: "عرض لفترة محدودة",
	discountLabel: "خصم",
	discountValue: "50%",
	title: "التدريب الأونلاين",
	subtitle: "جسم متناسق · أقصى استفادة",
	whatsappNumber: "201281618954",
	whatsappDisplay: "+20 128 161 8954",
	whatsappMessage: "مرحبا، أريد الاشتراك في عرض التدريب الأونلاين (خصم 50٪)",
	plans: [{
		id: "quarter",
		name: "3 أشهر",
		price: "1,500",
		was: "3,000",
		featured: true
	}, {
		id: "month",
		name: "الشهر",
		price: "500",
		was: "1,000",
		featured: false
	}],
	services: [
		{
			id: "remote",
			title: "تدريب عن بُعد",
			detail: "برنامج تدريبي محكم وبشكل مبسط، أينما كنت."
		},
		{
			id: "nutrition",
			title: "تغذية محكمة",
			detail: "خطط لبناء العضلات أو حرق الدهون العنيدة."
		},
		{
			id: "whatsapp",
			title: "متابعة يومية",
			detail: "تواصل واتساب يومي على +20 128 161 8954."
		},
		{
			id: "program",
			title: "برنامج مبسّط",
			detail: "خطة واضحة ومنضبطة بدون تعقيد زائد."
		}
	],
	posterServices: [
		"تدريب عن بُعد",
		"تغذية محكمة",
		"متابعة واتساب يومياً",
		"برنامج تدريبي مبسّط"
	],
	cta: "احجز الآن",
	endsAt: "2026-10-09T20:59:00.000Z"
};
function whatsappHref() {
	const text = encodeURIComponent(OFFER.whatsappMessage);
	return `https://wa.me/${OFFER.whatsappNumber}?text=${text}`;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var serviceIcons = [
	Dumbbell,
	Salad,
	MessageCircle,
	ListChecks
];
function OfferPoster({ format = "story" }) {
	const story = format === "story";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("artboard", story ? "artboard-story" : "artboard-feed"),
		dir: "rtl",
		lang: "ar",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "artboard-photo",
				src: "/offer/cinematic.jpg",
				alt: "مدرب أونلاين في الجيم بإضاءة سينمائية",
				crossOrigin: "anonymous"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "artboard-shade" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "artboard-grain",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("absolute z-[2] flex flex-col items-center justify-center rounded-full bg-accent text-accent-fg", story ? "left-[56px] top-[72px] size-[196px]" : "left-[48px] top-[48px] size-[168px]"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("font-semibold", story ? "text-[22px]" : "text-[18px]"),
					children: OFFER.discountLabel
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("font-extrabold leading-none tracking-tight", story ? "text-[64px]" : "text-[54px]"),
					children: OFFER.discountValue
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "artboard-content",
				children: [story ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[22px] font-medium tracking-[0.28em] text-muted",
							children: OFFER.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-px w-16 bg-fg/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 text-[48px] font-extrabold leading-none",
							children: OFFER.title
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: cn("flex flex-col", story ? "gap-5" : "gap-3.5"),
					children: [
						!story ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[16px] font-medium tracking-[0.22em] text-muted",
								children: OFFER.kicker
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-2 text-[36px] font-extrabold leading-none",
								children: OFFER.title
							})]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("text-center font-medium text-muted", story ? "text-[24px]" : "text-[18px]"),
							children: OFFER.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("grid grid-cols-2", story ? "gap-4" : "gap-3"),
							children: OFFER.plans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn(plan.featured ? "bg-accent text-accent-fg" : "bg-bg/55 shadow-[var(--shadow-border)] backdrop-blur-[2px]", story ? "rounded-[28px] px-6 py-5" : "rounded-[22px] px-5 py-4"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: cn("font-medium", story ? "text-[20px]" : "text-[17px]", plan.featured ? "text-accent-fg/70" : "text-muted"),
										children: plan.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: cn("font-extrabold leading-none tracking-tight", story ? "mt-1 text-[56px]" : "mt-1 text-[44px]"),
										children: plan.price
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: cn(story ? "mt-2 text-[20px]" : "mt-1 text-[17px]", plan.featured ? "text-accent-fg/60" : "text-subtle"),
										children: ["بدل ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "line-through decoration-2",
											children: plan.was
										})]
									})
								]
							}, plan.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: cn("grid grid-cols-2", story ? "gap-x-5 gap-y-2.5" : "gap-x-4 gap-y-2"),
							children: OFFER.posterServices.map((label, i) => {
								const Icon = serviceIcons[i] ?? Dumbbell;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: cn("flex items-center gap-3 font-medium text-fg", story ? "text-[20px]" : "text-[17px]"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("flex items-center justify-center rounded-full bg-fg/10", story ? "size-9" : "size-8"),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: story ? "size-5" : "size-4",
											strokeWidth: 1.75
										})
									}), label]
								}, label);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: whatsappHref(),
							target: "_blank",
							rel: "noopener noreferrer",
							className: cn("flex items-center justify-center rounded-full bg-accent font-bold text-accent-fg", story ? "h-[76px] text-[28px]" : "h-[62px] text-[24px]"),
							children: OFFER.cta
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { whatsappHref as i, OfferPoster as n, cn as r, OFFER as t };
