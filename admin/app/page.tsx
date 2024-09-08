import Link from "next/link";
import { options } from "./(auth)/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import useAdminAuth from "@/hooks/useAdminAuth";

export default async function Page() {
  const { isAuthenticated, isLoading } = useAdminAuth();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return null; // This is handled by the redirection in the hook
  }

  return <div> Dashboard</div>;
}
