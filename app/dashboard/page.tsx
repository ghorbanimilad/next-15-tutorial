import Link from "next/link";
import { prisma } from "../utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import BlogpostCard from "@/components/general/BlogpostCard";

async function getData(userId: string) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay for loading state
    const data = await prisma.user.findMany({
        where: {
            authorId: userId
        },
        orderBy: {
            createdAt: "desc"
        }
    })
    return data;

}

export default async function DashboardRoute() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const data = await getData(user?.id as string);
    return (
        <div className="my-6">
            <div className="flex items-center justify-between mb-5 bg-gray-400 p-3 rounded">
                <h2 className="text-xl font-medium text-white">Your Blog Atricels</h2>
                <Link href="/dashboard/create" className="primary-button">
                    Create New Article
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">          
                {data.map((item) => (
                    <BlogpostCard key={item.id} data={item} />
                ))}         
                
            </div>

        </div>
    )
}