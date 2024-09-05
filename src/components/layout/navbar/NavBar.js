import "./nav.scss";
import { FaChessBishop, FaPlus, FaSearch } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { PiVideoBold } from "react-icons/pi";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { SiFacebookgaming } from "react-icons/si";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
const NavBar = () => {
  return (
    <div className="nav">
      <div className="first_container">
        <img
          src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png"
          alt=""
        />
        <div>
            <FaSearch /> <input type="text" placeholder="Search facebook" />
        </div>
      </div>
      <div className="second_container">
        <a href=' '><MdHome title="Home"/></a>
        <a href=' '><PiVideoBold title="Video" /></a>
        <a href=' '><FaChessBishop title="Shop"/></a>
        <a href=' '> <IoPeopleCircleOutline title="group"/></a>
        <a href=' '> <SiFacebookgaming title="gaming" /></a>
        </div>
      <div className="thrd_container">
        <div className="fst_container">
            <img src='https://s.yimg.com/uu/api/res/1.2/GltCSVd7bZm2_I0xxRQ.qw--~B/Zmk9ZmlsbDtoPTIwMDtweW9mZj0wO3c9MjAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2023-09/210e82a0-5e14-11ee-93bd-e80525011260.cf.webp' alt=''/>
            <span>Igor Bonifacic</span>
        </div>
        <div className="symbol_container" >
            <a href=' '><FaPlus/></a>
            <a href=' '><BiSolidMessageRoundedDetail/></a>
            <a href='  '><IoIosNotifications/></a>           
           
                <select>
                    <option value='' key=''></option>
                    <option value='' key=''> Home </option>
                    <option value='' key=''> Profile </option>
                    <option value='' key=''> Home </option>                    
                </select> 
          
        </div>
      </div>
    </div>
  );
};
export default NavBar;
