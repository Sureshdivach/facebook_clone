import MainStory from "../../common/main_Story_container/MainStory";
import "./main.scss";
const storyObj = {
  story: [
    {
      username: "Suresh Kumar",
      userPic: "https://www.mensjournal.com/.image/t_share/MTk2MTM2NTcwNDMxMjg0NzQx/man-taking-selfie.jpg",
      storytype: "img",
      storyurl: "https://scontent.fjdh1-3.fna.fbcdn.net/v/t39.30808-1/312832707_3200829166837747_8340622627173576088_n.jpg?stp=cp0_dst-jpg_e15_q65_s120x120&_nc_cat=101&ccb=1-7&_nc_sid=6738e8&_nc_ohc=s5bSHUicwJ8Q7kNvgFzLD4-&_nc_ht=scontent.fjdh1-3.fna&oh=00_AYDK3pwhc6ebYh_P1YecGwExGzRwQQAfftxxwPROSZaJ2w&oe=66E08626",
    },
    {
        username: "sohan lal",
        userPic: "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
        storytype: "video",
        storyurl: "https://videos.pexels.com/video-files/3629511/3629511-sd_360_450_24fps.mp4",
      },
      {
        username: "Ashok kumar",
        userPic: "https://www.shutterstock.com/image-photo/happy-handsome-young-business-leader-260nw-2375039955.jpg",
        storytype: "img",
        storyurl: "https://static.vecteezy.com/system/resources/thumbnails/022/655/829/small_2x/colorful-bird-on-a-background-of-nature-3d-illustration-free-photo.jpg",
      },
      {
        username: "mohit",
        userPic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiG3w47Gh71JH9eYu7cW9Y5V0u1o_02IzEvbDEljjXi5xmSAOuFpk2j4iDr6DVmNCsciw&usqp=CAU",
        storytype: "video",
        storyurl: "https://videos.pexels.com/video-files/4448895/4448895-sd_360_640_30fps.mp4",
      },
      {
        username: "SitaRam",
        userPic: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        storytype: "video",
        storyurl: "https://videos.pexels.com/video-files/4434242/4434242-sd_360_640_24fps.mp4",
      },
  ],
};

const Main = () => {
  return (
    <div className="main">
      <div className="main_container">
        <div className="Story_container">
          <MainStory StoryArr={storyObj.story} />
        </div>
      </div>
      <div className="contact_container">contact</div>
    </div>
  );
};
export default Main;
