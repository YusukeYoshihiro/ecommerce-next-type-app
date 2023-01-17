import useCart from "@common/cart/use-cart";
export default useCart;

export const handler = {
  fetchOptions: {
    // get checkout query
    query: "query { hello }",
  },
  async fetcher({ fetch, options, input: { checkoutId } }: any) {
    const data = await fetch({ ...options });
    // We need checkout ID

    // Get checkout

    // If there is no checkout then create checkout
    return { data };
  },
  useHook: ({ useData }: any) => {
    const data = useData();
    return {
      data,
    };
  },
};