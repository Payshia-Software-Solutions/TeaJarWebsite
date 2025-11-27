import { GraphQLClient } from "graphql-request";

const storeUrl = process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL;
const apiVersion = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION;
const accessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const client = new GraphQLClient(`${storeUrl}/api/${apiVersion}/graphql.json`, {
  headers: {
    "X-Shopify-Storefront-Access-Token": accessToken,
  },
});

export default client;
