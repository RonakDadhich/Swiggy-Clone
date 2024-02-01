import { LOGO_URL } from "../Utils/Constant";
import {useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";
import './Header.css';
// import UserContext from "../Utils/UserContext";

const Header = () => {
  const [btnNameReact , setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();
  
  // const {loggedInUser} = useContext(UserContext);
  // console.log(loggedInUser) 

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is [btnNameReact] => called everytime btnNameReact is updated
  // useEffect(()=>{
  //   // console.log("useEffect called")
  // },[btnNameReact]);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store)=>store.cart.items);
  console.log(cartItems)
    return(
      // <div className="flex justify-between bg-pink-50 shadow-lg">
      //   <div className='logo-container'>
      //     <img className="w-36" src= {LOGO_URL} alt="" />
      //   </div>
      //   <div className='flex item-center'>
      //     <ul className="flex p-4 m-4">
      //       <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
      //       <li className="px-4"><Link to="/">Home</Link></li>
      //       <li className="px-4"><Link to="/about">About Us</Link></li>
      //       <li className="px-4"><Link to="/contact">Contact Us</Link></li>
      //       <li className="px-4"><Link to="/grocery">Grocery</Link></li>
      //       <li className="px-4 font-bold text-xl"><Link to="cart"><i className="fa-solid fa-cart-shopping"></i> ({cartItems.length})</Link></li>
      //       <li><button className="login" onClick={()=>{btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");}}>{btnNameReact}</button></li>
      //       {/* <li className="px-4 font-bold">{loggedInUser}</li> */}
      //     </ul> 
      //   </div>
      // </div>

     <div>
       <div className='navbar-laptop shadow-lg flex justify-between font-bold text-xl'>
      <div className='logo'>
          <Link to="/">
              <img className="w-[150px] mt-2 mb-2" src={LOGO_URL} alt=""/>
          </Link>
      </div>
      <div className="menu mr-5 flex">
          <ul className='flex justify-center items-center flex-wrap  m-auto mr-5 nav-ul'>
          <li className="mt-2 text-xl mr-8">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
              <li className='mt-2 text-xl mr-8  onClick={handleClick}'>
                  <Link to="/">Home
                  </Link>
              </li>

              <li className='mt-2 text-xl mr-8'>
                  <Link to="/about">About Us</Link>
              </li>

              <li className='mt-2 text-xl mr-8'>
                  <Link to="/contact">Contact Us</Link>
              </li>
              
              <li className='mt-2 text-xl mr-8'>
                <div className='nav-li font-bold text-xl flex items-center justify-center onClick={handleClick}'>
                <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i><span style={{ color: "red" }}>{cartItems.length}</span> </Link>
                </div>
              </li>
              <li className='mt-2 text-xl mr-8'>
              <button className='bg-orange-400 flex justify-center items-center text-white px-4 py-2 font-bold rounded'onClick={()=>{btnNameReact === "Login" ? setBtnNameReact("Logout")    : setBtnNameReact("Login");}}>
                {btnNameReact}
                </button>
              </li>
             
          </ul>
          {/* <div className='nav-li mt-2 font-bold text-xl flex items-center justify-center onClick={handleClick}'>
              <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i><span style={{ color: "red" }}>{cartItems.length}</span> </Link>
              </div> */}
          {/* <Link to='/Login'>
          <button className='bg-orange-400 flex justify-center items-center text-white mt-5 px-4 py-2 font-bold rounded'onClick={()=>{btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");}}>
          {btnNameReact}
          </button>
          </Link> */}
        
      </div>
  </div>

    <nav className=" mobile-menu navbar bg-body-tertiary fixed-top shadow-lg flex justify-between font-bold text-xl">
    <div className="container-fluid">
        <div className='logo'>
            <img className="w-36" src={LOGO_URL} alt="" />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
           
            <span><i className="fa-solid fa-bars"></i></span>
        </button>
        <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <div className="offcanvas-title response" id="offcanvasNavbarLabel">   
                 <img src={LOGO_URL}/> 
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                <i className="fa-solid fa-x"></i>
                </button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav nav-ul justify-content-end flex-grow-1 pe-3">
                    <li className='ml-4 mt-2 text-xl mr-8  onClick={handleClick}'>
                       <Link to="/">Home</Link>
                    </li>
                    <li className='ml-4 mt-2 text-xl mr-8  onClick={handleClick}'>
                        <Link to="/about">About </Link>
                    </li>

                    <li className='ml-4 mt-2 text-xl mr-8  onClick={handleClick}'>
                        <Link to="/contact">Contact</Link>
                    </li>
                   
                  <li className='ml-4 font-bold text-xl mt-2 mr-8  onClick={handleClick}'>
                    <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i><span style={{ color: "red" }}>{cartItems.length}</span> </Link>
                  </li>
                </ul>
                <button className='bg-orange-400 text-white px-4 py-2 font-bold rounded'>
                    <Link to='/login'>Login</Link>
                </button>
            </div>
        </div>
    </div>
</nav>
     </div>

    )
  }
  export default Header;