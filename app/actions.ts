"use server";

import { prisma } from "./utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function createPostAction(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/register");
  }

  //   console.log("Creating post with form data:", formData);
  await prisma.user.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      imageUrl: formData.get("image-url") as string,
      authorId: user?.id,
      authorName: user?.given_name as string, // Use user's given name or fallback to "Anonymous"
      authorImage: user?.picture as string, // Use user's given name or fallback to "Anonymous"
    },
  });

  return redirect("/dashboard");
}
