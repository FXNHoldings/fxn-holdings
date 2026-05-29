#!/usr/bin/env bash
# Build the Next.js static export and publish it to the nginx web root.
# Re-run after any content/code change.
#
# Serving model: static files in /var/www/html/fxnholdings.com, served by
# nginx (behind Cloudflare). No long-running Node server — Next.js is used
# only as a static-site generator (output: "export" -> frontend/out).
#
# Note: Docker is not installed on this host, so we build natively with the
# system Node (mirrors fxneurope's platform; only the build sandbox differs).
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
cd "$HERE/frontend"

WEBROOT="/var/www/html/fxnholdings.com"

echo "→ Installing deps (incl. dev)"
npm install --include=dev

echo "→ Static export (next build → frontend/out)"
NODE_ENV=production npx next build

echo "→ Publishing to ${WEBROOT}"
rsync -a --delete out/ "${WEBROOT}/"
chown -R www-data:www-data "${WEBROOT}"

echo
echo "→ Smoke tests (via nginx, Host header)"
for p in "/" "/about/" "/portfolio/" "/contact/"; do
  printf "  %-12s %s\n" "$p" \
    "$(curl -sS -o /dev/null -w 'HTTP %{http_code}' -H 'Host: www.fxnholdings.com' "http://127.0.0.1$p")"
done
echo
echo "✓ Published to ${WEBROOT}"
