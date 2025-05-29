import { prisma } from "@/app/utils/db"
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(id: string) {
    const data = await prisma.user.findUnique({
        where: {
            id: id
        },
        // select: {
        //     id: true,
        //     title: true,
        //     content: true,
        //     imageUrl: true,
        //     authorId: true,
        //     authorName: true,
        //     authorImage: true,
        //     createdAt: true,
        //     updatedAt: true
        // }
    })

    if (!data) {
        return notFound();
    }

    return data;
}

type Params = Promise<{ id: string }>


export default async function IdPage({ params }: { params: Params }) {
    const { id } = await params;
    const data = await getData(id);
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <Link href="/dashboard" className="text-blue-500 hover:underline mb-4 inline-block">
                Back to Dashboard
            </Link>

            <div className="mt-6 mb-8 p-6 ">
                {/* <h1 className="text-2xl font-bold mb-3">Posts Details</h1> */}
                <p className="text-3xl font-semibold mb-2">{data.title}</p>
                <div className="flex items-center mb-4 space-x-4">
                    <div className="flex items-center space-x-2">
                        <div className="relative size-10 overflow-hidden rounded-full">
                            <Image src={data.authorImage || "/default-avatar.png"} alt="Author Image" fill className="object-cover" />
                            {/* <Image src={data.authorImage} alt="Default Avatar" fill className="object-cover" /> */}
                        </div>
                        <p className="font-medium">{data.authorName}</p>
                    </div>
                    <p className="text-sm text-gray-500">Created At: {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    }).format(new Date(data.createdAt))}
                    </p>

                </div>
            </div>

            <div className="relative h-[400px] w-full mb-8 overflow-hidden rounded-lg">
                <Image src={data.imageUrl || "/default-image.png"} alt="Post Image" priority fill className="object-cover" />
            </div>

            <div>
                <p className="text-lg text-gray-700 whitespace-pre-wrap">{data.content}</p>
            </div>

        </div>
    )
}