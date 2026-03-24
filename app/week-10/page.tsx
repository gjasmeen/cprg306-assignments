"use client";   
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";
 
export default function LoginPage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIN = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Error signing in with GitHub:", error)
        }
    };

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error signing out:", error)
        }
    };

    return(
        <main>
            <div className="text-center mt-8">
            <h1 className="text-center text-pink-700 font-bold mb-4">Shopping List </h1>
                <br />
                {!user && (
                    <button onClick={handleSignIN}  className = "text-center px-4 py-2 bg-pink-700 text-white rounded border  hover:bg-pink-900">
                        Log In with GitHub
                    </button>
                )}
            </div>
                {user && (
                    <>
                        <div className="text-center mb-4">
                            <p className="text-center text-pink-700 font-bold mb-4">You are logged in!</p>
                            <p>Welcome, {user.displayName} ({user.email})</p>
                            <Link href="/week-10/shopping-list" className="text-pink-700 hover:underline">
                                Click to Go to Shopping List

                                
                            </Link>

                            {/* sign out button */}  
                            <br />
            
                            <button onClick={handleSignOut}  className = "px-4 py-2 bg-pink-700 text-white rounded border  hover:bg-pink-900">
                            Sign Out    
                            </button>
                        </div>

                        
                    </>
                )}  

            

        </main>

    )
}