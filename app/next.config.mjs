/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack: (config, options) => {
    config.experiments = { asyncWebAssembly: true };

    for (const rule of config.module.rules) {
      if (rule.oneOf) {
        for (const oneOf of rule.oneOf) {
          if (oneOf.type === "asset/resource") {
            oneOf.exclude = Array.from(oneOf.exclude);
            oneOf.exclude.push(/\.wasm$/);
          }
        }
      }
    }
    config.resolve.fallback = { fs: false };
    config.experiments = { asyncWebAssembly: true, layers: true };
    return config;
  },
};
export default config;
