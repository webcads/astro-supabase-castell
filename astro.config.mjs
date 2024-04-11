import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

//vercell added
// https://astro.build/config
export default defineConfig({
  site: "https://astro-supabase-castell.vercel.app",
  output: "server",
  adapter: vercel(),
  integrations: [tailwind(), solidJs()],
});
