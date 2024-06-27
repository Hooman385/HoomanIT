import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignInTemplate from "@/components/templates/SignInTemplate";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "ورود به حساب",
};

async function page() {
  const session = await getServerSession(authOptions);

  if (session.user.email) {
    redirect("/");
  }
  return <SignInTemplate />;
}

export default page;
