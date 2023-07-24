import Nav from "../Components/Main Page/Nav";
import Destination from "../Components/Main Page/Destination";
import { Link } from "react-router-dom";



const Main = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  if (!isAuthenticated) {
    return <div>You need to be authenticated to access this page. <span>Please <Link to="/login" className="text-brandColor underline">login</Link> or <Link to="/auth" className="text-brandColor underline">signup</Link></span>.</div>;
  }


  return (
    <>
        <Nav />
        <Destination />     
    </>
  )
}

export default Main