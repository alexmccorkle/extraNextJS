import { defineQuery } from 'next-sanity';
import { sanityFetch } from '../live';

export const getAllProducts = async () => {
  const ALL_PRODUCTS_QUERY = defineQuery(`
  *[_type == "product"
  ] | order(name asc)`)

  try {
    // use sanityFetch to send the query
    const products = await sanityFetch({
      query: ALL_PRODUCTS_QUERY,
    });
    // Return list of products or empty array if none found
    return products.data || []
  }
  catch (err) {
    console.error("Error fetching products", err);
    return [];
  }
} 