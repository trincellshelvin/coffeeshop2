/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

// ES modules do not have __dirname; recreate it from import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  // configure the Turbopack root so Next stops scanning parent
  // directories and complaining about the wrong lockfile being picked up.
  turbopack: {
    root: path.join(__dirname),
  },
  // distDir is left as default (./.next) so that module resolution works
  // properly; putting it outside the project caused the `react` package to
  // be unreachable from the compiled output.  If you continue to have OneDrive
  // lock issues, consider moving the repo out of OneDrive instead of
  // relocating the build directory.
};

export default nextConfig;
