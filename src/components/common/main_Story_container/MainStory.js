import "./mainstory.scss";
const storyObj = {
  story: [
    {
      username: "Add to Story",
      userProfilePic: "https://img.icons8.com/?size=48&id=tDK8imBf370p&format=png",
      storytype: "image",
      storyUrl: "https://s.yimg.com/uu/api/res/1.2/GltCSVd7bZm2_I0xxRQ.qw--~B/Zmk9ZmlsbDtoPTIwMDtweW9mZj0wO3c9MjAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2023-09/210e82a0-5e14-11ee-93bd-e80525011260.cf.webp",
    },
    {
        username: "sohan lal",
        userProfilePic: "https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg",
        storytype: "video",
        storyurl: "https://videos.pexels.com/video-files/4835989/4835989-sd_640_360_25fps.mp4",
      },
      {
        username: "Ashok kumar",
        userProfilePic: "https://www.shutterstock.com/image-photo/happy-handsome-young-business-leader-260nw-2375039955.jpg",
        storytype: "image",
        storyUrl: "https://static.vecteezy.com/system/resources/thumbnails/022/655/829/small_2x/colorful-bird-on-a-background-of-nature-3d-illustration-free-photo.jpg",
      },
      {
        username: "mohit",
        userProfilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiG3w47Gh71JH9eYu7cW9Y5V0u1o_02IzEvbDEljjXi5xmSAOuFpk2j4iDr6DVmNCsciw&usqp=CAU",
        storytype: "video",
        storyurl: "https://videos.pexels.com/video-files/6004285/6004285-sd_360_640_30fps.mp4",
      },
      {
        username: "SitaRam",
        userProfilePic: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png",
        storytype: "video",
        storyurl: "https://videos.pexels.com/video-files/5646804/5646804-uhd_2560_1440_30fps.mp4",
      },
      {
        username: "Manoj",
        userProfilePic: "https://icon2.cleanpng.com/lnd/20240814/jt/319e49e86f7586f80f24c2dc5282d4.webp",
        storytype: "video",
        storyurl:"https://videos.pexels.com/video-files/4095643/4095643-uhd_2560_1440_30fps.mp4",
      },
  ],
};
const MainStory = () => {
  return( storyObj.story.map((ele) => {
    return(
         ele.storytype === "video" ? (
      <div className="story" key={ele.username}>
        <img src={ele.userProfilePic} alt=""  className="profilePic"/>
        <video autoPlay muted loop className="storyVideo">
          <source src={ele.storyurl} type="video/mp4" />
        </video>
        <p>{ele.username}</p>
      </div>
    ):ele.storytype === "image" ? (
      <div className="story" key={ele.username}>
        <img src={ele.storyUrl} alt=""  className="storypic"/>
        <img src={ele.userProfilePic} alt=""  className="profilePic"/>
        <p>{ele.username}</p>
      </div>
    ) : null
    )
  })
)
};

export default MainStory;
