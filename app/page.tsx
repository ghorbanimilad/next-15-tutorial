import BlogpostCard from "@/components/general/BlogpostCard";
import { prisma } from "./utils/db";
import { Suspense } from "react";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay for loading state
  const data = await prisma.user.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      authorId: true,
      imageUrl: true,
      authorName: true,
      createdAt: true,
      updatedAt: true,
      authorImage: true,

    }
  })
  console.log(data);
  return data;
}

export const metadata = {
  title: "Home Page",
}

export default function Home() {

  return (

    <div className="py-6 ">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest posts</h1>
      <Suspense fallback={
        <p className="flex items-center circle justify-center mx-auto border-4 border-red-500 h-25 w-25 rounded-full"> Waiting...</p>
          }>
      <BlogPosts />
      </Suspense>
    </div>

  );
}


async function BlogPosts() {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item) => (
        <BlogpostCard data={item} key={item.id} />
      ))}
    </div>
  )
}