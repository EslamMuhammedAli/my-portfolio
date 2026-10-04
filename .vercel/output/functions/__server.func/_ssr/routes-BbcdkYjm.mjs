import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Dumbbell, i as ListChecks, n as Salad, o as Download, r as MessageCircle } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { i as whatsappHref, n as OfferPoster, r as cn, t as OFFER } from "./offer-poster-CxvLYY5e.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BbcdkYjm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function pad(n) {
	return String(Math.max(0, n)).padStart(2, "0");
}
function split(ms) {
	const total = Math.max(0, Math.floor(ms / 1e3));
	const days = Math.floor(total / 86400);
	const hours = Math.floor(total % 86400 / 3600);
	const minutes = Math.floor(total % 3600 / 60);
	const seconds = total % 60;
	return {
		days: pad(days),
		hours: pad(hours),
		minutes: pad(minutes),
		seconds: pad(seconds)
	};
}
function Countdown() {
	const end = new Date(OFFER.endsAt).getTime();
	const [parts, setParts] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const tick = () => setParts(split(end - Date.now()));
		tick();
		const id = window.setInterval(tick, 1e3);
		return () => window.clearInterval(id);
	}, [end]);
	if (!parts) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-4 gap-2",
		"aria-hidden": "true",
		children: [
			"يوم",
			"ساعة",
			"دقيقة",
			"ثانية"
		].map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg bg-elevated px-2 py-3 text-center shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xl font-semibold leading-none tracking-tight tabular-nums",
				children: "--"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs font-medium text-muted",
				children: label
			})]
		}, label))
	});
	if (end - Date.now() <= 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm font-medium text-muted",
		children: "العرض قائم لعدد محدود من المقاعد"
	});
	const cells = [
		{
			label: "يوم",
			value: parts.days
		},
		{
			label: "ساعة",
			value: parts.hours
		},
		{
			label: "دقيقة",
			value: parts.minutes
		},
		{
			label: "ثانية",
			value: parts.seconds
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-4 gap-2",
		"aria-label": "العد التنازلي لانتهاء العرض",
		children: cells.map((cell) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg bg-elevated px-2 py-3 text-center shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xl font-semibold leading-none tracking-tight tabular-nums",
				children: cell.value
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-xs font-medium text-muted",
				children: cell.label
			})]
		}, cell.label))
	});
}
var ART = {
	width: 1080,
	height: 1920
};
function ScaledPoster() {
	const frameRef = (0, import_react.useRef)(null);
	const [scale, setScale] = (0, import_react.useState)(.3);
	(0, import_react.useEffect)(() => {
		const frame = frameRef.current;
		if (!frame) return;
		const update = () => {
			const next = Math.min(frame.clientWidth / ART.width, frame.clientHeight / ART.height);
			setScale(Number.isFinite(next) && next > 0 ? next : .3);
		};
		update();
		const observer = new ResizeObserver(update);
		observer.observe(frame);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: frameRef,
		className: "flex h-full min-h-0 w-full items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative overflow-hidden rounded-xl shadow-[var(--shadow-border)]",
			style: {
				width: ART.width * scale,
				height: ART.height * scale
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-0 top-0 origin-top-left",
				style: { transform: `scale(${scale})` },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferPoster, { format: "story" })
			})
		})
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,box-shadow,background-color,color] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg shadow-[var(--shadow-border)] hover:opacity-90",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)] hover:bg-elevated",
			ghost: "bg-transparent text-fg hover:bg-elevated"
		},
		size: {
			default: "h-11 px-5",
			sm: "h-9 px-3.5 text-xs",
			lg: "h-12 px-6 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var detailIcons = {
	remote: Dumbbell,
	nutrition: Salad,
	whatsapp: MessageCircle,
	program: ListChecks
};
function WhatsAppMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-dvh bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid min-h-dvh max-w-6xl gap-6 px-4 py-4 lg:grid-cols-[minmax(0,7fr)_minmax(18rem,5fr)] lg:items-stretch lg:gap-10 lg:px-8 lg:py-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "h-[calc(100dvh-6.5rem)] lg:h-auto lg:min-h-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScaledPoster, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "flex flex-col justify-center gap-7 pb-28 lg:pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-[0.22em] text-muted",
							children: OFFER.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-3xl font-extrabold leading-tight lg:text-4xl",
							children: OFFER.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-base text-muted",
							children: OFFER.subtitle
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-sm font-medium text-muted",
						children: "ينتهي العرض خلال"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3",
						children: OFFER.plans.map((plan) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: plan.featured ? "rounded-xl bg-accent p-4 text-accent-fg" : "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `text-sm font-medium ${plan.featured ? "text-accent-fg/70" : "text-muted"}`,
									children: plan.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-3xl font-extrabold leading-none tracking-tight",
									children: plan.price
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: `mt-2 text-sm ${plan.featured ? "text-accent-fg/60" : "text-subtle"}`,
									children: ["بدل ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "line-through",
										children: plan.was
									})]
								})
							]
						}, plan.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-3",
						children: OFFER.services.map((service) => {
							const Icon = detailIcons[service.id];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-elevated",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "size-4",
										strokeWidth: 1.75
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-semibold",
									children: service.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-sm leading-relaxed text-muted",
									children: service.detail
								})] })]
							}, service.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden flex-col gap-3 lg:flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappHref(),
									target: "_blank",
									rel: "noopener noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppMark, { className: "size-4" }), "احجز عبر واتساب"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-center text-sm text-muted",
								dir: "ltr",
								children: OFFER.whatsappDisplay
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "/offer-story.png",
										download: "coaching-story.png",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "ستوري 9:16"]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "/offer-feed.png",
										download: "coaching-post.png",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "بوست 4:5"]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/offer/cinematic.jpg",
									download: "cinematic-coach.jpg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {}), "الصورة السينمائية بدون نص"]
								})
							})
						]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-x-0 bottom-0 z-20 border-t border-line bg-bg/95 p-3 backdrop-blur-sm lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-lg gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "min-h-11 flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: whatsappHref(),
						target: "_blank",
						rel: "noopener noreferrer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppMark, { className: "size-4" }), "احجز عبر واتساب"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					className: "min-h-11 px-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/offer-feed.png",
						download: "coaching-post.png",
						"aria-label": "حمّل البوست",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {})
					})
				})]
			})
		})]
	});
}
//#endregion
export { Home as component };
