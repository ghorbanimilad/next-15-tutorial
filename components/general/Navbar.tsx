// import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export async function Navbar() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    return (
        <nav className="py-5 flex justify-between items-center">
            <div className="flex items-center gap-6">
                <Link href="/" >
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                        Blog<span className="text-blue-500 text-4xl">Marshal</span>
                    </h1>
                </Link>

                <div className="hidden sm:flex items-center gap-6">
                    <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="/">Home</Link>
                    <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="/dashboard">Dashboard</Link>
                </div>
            </div>

            {user ? (
                <div className="flex items-center gap-4">
                    <p>{user.given_name}</p>
                    <LogoutLink className="secondary-button">Logout</LogoutLink>
                </div>
            ) : (
                <div className="flex items-center gap-4">
                    <LoginLink className="primary-button">Login</LoginLink>
                    <RegisterLink className="secondary-button">Sign up</RegisterLink>
                </div>
            )}

        </nav>
    )
}