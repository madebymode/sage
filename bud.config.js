/**
 * @typedef {import('@roots/bud').Bud} bud
 *
 * @param {bud} app
 */
module.exports = async (app) => {
  app
    /**
     * Application entrypoints
     *
     * Paths are relative to your resources directory
     */
    .entry({
      app: ['@scripts/app', '@styles/app'],
      editor: ['@scripts/editor', '@styles/editor'],
    })

    /**
     * These files should be processed as part of the build
     * even if they are not explicitly imported in application assets.
     */
    .assets('images')

    /**
     * These files will trigger a full page reload
     * when modified.
     */
    .watch('resources/views/**/*', 'app/**/*')

    /**
     * Target URL to be proxied by the dev server.
     *
     * This is your local dev server.
     */
    .proxy('http://example.test')

    /**
     * Development URL
     */
    .serve('http://example.test:3000')

    /**
     * Generate WordPress `theme.json`
     *
     * @note This overwrites `theme.json` on every build.
     */
    .themeJson({
      color: {
        custom: false,
        customGradient: false,
      },
      custom: {
        spacing: {},
        typography: {
          'font-size': {},
          'line-height': {},
        },
      },
      spacing: {
        padding: true,
        units: ['px', '%', 'em', 'rem', 'vw', 'vh'],
      },
      typography: {
        customFontSize: false,
      },
    })

    /**
     * Set `theme.json` colors from `tailwind.config.js` values
     */
    .useTailwindColors();
};
