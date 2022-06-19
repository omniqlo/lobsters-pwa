# lobsters-pwa

[![Build Status][build-badge]][build]

A read-only clone of the [Lobsters](https://lobste.rs/) frontend built using [SvelteKit](https://kit.svelte.dev/) and [TailwindCSS](https://tailwindcss.com/). Check out the app [here](https://lobsters-pwa.netlify.app/).

## Development

### Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Setup

Run the following commands to set up the codebase for development.

```sh
$ git clone git@github.com:omniqlo/lobsters-pwa.git
$ cd lobsters-pwa
$ pnpm setup
```

The `setup` script will install all dependencies and perform a suite of tests to verify that there are no issues before starting development.

### Running the App

Run the following command to start the application (automatically opens it in a browser).

```sh
$ pnpm dev
```

To preview a production version of the app, run the following commands:

```sh
$ pnpm build
$ pnpm preview
```

Then open a browser and navigate to http://localhost:3000 to view the app.

### Storybook

[Storybook](https://storybook.js.org/) is an open-source tool for building UI components in isolation. Run stories (located in `src/lib/components`) with the command `pnpm storybook`.

_Note_: The `loki.stories.svelte` files are used for visual regression tests and don't appear in Storybook when running `pnpm storybook`.

## Testing

**Commands**:

- `pnpm test:unit`: Run unit tests using Vitest and Testing Library
- `pnpm test:visual`: Run visual regression tests of components using Loki
- `pnpm test:e2e`: Run end-to-end test using Playwright. _Note_: When running tests for the first time, you may need to run `npx playwright install` to download browsers.
- `pnpm lh`: Run Lighthouse for performance and accessibility checks

## Contributing

If you find any issues or have suggestions for improvement, please create a new [issue](https://github.com/omniqlo/lobsters-pwa/issues). Thanks!

[build-badge]: https://img.shields.io/github/workflow/status/omniqlo/lobsters-pwa/ci?logo=github&style=flat-square
[build]: https://github.com/omniqlo/lobsters-pwa/actions/workflows/ci.yml
