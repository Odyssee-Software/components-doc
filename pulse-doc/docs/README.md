# Pulse Framework Documentation

This directory contains the automatically generated API documentation for Pulse Framework.

## Directory Structure

```
docs/
├── README.md           # This file
├── api/                # API reference documentation (auto-generated)
│   ├── index.md       # API documentation home page
│   └── ...            # Individual API reference files
└── api-report/         # API surface report (for tracking changes)
    └── pulse-framework.api.md
```

## API Documentation

The `api/` directory contains automatically generated Markdown documentation for the entire Pulse Framework API.

**Main entry point:** [api/index.md](./api/index.md)

### Key API Documentation Files

- **[pulse-framework.md](./api/pulse-framework.md)** — Main package documentation
- **[pulse-framework.signal.md](./api/pulse-framework.signal.md)** — Signal API reference
- **[pulse-framework.computed.md](./api/pulse-framework.computed.md)** — Computed values API
- **[pulse-framework.effect.md](./api/pulse-framework.effect.md)** — Effects API
- **[pulse-framework.render.md](./api/pulse-framework.render.md)** — Render function API
- **[pulse-framework.pulse.fn.md](./api/pulse-framework.pulse.fn.md)** — Function component type
- **[pulse-framework.pulse.jsx.md](./api/pulse-framework.pulse.jsx.md)** — JSX namespace and types

## API Report

The `api-report/` directory contains the API surface report, which is a human-readable summary of the public API. This file is tracked in Git and used to detect breaking changes.

## Generating Documentation

To regenerate the API documentation:

```bash
# Build and extract API
npm run build:api

# Generate markdown documentation
npm run build:docs
```

### Prerequisites

- The project must be built first (`npm run build`)
- TypeScript declarations must be generated (`dist/*.d.ts`)

### How It Works

1. **Build** — Compile TypeScript and generate `.d.ts` files
2. **API Extractor** — Analyze TypeScript declarations and create `pulse-framework.api.json`
3. **API Documenter** — Generate Markdown files from the API model

## Tools Used

- **[@microsoft/api-extractor](https://api-extractor.com/)** — Analyzes TypeScript declarations and creates API models
- **[@microsoft/api-documenter](https://api-extractor.com/pages/setup/generating_docs/)** — Generates Markdown documentation from API models

## User Guides

For conceptual guides and tutorials, see the main [guides/](../guides/) directory:

- [Getting Started](../guides/01-getting-started.md)
- [Signals & Computed](../guides/02-signals-computed.md)
- [Components](../guides/03-components.md)
- [JSX Usage Guide](../guides/06-jsx-usage.md)
- [Advanced Patterns](../guides/04-advanced-patterns.md)

## Contributing

When adding new public APIs:

1. Add JSDoc comments to your TypeScript code
2. Run `npm run build:docs` to regenerate documentation
3. Review the generated markdown in `docs/api/`
4. Commit both your code changes and the updated API documentation

### JSDoc Best Practices

```typescript
/**
 * Creates a reactive signal with the given initial value.
 * 
 * @param initialValue - The initial value of the signal
 * @returns A signal function that can get/set the value
 * 
 * @example
 * ```ts
 * const count = signal(0);
 * console.log(count()); // 0
 * count(5);
 * console.log(count()); // 5
 * ```
 * 
 * @public
 */
export function signal<T>(initialValue: T): Signal<T> {
  // implementation
}
```

## License

MIT © Odyssee Software