import { defineConfig } from "astro/config";
import { fileURLToPath } from 'url';
// import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";


//vercell added
// https://astro.build/config
export default defineConfig({
  site: "https://astro-supabase-castell.vercel.app",
  output: "server",
  
  integrations: [   tailwind({
    // Example: Provide a custom path to a Tailwind config file
    configFile: fileURLToPath(new URL('./tailwind.config.cjs', import.meta.url)),
    applyBaseStyles: true,
 }
 ), solidJs()],
});
