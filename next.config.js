/** @type {import('next').NextConfig} */

require("dotenv").config();
module.exports = {
  reactStrictMode: true,
  nft: {
    alchemyApiKey: process.env.REACT_APP_ALCHEMY_API_KEY
  }
}
