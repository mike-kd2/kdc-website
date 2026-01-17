// @ts-check
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// Import Next.js ESLint configs directly
const nextConfig = require('eslint-config-next');
const nextCoreWebVitals = require('eslint-config-next/core-web-vitals');

/** @type {import('eslint').Linter.Config[]} */
const config = [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      '.vercel/**',
      'public/**',
    ],
  },
  ...nextCoreWebVitals,
];

export default config;
