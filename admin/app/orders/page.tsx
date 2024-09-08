"use client";
import React from "react";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function page() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/orders");
    },
  });
  if (!session) {
    // If session is not yet loaded, you might want to show a loading state.
    return <div>Loading...</div>;
  }

  return <div>{session.user?.name}</div>;
}

export default page;
