# Add Doppler CLI to the deps stage
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install Doppler CLI
RUN apk add --no-cache curl && \
    curl -Ls https://cli.doppler.com/install.sh | sh

COPY package.json package-lock.json ./
RUN  npm install

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
ARG NEXT_PUBLIC_POSTHOG_KEY=$NEXT_PUBLIC_POSTHOG_KEY
ARG NEXT_PUBLIC_POSTHOG_HOST=$NEXT_PUBLIC_POSTHOG_HOST
ARG DOPPLER_TOKEN

RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ARG NEXT_PUBLIC_POSTHOG_KEY=$NEXT_PUBLIC_POSTHOG_KEY
ARG NEXT_PUBLIC_POSTHOG_HOST=$NEXT_PUBLIC_POSTHOG_HOST
ENV DOPPLER_TOKEN=$DOPPLER_TOKEN

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy Doppler binary from deps stage
COPY --from=deps /usr/local/bin/doppler /usr/local/bin/doppler
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/_posts ./_posts
COPY --from=builder /app/next.config.js ./next.config.js

USER nextjs

EXPOSE 80

ENV PORT 80

# Use Doppler to run your application
CMD ["doppler", "run", "--", "npm", "start"]