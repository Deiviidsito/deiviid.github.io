import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://deiviid.com",
  integrations: [tailwind()],
});
