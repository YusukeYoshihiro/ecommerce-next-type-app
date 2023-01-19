import useCart, { UseCart } from "@common/cart/use-cart";
import { Cart } from "@common/types/cart";
import { SWRHook } from "@common/types/hooks";
import { Checkout } from "@framework/schema";
import {
  checkoutToCart,
  createCheckout,
  getCheckoutQuery,
} from "@framework/utils";
import { useMemo } from "react";

export type UseCartHookDescriptor = {
  fetcherInput: {
    checkoutId: string;
  };
  fetcherOutput: {
    node: Checkout;
  };
  data: Cart;
};

export default useCart as UseCart<typeof handler>;

export const handler: SWRHook<UseCartHookDescriptor> = {
  fetcherOptions: {
    // get checkout query
    query: getCheckoutQuery,
  },
  async fetcher({ fetch, options, input: { checkoutId } }) {
    let checkout: Checkout;

    if (checkoutId) {
      const { data } = await fetch({
        ...options,
        variables: {
          checkoutId,
        },
      });
      checkout = data.node;
    } else {
      checkout = await createCheckout(fetch as any);
    }

    // Normalize checkout
    const cart = checkoutToCart(checkout);
    return cart;
  },
  useHook:
    ({ useData }) =>
    () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const result = useData({
        swrOptions: {
          revalidateOnFocus: false,
        },
      });

      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useMemo(() => {
        return {
          ...result,
          isEmpty: (result.data?.lineItems.length ?? 0) <= 0,
        };
      }, [result]);
    },
};
