/** @type {import('next').NextConfig} */
const { withLogtail } = require('@logtail/next');
const nextConfig = {}

module.exports = withLogtail(nextConfig)
