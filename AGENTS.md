# Repository Guidelines

## Project Structure & Module Organization
This repository contains an n8n community node for the Evolution API.
- `nodes/EvolutionApi/`: main node implementation.
  - `EvolutionApi.node.ts` and `EvolutionApi.node.json` define the node and UI metadata.
  - `execute/` holds resource handlers (e.g., `execute/messages/sendText.ts`).
  - `properties/` defines fields/operations and resource enums.
  - `evolutionapi.svg` is the node icon.
- `credentials/`: `EvolutionApi.credentials.ts` for auth configuration.
- `dist/`: build output published to npm; do not edit directly.
- `gulpfile.js`: icon build tasks for `pnpm build`.

## Build, Test, and Development Commands
- `pnpm install`: install dependencies (requires Node >= 18.10, pnpm >= 9.1).
- `pnpm build`: compile TypeScript and build icons into `dist/`.
- `pnpm dev`: watch mode TypeScript compile.
- `pnpm lint` / `pnpm lintfix`: run ESLint on `nodes/` and `credentials/`; `lintfix` applies fixes.
- `pnpm format`: run Prettier on `nodes/` and `credentials/`.
- `pnpm prepublishOnly`: build + lint using `.eslintrc.prepublish.js`.

## Coding Style & Naming Conventions
- Indentation: tabs, width 2 (see `.editorconfig`); `package.json` uses 2 spaces.
- Prettier rules: single quotes, semicolons, trailing commas, 100-column max; run `pnpm format`.
- ESLint uses `eslint-plugin-n8n-nodes-base` with node/credential rules; avoid patterns it flags.
- Naming: TypeScript sources in `*.node.ts`, `*.credentials.ts`, and action files like `execute/<resource>/<verb>.ts`; resource definitions in `properties/*.operations.ts` and `properties/*.fields.ts`.

## Testing Guidelines
No automated test suite is defined. Validate changes by:
- Running `pnpm lint` and `pnpm build`.
- Loading the node in a local n8n instance and exercising affected operations.

## Commit & Pull Request Guidelines
Git history uses short, sentence-case messages (often Portuguese) and occasional version tags (e.g., `v1.0.3`, `Correção da integração Dify`). Match that tone and keep scope small.
PRs should include:
- A brief summary and the operations/resources touched.
- Steps to validate (commands or n8n workflow notes).
- Screenshots or example payloads if behavior or UI changes.

## Security & Configuration Tips
Keep API tokens out of source control; use n8n credentials defined in `credentials/`. Update `package.json` engines if runtime requirements change.
