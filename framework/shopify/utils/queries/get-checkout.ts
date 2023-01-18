import { checkoutDetailFragment } from "../common";

const getCheckout = `
query($checkoutId: ID = "test_id_checkout"){
    node(id: $checkoutId) {
      ... on Checkout {
        ${checkoutDetailFragment}
      }
    }
  }
`;

export default getCheckout;
