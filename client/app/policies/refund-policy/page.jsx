import React from "react";

function RefundPolicy() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800 font-sans pt-44">
      <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>

      <h2 className="text-2xl font-semibold mb-3">Returns</h2>
      <p className="mb-4">
        Our return policy is valid for 30 days from the date of purchase. If 30
        days have passed since your purchase, unfortunately, we are unable to
        offer a refund or exchange.
      </p>
      <p className="mb-4">
        To be eligible for a return, your item must be unused and in the same
        condition that you received it. It should also be in its original
        packaging.
      </p>
      <p className="mb-4">Non-returnable items:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Opened tea products or used tea accessories.</li>
        <li>
          Perishable goods, such as loose leaf teas and pre-brewed tea items.
        </li>
        <li>
          Custom or personalized items (e.g., special blends, custom tea
          accessories).
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">How to Complete a Return</h2>
      <p className="mb-4">
        To initiate a return, please contact us at{" "}
        <a
          href="mailto:info@teajarceylon.com"
          className="text-blue-500 hover:underline"
        >
          info@teajarceylon.com
        </a>{" "}
        and provide proof of purchase. Please do not send your purchase back to
        the manufacturer.
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        Partial Refunds (if applicable)
      </h2>
      <ul className="list-disc list-inside mb-6">
        <li>Tea products that have been opened or used.</li>
        <li>Items that are damaged or missing parts not caused by us.</li>
        <li>Products returned more than 30 days after delivery.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Refunds (if applicable)</h2>
      <p className="mb-4">
        Once we receive and inspect your returned item, we will notify you by
        email about the approval or rejection of your refund. If approved, your
        refund will be processed and credited to your original method of payment
        within a few days.
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        Late or Missing Refunds (if applicable)
      </h2>
      <p className="mb-4">If you haven’t received your refund yet:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Check your bank account again.</li>
        <li>
          Contact your credit card company or bank, as it may take some time for
          the refund to appear.
        </li>
        <li>
          If you still haven’t received the refund, please contact us at{" "}
          <a
            href="mailto:marketing@teajarceylon.com"
            className="text-blue-500 hover:underline"
          >
            marketing@teajarceylon.com
          </a>
          .
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">
        Sale Items (if applicable)
      </h2>
      <p className="mb-6">
        Only regular-priced items are eligible for a refund. Sale items are not
        refundable.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Exchanges (if applicable)</h2>
      <p className="mb-4">
        We only replace items if they are defective or damaged. If you need to
        exchange a defective item for the same product, please send us an email
        at{" "}
        <a
          href="mailto:info@teajarceylon.com"
          className="text-blue-500 hover:underline"
        >
          info@teajarceylon.com
        </a>{" "}
        and mail the item to:
      </p>
      <address className="mb-6">
        KDU Exports (PVT) Ltd, <br />
        Galpadithenna Tea Factory, <br />
        Lellopitiya, Ratnapura, Sri Lanka.
      </address>

      <h2 className="text-2xl font-semibold mb-3">Gifts</h2>
      <p className="mb-4">
        If the item was marked as a gift during purchase and shipped directly to
        you, you will receive a gift credit for the value of the returned item.
        Once we receive the returned item, we will issue a gift certificate.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Shipping</h2>
      <p className="mb-4">To return your product, please mail it to:</p>
      <address className="mb-4">
        KDU Exports (PVT) Ltd, <br />
        Galpadithenna Tea Factory, <br />
        Lellopitiya, Ratnapura, Sri Lanka.
      </address>
      <p className="mb-4">
        You will be responsible for paying the return shipping costs. Shipping
        costs are non-refundable. If a refund is issued, the cost of return
        shipping will be deducted.
      </p>
      <p className="mb-6">
        <strong>Important Notes:</strong>
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>
          If your order exceeds $75, we recommend using a trackable shipping
          service or purchasing shipping insurance, as we cannot guarantee that
          we will receive your returned item.
        </li>
      </ul>
    </div>
  );
}

export default RefundPolicy;
