import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./router-CpMn2EYC.mjs";
import { n as OfferPoster } from "./offer-poster-CxvLYY5e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/poster-BBuGDRtW.js
var import_jsx_runtime = require_jsx_runtime();
function PosterExport() {
	const { format } = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "overflow-hidden bg-bg p-0",
		style: format === "feed" ? {
			width: 1080,
			height: 1350
		} : {
			width: 1080,
			height: 1920
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OfferPoster, { format })
	});
}
//#endregion
export { PosterExport as component };
