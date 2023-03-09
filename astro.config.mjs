import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    experimental: {
        // Enable integrated astro Image type 
        assets: true
    }
});
