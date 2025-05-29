
import Image from "next/image";
import Link from "next/link";
// import { useEffect, useState } from "react";

interface IappProps {
    data: {
        id: string;
        title: string;
        content: string;
        imageUrl: string;
        authorId: string;
        authorName: string;
        authorImage: string;

        createdAt: Data;
        updatedAt: Data;
    }
}

// type Image = {
//     id: string;
//     url: string;
//     width: number;
//     height: number;
// }

export default function BlogpostCard({ data }: IappProps) {
    // const [images, setImages] = useState<[Image]>([]);

    // useEffect(() => {
    //     fetch("api/images")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setImages(data);
    //         })
    // })
    return (
        <div className="group relative bg-white dark:bg-gray-800 
        rounded-xl shadow-md overflow-hidden trasition-all hover:shadow-lg">
            <Link href={`/post/${data.id}`} className="block w-full h-full">
                <div className="relative p-5 h-47 bg-gray-100 w-full overflow-hidden">

                    {/* {images.map((img) => (
                        <Image key={img.id} src={img.url} alt="blog image" width={img.width} height={img.height}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    ))} */}

                    <Image src={data.imageUrl} alt="first blog" fill
                        className="object-cover trasition-trasforam duration-300 group-hover:scale-105" />
                </div>
                <div className="p-5">
                    <h3 className="mb-2 text-lg font-semibold">{data.title}</h3>

                    <p className="mb-4 text-sm text-gray-600 line-clamp-3">{data.content}</p>
                </div>

                <div className="flex item-center justify-between">
                    <div className="flex item-center space-x-2">
                        <div className="relative size-8 overflow-hidden">
                            <Image src={data.authorImage} alt={data.authorName} fill
                                className="object-cover rounded-full" />
                        </div>
                        <p>{data.authorName}</p>
                    </div>

                    <time className="text-sm text-gray-500 p-2">
                        {new Date(data.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })}
                    </time>
                </div>


            </Link>


        </div>
    );
}