import "./mainFbContent.scss";
import { RiMoreFill, RiShareForwardLine } from "react-icons/ri";
import { IoMdPhotos } from "react-icons/io";
import { FaRegComment, FaUserFriends, FaUserTag, FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocalActivity } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
const fbPostObj={
    mainPost:[
      {profilepic:"https://m.media-amazon.com/images/I/91MpByZOicL._AC_UF1000,1000_QL80_.jpg",
      Username:'Suresh Kumar',        
       time:'2 hrs',
       icon:<FaUserFriends/>,
       more:<RiMoreFill/>,
        label:'Success की सबसे खास बात है की, वो मेहनत करने वालों पर फ़िदा हो जाती है।',
       postType:"Image",
        postImage:"https://wallpaper.forfun.com/fetch/04/0459522bc2cc584ff0a816ccae010285.jpeg",
        Like:<AiOutlineLike/>,
        Comment:<FaRegComment/>,
        Sent:<FaWhatsapp/>,
        Share:<RiShareForwardLine/>
       } ,
       {profilepic:"https://media.istockphoto.com/id/1594331649/photo/a-call-center-worker-sitting-at-a-laptop-in-the-office.jpg?s=2048x2048&w=is&k=20&c=OjB6GyqSdDd8sjJcV66xBxnHQBqIOlxf1DHXXq4wcVc=",
        Username:'Sohan lal',        
         time:'Live',
         icon:<FaUserFriends/>,
         more:<RiMoreFill/>,
          label:'“मिसाल क़ायम करने के लिए, अपना रास्ता स्वयं बनाना होता है।”',
         postType:"video",
          postvideo:"https://videos.pexels.com/video-files/5855743/5855743-hd_1920_1080_30fps.mp4",
          Like:<AiOutlineLike/>,
          Comment:<FaRegComment/>,
          Sent:<FaWhatsapp/>,
          Share:<RiShareForwardLine/>
         } ,
         {profilepic:"https://media.istockphoto.com/id/1785918657/photo/portrait-of-doctor-with-smile-confidence-and-hospital-employee-with-care-support-and-trust.webp?a=1&b=1&s=612x612&w=0&k=20&c=W1GiwVg-lhqH2mm8_hDuR_fJLskO72NDS0ebPWaDs2Q=",
          Username:'Suresh Kumar Sharma',        
           time:'2 hrs',
           icon:<FaUserFriends/>,
           more:<RiMoreFill/>,
            label:'“तरक्कियों की दौड़ में उसी का जोर चल गया,बना के रास्ता जो भीड़ से निकल गया।”',
           postType:"Image",
            postImage:"https://media.istockphoto.com/id/1443254429/photo/indian-young-woman-counting-money-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=8qjbdydWycLLMP-2xNAxTA6hZo19D_rzMZgE0VyxU5w=",
            Like:<AiOutlineLike/>,
            Comment:<FaRegComment/>,
            Sent:<FaWhatsapp/>,
            Share:<RiShareForwardLine/>
           } ,
           {
            profilepic:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAvgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQQFAgMGBwj/xAA8EAABAwIEBAQEBQIEBwEAAAABAAIRAyEEEjFBBRMiUSMyM2EGQnGBFJGhscEHJENS0fAVNGJyc5LxU//EABkBAQADAQEAAAAAAAAAAAAAAAABAwQCBf/EACMRAQACAgIBBAMBAAAAAAAAAAABAgMRITEEMjNBURIicQX/2gAMAwEAAhEDEQA/APaXePYWhBOcCmNRuh3iejY7oLswyts8IEXD0RrsU/TAp7nf6oNwWR4ndHlGV/n2KAB5PQ6+bRAigJdeUA5LVLuOiB0DxLjZAgOWeZqHbJwWnnH8kAFpLn3adEXHWfJ2QGp52w2QQKpzaBu36oFzmHp9kGXHNTsBqEAfH8tosgnnDKLRqg+J6Vu6DD7UrEaoAkPHK3G6JAHJ+0onMCxvn3KJAGU+p3QAPKHL1J0QPBsbyqX4l+JMB8N4CpXxj2vrx0UWvGdx+mw915/iP6xOFGMPwukas351YkR7WklE6l60AKJLjvoiMh5uztl5hh/6v4d1emypwiuWZgHubVBItcgRdd5wXj/DeMsdV4fi2VmsAL6ejmTpIOiGpWUSebtrCDD/ABRbLdO5Of5Nggy4h7PTGoRAI53U20IJ59hbLqgy+9OwQTnjlWI1QB8VuTQjdAqimMmU9O6LPblZId3TD2MGV4lw1sgR0Ao67okESzzjVFqXpyTvuizOtnmOoQDQIBHqobuX+pCI+f8AxOwS8wzvMPGgCA7c49WyBcnnabSm3xJdVEOGmyADVHi27bIASfUHRsgkz1emkJfIqWYNESXE0yPDO8IGZkR6aCD/AIQ6N0rg5Gjw9ygyw5aV2nc3QN0iORYbodvyfNugzT9LqB13SPh3pSSdd0DtHRHMhcN/Un4r/wCD8MFDDNeMRiGuDqwHpjuP97LuCA3rbBfuOy8T/qhxk8S4ny8PSbXog8sBvzZbEj7kqJdVjcvP8VinVKzqhzuqVLuq1HEudfclRg+YEw73H8qVWoV6Dy2ph3kNHSHC8KKyuG5pYCZgfyo3CyYmAQ0mCST37+yvvhrjlbg3EsNjMK9vMpwOsTLTYhUfNblacsdN/rOqTy5zWhjAR8sazqpRw+lPhH4nofEGEjMKeJo9OIom0HSR3BhdBuOWByzqvCfhV76PHcJXwz3gQ8OLdDEfz+690Y9xYyPI8CZFwjm9dMjY+DpugyB4OvzJmaYilcHXdI+FelJLtd1Lg3C/h+dHh/4gGfdI9Iz0zLuxTyMeA55hx1ugD4EmZnZDhy/FHVOyUckS689k8uQ8w6HZAiI8aOrsnlz+LoRslf1pEdk4znmjQDRAAc4ZndJGyPXAzdJCXrkPbIA1QfH8tovdAer4ZEAbpzm8GIHdBPN8NsCNZQSHDkjUboCcp5Wo7pel4YEzuicvhQZO6AeUMhgk6Qgf/L2HVKCOSMwOYnugRQs689ko5PU682CCm+JeNUOE8MxlcVAMUMM59Nh/zEdI/NeZ/D3BsLQwVDinE6zJrDwhUdYAb/ddT8RUW8UxmNwjWknGdD3zalTadfrYx7kKL8VVfwPDWfheF08TTpMygOvDQNNJVFr/AJRptpjjHMJQ4fhqzGPFFj2RMwCFT8d+EcBxGlDaDaT/AJXsFx9R/wDVp4E/GcMxtIYinVwlLEMFQYeo/PTc11+l2xHZdbiHUWMzPc1rRs46f6Knmq71PKcf/TnHUMO+vhMQys1tywgyR7Lk6uExWGa6nVpOY4XBXv7mF1MODg5hEgjcfbX6rnfirBYRnCMRWfQa50Q0gXJKsrlt1Ku2Gvw4DhmLNPhDnsDhUfUDRGxIv9NAvffhWviK3w1wx2OZlxFXDtNS83heSfCXw63iPHMHgWdWFpE1qzjfNEW+my9vaBTaKMDSBGy0QyZJP0BDbyg+BdvVKQPJs689kehLnXB0UqzjlDmASTsgUhU6yYJ2RApnmG4KXLNQ5wQAdAUDaCy9Yz23SALSXVLsOg1T3PPsNkv/ACensUD0Oc+n2Su45menuE5dnv6X0SIM9F6U3QEZyDSs0ajRM9fpWjXZBm3J8m8IOg5H3QBOYBtOz9ygwZY0RU7oOnhHr3SGX5fV/dAaDK71O6chgipd+x1QIgl3qoBFjVPibBACGWrXnTdABYZrXG26Qgg/iLHabI969mjRBybsO2nxPGOylrmkgX1DjmWx1NlSn4gkKL/xGnWxGLqkgNaSXHtdRn8awjaJeKxtaBqfoN1ktxPD0q7mOUirgqeNqs5zS9tN05naj2CpfielxTEsq1OHmk9rQYoubMxp/K6DCYzB1MG19KqAKtm5jBk7H3RhQOScwBmSR2XO+dyn44cVw3BY/AV6VF2JdQxDqYrMbTeXUXjcEG7D7K9+KagNDA0mNmrW8QUwYAFhP5lW7cPRrV7UwXE6qrx7mv4zXx1Ec11DJTptA8oAtYjdzifyXcTEcuNWmYiHSfB/BG8H4dkcAMTVu4x5ew/VX4IHS8eIdFqwrnOw1J1ZuTEOYCWzoVs2HMPibLTDBbvkDotVudt0AZJNa4Om6eo8fXbZAv61m7SpQLtOap5NgjK9xzMMNOl4SbMxV9MaIJqSeXOXaAgYmqPEsNkSXHI8dI0Sk1xHljdOc55cRG6BSJyR4fdO7XZG+RA//E/+yUlnhASDugZmn007g6pO8KOXc77o9DpAkOTgUNLzsgToZ1Mu8/dOIaHjz9kRyusXnZBGSawue3dARI5jvP2QIeM9SzglExWNj2T9UZzaNkA3xfUtGmy0YnENbTeKjgCGktE3KzrVAWF7xGXT3K5DjVc4fi4xeIcTRq0jTEGzHzNvqP2KnX6zJXm0Q5hnEG/iHYF7gwuqGm9z7WbYgff9Fvr8Po06g5VGnWb5g1zocPYHb2BUzE8AwHFq78bg65ZUnNrmaT3IOig8W4dXdi6Lald1DEMBOZmj2iL/AGm6w25l62Oddov4PCUajag5jix+bkVxkLR7DQrpsLjqeIwhqUrAkj2XOcR4hhMHh3065bXeRIOUSVE4bxX8U5mCwTHkudldk1J7/soiJmE3msOtFeWPp0nTVeQy23dXHB+D1KVc4iu0ZRBZTOpgQLbAKbwPhbeF4Nhqsa/EPu9xAkK0jIOaBPstFcf2w38ieYqYaIL/AJ+yG9YL3WeEBoMVdDrCPU8U2j5e8K5mDfEEvsRpsgTUMVLQlHPuREI9ex6Q1ACXSyp5RujmOb0sbLRoYTnmnlm0I5nL6AJDfdAOPOsy0JTnHLFnBMnPah0nuEEg9NOz9ygJB8EajdEhg5XzG0/VIx5NavdPyjK+9Q6FAh4MNdeUwOT5rl1kSGWrXdssKlQYdhfXuNhqmtnDP0usyQdlg6pTpvD3vb3ibquq4+qZDYA2BuoYJf1GZJi53/3Kurhme1c5PpZO4izmy1jvvaVDq42tVcXF+X2atWbtqsRABtoSra46w4m0yxqYh7+tz3OBOUg91BxzGcQoPw9U+e7SdW9iFurQW1mnQnT7LWA7CUueaT6z2xna3zRvA3TNeuOnLrDS178KylwHFYCmzFcNxxq1gBzKb4DKw3A7HspPF8A/j3A3Mo/22MF6ZePTeNJ9jp91ZYbD08xxGHc9oqCX0/ld7wdCpXLAfm2i/wBV5HfL1Zn4eZ8Y+F3UOB4V+Jr1auONUMc6YYxoBkR9QO6uv6e4Wjg8e3lUc7mDrqxZvsPdXXxTTe/D4WjTLGmvXDQXuAGaDGupOywwFSngaQw+CAc6bvJnO7vPb3Wzx8M35npmz5orGo7dsx7WDPmDg7SDKcZDzD5XbLmsDifwmI6H5qY6XN1Dl0VKoHMFQkmmduysvj/BmrfcM4k875dYTtUPMFgNvoiDOYHw+3ZIiYfTMUxqBuq3RnxrttCR8YZW2hM9XpWG8InNajY7wgJFSGCzhv8ARAqNp9BaSRuiQ4RTs/dAdTaIeAXb2QBiPBudwEHQcvz7hBApjwuo77os3rYJcdWoFAyyI5u4TbES+1XaURYPmanZKM3W/wA+zUDaZB51nbSqjHYh1SqSTZpgKzqGaTn1Blc0SAufqOMnNo6J9irsNdztXkltaRDSNDcLXSHU8To4pUnXc3aMzf5/VOmLH/uK0Km03BOhWppOV31n9Fm91j9LrS6WAj2CmBA4jVyjpMEvaE+G4ueYC5zwxwuTJvNv0UTjObJTI15rVD4bWGG4hFS1Op0n27KPIxxfFP27wZfwyQ7Ck0EZhusni30WrDv8MCbbLadCvHjp6cq/jVAYjBCmIziq17XO+WJkj3iR91HwlCnQgMaO5duVNx96dMjZ0fuowdFS3aV6vi+283yfcKh11qIAHTmeb+9lZ0cQ+mzMwy02IKrcK3JmdOov9AJ/cqThSThmT8wJ/VWXjaqvC6wuNZWLaZhlrt2UmIIDBFPdUNmi+19VY4PFEhtFxlpsCVmvj1zC6t0029G43hNxt4N3bpHw45fUDrN4QRy5NISTqFSsN0a07v3hAFMgc0jNuiAzqp3cdWoDGO6nuIcdROiAjkXmZ+yUcvxZmbQmByru6p7IjIc5uDsgIia15PypRn8XSNkRfnEyOycZzzAekXj6IIPFsUG06QiH1SWD7Cf4VMXB5B+V1x/orHjo5raLmWexxcB3tB/MGFTZ3U3GoJLdXsi4/wCoLZhj9Ge88t2YMLCSBfKZWyi6zgP85H6rSSDTm1RhF+zmn3UbBVHUnvpVJJbUHUfnBAh33/eVbpxtYgiNdUniQsH6DutjfKFylVcXp+Bm/wArw78iqPilL+3qOGoa4rqcZTFWnUaRIiFRY2nmwdQlptScD+SupPGnFuGn4S41WrUMNRxRLqj6bDzDq4xefddm8wBPZebcOBwgwjmiC0s/gL0CnXOIpMqNFz5l5XmY648nHy9Pxrzkpz8Fib0nxsM35KJTLXl9QnoEtBH5lTHakHcKJhWAUmMgZWC47kK3wrfrMSq8yv7RLaWHl1RYODYI7bkLfhCfw1MkXLQYUbMSzIDD3v1WdeoczcLS8xHUf8rf92WuY3DJDYDzjmHpNMAn5j3Umicrh/K0SzI1rSDAgQFnRa8kAEXN5XMphesfy2NtOcSZss/QOacwcsafgMDT1EhZDwbu6p2WGWkRy/EHVKOUKvXME7JRyjnJkHb6o5RqdYdAN4QAlg8a42GqcEOzVD0HRIX/AOY+0o38T09kDGofpS7SldxzMtT3TvN/SWLzlBLfSi/8oKjiTw+u7Lo2w9lCDQ+XNHWNVte7M4mNSsS0tPMYJ7j2W2kahmnmUVv9pVyPvh6h6CPkd2+h/f6qDjiKGPwrXDoquygjfcBXD20y0h7Q+m4XaeypuOtNDBZ3EuZQqMqMcdWwe/t+yupPLmYW7WioCHAn3lbGNAEBaKLhkkaFbKbxpImJhcSmGb6dpVNjaP8Ab4hnYO/ZXDgFXcSAFKqRbMw391NCznquHeyphm1GZXE0zH2ldbw9gp03NC5fE1HOxlHM4ucSI9hsF1GGcAAO4lef5+/zj+PQ8L2519s69iCoWKqtw1N9Q+VtwP4U+r1U5VNxyjVxFLDcowMxbUIGm4P7rjwray6npPl13i3Hw28NrvOHdi8RTgmWsYDM3UnD0cmZ9eo6pVeZc0Hpb2AhHDwKjGOygUabctJnt3U1zjHTSJ916dp5edDSSe8DsFJwkAFxNu5UYurO8tAC/mjRS8LSe97WnQm4JuuL9JjtdjptV12m6QGSecZB0TFxNfXYFIX9fy7SsLSYljpqGWbILajjmpyGnS6ASfUtT2lLxB6Y6NkDaedIfoOyCc7uWdAhCBE9fJgZf1WrHeHhqjG6ERP1KaFMdwienPF7sxupDepjXbk7IQtzNDCcptvdRMdSY+liKTxmYabgQfcFCFNfUlC4DVfV4Lg31DLjSZJ72W5xIrtcDeYQhdS4T9SAd1W8VP8AZVB3shCU7TbpTOaPx9P6MP7ro6R6m/8Aakheb/oe7H8en4PtT/UundplR67G1KFWm4dMG3eEIWXH7kLr+iWzCnLSaAtjmyR1OH0KEL2Z7eOy5QkElx+pVjw1oGdw1aLIQq8vpdU9Se3xRLrEGLIb4zi1/wAukIQsjQTPFlj9B2RzXMJaAICEIP/Z",
            Username:'Manoj Kumar',        
             time:'2 hrs',
             icon:<FaUserFriends/>,
             more:<RiMoreFill/>,
              label:'“एक दिन वर्षों का संघर्ष , बहुत खूबसूरत तरीके से तुमसे टकराएगा…”',
             postType:"video",
              postvideo:"https://cdn.pixabay.com/video/2023/08/28/178065-858860117_large.mp4",
              Like:<AiOutlineLike/>,
              Comment:<FaRegComment/>,
              Sent:<FaWhatsapp/>,
              Share:<RiShareForwardLine/>
             } ,
             {profilepic:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV8yN19yZWFsaXN0aWNfcGhvdG9fb2Zfc21pbGluZ19oYW5kc29tZV95b3VuZ19pbl8xNWExMTE1ZC0xZTBiLTQ4YjAtOGEyNi01ZDE1ZmE3Njg2MzYucG5n.png",
              Username:'Ashok Kumar',        
               time:'2 hrs',
               icon:<FaUserFriends/>,
               more:<RiMoreFill/>,
                label:'“तरक्कियों की दौड़ में उसी का जोर चल गया,बना के रास्ता जो भीड़ से निकल गया।”',
               postType:"Image",
                postImage:"https://png.pngtree.com/thumb_back/fh260/background/20240106/pngtree-coloful-nature-beautiful-scenery-image_15576031.jpg",
                Like:<AiOutlineLike/>,
                Comment:<FaRegComment/>,
                Sent:<FaWhatsapp/>,
                Share:<RiShareForwardLine/>
               } ,
             {profilepic:"https://banner2.cleanpng.com/20240328/lwl/transparent-cartoon-man-man-with-beard-turban-sunglasses-blurr-man-in-turban-and-sunglasses-with-low-resolution-b66056cae457fd1.29171622.webp",
              Username:'Sita Ram',        
               time:'33 min ago',
               icon:<FaUserFriends/>,
               more:<RiMoreFill/>,
                label:'“एक दिन वर्षों का संघर्ष , बहुत खूबसूरत तरीके से तुमसे टकराएगा…”',
               postType:"video",
                postvideo:"https://videos.pexels.com/video-files/8416261/8416261-hd_1920_1080_30fps.mp4",
                Like:<AiOutlineLike/>,
                Comment:<FaRegComment/>,
                Sent:<FaWhatsapp/>,
                Share:<RiShareForwardLine/>
               } ,
        
    ],
}
const MainFbContant = () =>{
  
  return(
    <div className="fbmain_container"> 
    <div className="uper_post_container">
      <div className="img_label">
        <img src='https://s.yimg.com/uu/api/res/1.2/GltCSVd7bZm2_I0xxRQ.qw--~B/Zmk9ZmlsbDtoPTIwMDtweW9mZj0wO3c9MjAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2023-09/210e82a0-5e14-11ee-93bd-e80525011260.cf.webp' className="img_label_img" alt=''/>
        <input type='text' placeholder="what's on your mind,Josephre?"/> 
      </div>
      <div className="label_icon">
        <p><IoMdPhotos/> <span>Photo/video</span></p>
        <p><FaUserTag /> <span>Tag friends</span></p>
        <p><MdOutlineLocalActivity/> <span>Feeling/Activity</span></p>
      </div>
      </div>       
      {fbPostObj.mainPost.map(ele=>(
        ele.postType ==="Image" ?(
        <div className="Post_container" key={ele.Username}>
          <div className="Post_heading">
            <img src={ele.profilepic} alt='post' className="profilepic"  />
            <div className="post_heading_details">
              <div className="post_heading_name">
                <p>{ele.Username}</p>
                 <span>{ele.time}</span > &nbsp; <span>{ele.icon}</span>
              </div>
              <h4>{ele.more}</h4>
            </div>
          </div>
         <div className="video_img_container">
          <label> {ele.label}</label>
          <img src={ele.postImage} alt='postImage' className="postImage"/>
         </div>
         <div className="post_like_container">
          <p>{ele.Like} <span>Like</span></p>
          <p>{ele.Comment} <span>Comment</span></p>
          <p>{ele.Sent} <span>Sent</span></p>
          <p>{ele.Share} <span>Share</span></p>  

         </div>
        </div>
        ):ele.postType ==="video" ?(
         <div className="Post_container" key={ele.Username}>
          <div className="Post_heading">
            <img src={ele.profilepic} alt='post' className="profilepic"  />
            <div className="post_heading_details">
              <div className="post_heading_name">
                <p>{ele.Username}</p>
                &nbsp; <span>{ele.time}</span > &nbsp; <span>{ele.icon}</span>
              </div>
              <h4>{ele.more}</h4>
            </div>
          </div>
         <div className="video_img_container">
          <label> {ele.label}</label>
          <video controls loop className="postImage">
          <source src={ele.postvideo} type="video/mp4" />
        </video>
          
         </div>
         <div className="post_like_container">
          <p>{ele.Like} <span>Like</span></p>
          <p>{ele.Comment} <span>Comment</span></p>
          <p>{ele.Sent} <span>Sent</span></p>
          <p>{ele.Share} <span>Share</span></p>  
             
         </div>
        </div>
        ):null
      )
      )}
    </div>
    )
  };
export default MainFbContant;
