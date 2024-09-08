"use client";
import { useRouter } from "next/navigation";
import SignIn from "../../../../../components/SignIn";

export default function SignInPage() {
  const router = useRouter();

  return (
    <div>
      <SignIn />
    </div>
  );
}
