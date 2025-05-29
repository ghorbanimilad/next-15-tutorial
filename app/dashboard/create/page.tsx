
import { createPostAction } from "@/app/actions";
import SubmitButton from "@/components/general/SubmitButton";

export default function CreatePage() {
    return (
        <div className="mb-6">
            <div className="max-w-xl mx-auto mb-5 border border-gray-300 rounded-3xl shadow p-5">
                <h2 className="text-xl font-medium">Create New Article</h2>
                <p className="text-gray-500">create a new post to share the world</p>
                <form className="" action={createPostAction}>
                    <div className="flex flex-col gap-4 mt-5">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" placeholder="Title"  required
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                    </div>
                    <div className="flex flex-col gap-4 mt-5">
                        <label htmlFor="content">Content</label>
                        <textarea  name="content" placeholder="Content"  required
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                    </div>
                    <div className="flex flex-col gap-4 mt-5">
                        <label htmlFor="image-url">Image URL</label>
                        <input type="text" name="image-url" placeholder="Image url"  required
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        />
                    </div>
                    <div className="flex flex-col gap-4 mt-5">
                        <SubmitButton />
                    </div>
                </form>
            </div>
        </div>
    )
}