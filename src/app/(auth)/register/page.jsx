import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import RegisterTemplate from "@/components/templates/RegisterTemplate";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export const metadata = {
  title: "ثبت نام",
};
async function page() {
  const session = await getServerSession(authOptions);

  if (session?.user?.email) {
    redirect("/");
  }
  return <RegisterTemplate />;
}

export default page;
