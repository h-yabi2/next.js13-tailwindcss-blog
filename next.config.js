
/** @type {import('next').NextConfig} */
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first")

const nextConfig = {
    images: {
        domains: ['source.unsplash.com'],
    },
}

module.exports = nextConfig
