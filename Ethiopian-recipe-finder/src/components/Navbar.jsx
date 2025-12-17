 import {useState} from "react"
 import Sidebar from "./Sidebar.jsx";
import {faHome, faList, faCog, faEnvelope} from "@fortawesome/free-solid-svg-icons"
export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const links =[
    {
    name: "Home",
    path: "/",
    icon: faHome
  },
  {
    name: "Recipes",
    path: "/recipes",
  icon: faList
  },
  {
    name: "Settings",
    path: "/settings",
    icon: faCog
  },
  {
    name: "Contact",
    path: "/contact",
    icon: faEnvelope
  }
  ]
 function closeSidebar() {
    setShowSidebar(false);
  }
  return (
    <>
    <div className="navbar container">
    <a href="#!" className="logo">G<span>ur</span>sha Guide</a>
    <div className="nav-links">
      { links.map(link => (
        <a href="#!" key={link.name}>{link.name}</a>

      ))}
      {/* <a href="#!">Home</a>
      <a href="#!">Recipes</a>
      <a href="#!">Settings</a>
      <a href="#!">Contact</a> */}

    </div>
    <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
       <div className="bar"></div>
       <div className="bar"></div>
        <div className="bar"></div>
    </div>
    </div>
    {showSidebar && <Sidebar close={closeSidebar} links={links} />}
   
   
    </>
  );
}