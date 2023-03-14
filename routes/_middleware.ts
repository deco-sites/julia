import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 608,
  site: "julia",
  domains: ["julia.deco.site"],
});