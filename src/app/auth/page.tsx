import { isAuth } from "@/actions";
import AuthForm from "./auth-form";
import { redirect } from "next/navigation";

export default async function page() {
  const authed = await isAuth();
  if (authed) redirect("/dashboard");
  return <AuthForm />;
}
