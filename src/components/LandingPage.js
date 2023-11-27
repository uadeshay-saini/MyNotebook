import React from 'react'
import BG from "./BG.jpg"
import { Link, useLocation, useNavigate} from "react-router-dom";
import NBG from "./NBG.jpg"
import circuitBoard from "./circuit-board.svg"
const LandingPage = () => {
  let location = useLocation();
console.log(location.pathname)
  return (
    <div>
    {location.pathname !== "/" || localStorage.getItem('token') !== null ? <div></div> : 
    <div className="w-full h-screen bg-no-repeat bg-cover bg-fixed" style={{ backgroundImage: `url(${NBG})`}}>
  <div className="h-screen flex flex-col md:flex-row items-center justify-center">
    {/* Left Section with Login/Signup Buttons and Description */}
    <div className="md:w-1/2 text-white text-center md:text-left md:p-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to MyNotebook</h1>
      <p className="text-base md:text-lg mb-8">
        MyNotebook is your personal assistant for creative thinking and efficient planning.
        Capture your ideas, set goals, and watch your productivity soar. Join our vibrant community today!
      </p>
      <div className="mb-4">
        <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4">
          Log In
        </Link>
        <Link to="/signup" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          Sign Up
        </Link>
      </div>
      <p className="text-xs md:text-sm text-gray-500">
        New to MyNotebook? Join us and turn your thoughts into a beautifully organized masterpiece.
      </p>
    </div>

    {/* Right Section with Hero Image and Features */}
    <div className="md:w-1/2 text-white text-center mb-16">
      <div className="mb-8 md:mb-16">
        <h2 className="text-xl md:text-3xl font-bold mb-4">Organize Your Notes</h2>
        <p className="text-gray-400">Effortlessly categorize and structure your thoughts.</p>
      </div>
      <div className="mb-8 md:mb-16">
        <h2 className="text-xl md:text-3xl font-bold mb-4">Access Anywhere</h2>
        <p className="text-gray-400">Retrieve your notes anytime, anywhere, across all devices.</p>
      </div>
      <div className="mb-8 md:mb-16">
        <h2 className="text-xl md:text-3xl font-bold mb-4">Smart Reminders</h2>
        <p className="text-gray-400">Never miss a deadline with our intelligent reminder system.</p>
      </div>
      <div className="mb-8 md:mb-0">
        <h2 className="text-xl md:text-3xl font-bold mb-4">Collaborate Seamlessly</h2>
        <p className="text-gray-400">
          Share and collaborate on projects with friends, colleagues, and fellow creatives.
        </p>
      </div>
    </div>
  </div>
</div>

//   <div  className="w-full h-screen bg-no-repeat bg-cover bg-fixed" style={{ backgroundImage: `url(${NBG})`}}>
   
//     <div className=" h-screen flex flex-col md:flex-row items-center justify-center">
//       {/* Left Section with Login/Signup Buttons and Description */}
//       <div className="md:w-1/2 text-white text-center md:text-left md:p-12">
//         <h1 className="text-5xl font-bold mb-4">Welcome to MyNotebook</h1>
//         <p className="text-lg mb-8">
//           MyNotebook is your personal assistant for creative thinking and efficient planning.
//           Capture your ideas, set goals, and watch your productivity soar. Join our vibrant community
//           today!
//         </p>
//         <div className="mb-4">
//           <Link
//           to="/login"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4"
//           >
//             Log In
//           </Link>
//           <Link
//             to="/signup"
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
//           >
//             Sign Up
//           </Link>
//         </div>
//         <p className="text-sm text-gray-500">
//           New to MyNotebook? Join us and turn your thoughts into a beautifully organized masterpiece.
//         </p>
//       </div>

//       {/* Right Section with Hero Image and Features */}
//       <div className="md:w-1/2 text-white text-center mb-16">
//         {/* <img src={notebookImage} alt="Notebook" className="w-40 h-40 mx-auto mb-4" /> */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold mb-4">Organize Your Notes</h2>
//           <p className="text-gray-400">Effortlessly categorize and structure your thoughts.</p>
//         </div>
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold mb-4">Access Anywhere</h2>
//           <p className="text-gray-400">Retrieve your notes anytime, anywhere, across all devices.</p>
//         </div>
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold mb-4">Smart Reminders</h2>
//           <p className="text-gray-400">Never miss a deadline with our intelligent reminder system.</p>
//         </div>
//         <div className="text-center">
//           <h2 className="text-3xl font-bold mb-4">Collaborate Seamlessly</h2>
//           <p className="text-gray-400">
//             Share and collaborate on projects with friends, colleagues, and fellow creatives.
//           </p>
//         </div>
        
//       </div>
//     </div>
// </div>
  }
  </div>
      );
    };
    
    
export default LandingPage