import MainContact from "../../common/main_contact_section/mainContact";
import MainFbContant from "../../common/main_post_content/mainFbContent";
import MainStory from "../../common/main_Story_container/MainStory";
import "./main.scss";


const Main = () => {
  return (
    <div className="main">
      <div className="main_container">
        <div className="Story_container">
          <MainStory/>
        </div>
        <div className="fb_main_container">
        <MainFbContant/>
        </div>
      </div>
      <div className="contact_container">
      <MainContact/>
      </div>
    </div>
  );
};
export default Main;
