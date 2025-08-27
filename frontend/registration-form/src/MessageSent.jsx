import Profile from "./Profile"

export default function MessageSent() {

    function handleViewProfile()
    {   
      
    }
    return(
        <>
            <div className="mx-auto flex flex-col gap-2 items-center h-screen justify-center bg-green-600 text-white p-4 ">
                <h1 className="text-5xl">Successfully registered!</h1>
                <p>Your registration is successfull, visit you profile to know more.</p>
                <button className="bg-orange-500 rounded-md p-2 cursor-pointer" onClick={handleViewProfile}>Visit Profile</button>
            </div>
        </>
    )
}