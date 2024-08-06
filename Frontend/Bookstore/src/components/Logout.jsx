import toast from "react-hot-toast";
import { useAuth } from "../context/useAuth"

export default function Logout() {
     const [authUser,setAuthUser]=useAuth();
     const handelLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("user");
            toast.success("Logout successfully");
            window.location.reload();
        } catch (error) {
            toast.error("Error:"+error.message)
            
        }
     }
  return (

    <div style={{}}>
        <button style={{
            backgroundColor: '#4CAF50', // Green background
           
        }} onClick={handelLogout}>
                Log out
        </button>
    </div>
  )
}
