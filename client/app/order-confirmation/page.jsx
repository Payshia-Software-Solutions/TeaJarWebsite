"use client";

import React, { Suspense } from "react";
import OrderConfirmationPage from "@/components/OrderConfirmationPage"; // Extracted your actual page logic into this component

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderConfirmationPage />
    </Suspense>
  );
}
