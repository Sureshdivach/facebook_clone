import "./mainContact.scss";
import { FaSearch } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
const BirthdayObj = [
  {
    birthdayName: "Sohan lal",
    bdImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTno-Dyg_cjGMntFC7rnVbjgbPadhd2UK4GFmlaqQPrDfTmsrHFknpLHStLIVUPYBqqq0U&usqp=CAU",
    type: "Image",
    label: "Happy birthday to you .............",
    birthurl:
      "https://cdn.pixabay.com/video/2023/01/15/146578-789534197_tiny.mp4",
  },
  {
    birthdayName: "Manoj Kumar",
    bdImage:
      "https://images-platform.99static.com//syUUBXWPuntRp-CG7bhwjByZIMg=/0x0:1080x1080/fit-in/500x500/99designs-contests-attachments/127/127807/attachment_127807231",
    type: "Image",
    label:
      "तुम्हारी राह का हर पत्थर फूल बन जाए,खुशियों के बादल झूम के बरस जाए,जो मांगा है तुमने रब से वो तुमको मिल जाए,जन्मदिन की शुभकामनाएं",
    birthurl:
      "https://cdn.pixabay.com/video/2022/02/27/109035-683077189_tiny.mp4",
  },
  {
    birthdayName: "Ashok Kumar",
    bdImage:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAtQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAYFBwj/xAA8EAABAwIDBgQEBQMDBAMAAAABAAIDBBEFEiEGEyIxQXEyUWGRBxQzUkKBobHBFSNigtHwcnOD4SQlRP/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EAB8RAQEBAAIDAQEBAQAAAAAAAAABAhEhAxIxQTIiBP/aAAwDAQACEQMRAD8A9wVaq8Y7J/mHH8ITtHzHE42tpYIBRfVb3VxAMQjBeDe2oUfmHD8IQRn+sU9N9Q9lNsQlG8Ohd5JFu4GdupOmqA9+SouBzHui/Mu14QpfLtOtyLoFS8nd0V/hPZBcdxa2t/NNv3P4S0WOiAPRWqf6ab5ZvLMVkPihX1eGbLyCgn3MksjYsw0cQ69wEOHZxjafBcMDmVmIwskHNjXZnewWVd8UdnbloNS7W1xGP5K8NfFO++e/PUk/uiR0EuTMbN6KOV/V7/hfxL2erqiOm3stO95ytdMwBt+4K1s7muja4OBHMEHovlQ0UgcBm7ZT1W6+G+3Bwar/AKXjMsxoZXAMkeb7h3n2P8JKi54e1gG40KvdEFsDNHNdccx6ofzB+0WUqnqfEOyhD9RvdEawT3c7Q3tonMYiBcDew6oDqnN9R3dT+Zd9oUhEJBmOl/JAAD0SVj5Zv3FJADdyfYUaA7tpD+HXS6OeSrVXjb2QFke1zC1pBJGgCrmN9/CfZKH6je6uDkgFE4Mja1xsR0KaYh7LMIcb8ggz/WcpU31D2QQ3b/tKtCRgABcPdTVF3iPdAab+5bJxW8lBkbw4EtNgiUvJ3dFf4D2QNvGfcF5t8VoxiWKYLhkb+KRzpXkHRrBzPdb3osPtq+GPajCJHTxtf8vKHNLgDluLfv8AoovxbHHtOWfh+G1DUtc51VNxcxfRdOk+GeDx5TNJUSuH+dgVo8IqIJW2injcfJrgV1A8NNyQPUlctt/XdxmMrLsJgkcRYymA4bAnmvJ9oMJNFW1NM4guizZHHmQvfK6qhbAXiVhAPPMFgMQ2UmxfGTO5zafK4E5zfOOtgExfW9o3n2z1HqGAVYqcDw+d5AdJTxkj/SEXdP8AtKpUssUbIoImZI2tDWDyA0XZXVNS/HFrNz9ChIY0h/Cb9U8jmuYQ0gkjkEOp8Q7KEP1W91Kpt3J9p9lYjc1rAHEAgciiqnN9R3dBaEjPuCSpBOgmJpPP9ESICVuaQXKhuH+nupxncDK/mddEEnRsY0ua2xGqDvpPu/RFdK2QFjb3OgQ9w/090BGMbI0OeLuKaVoibmjGU3tdOyRsTQx17ga2TSOEwys589UA99J9w0RxFG4XLdSgbh9unujCZgFjfRBCX+14NLqDZXucATcHmpyf3gMnTndRELmkONrBAbcx/avNviHhkB2kpqqNgimNLZspFwXB4sLcuV/dekb9l+vssnt+IRTUlTM0OiMu7dm9R/6VdWydL+Pj27eb7TYXiETG1s1VldbJG1kbY7uPhAym9ybK9UbP1sdc+gkr56gzU8czJKkmU25Pa3XQggHs4KcuK4XHWHJTyTCnsDlu9wN9eZ/Zd+pxfDMWZEzcyNY3wTOY5pjdbp1Cwu9cdu2eOW9PPNo8EqsNoHS7wAOOUZA9hvfTnz/Ja3BMQtgwnhfPxubFJPvA58PTrzUMbfhc+EzvBc6aMFuZ87n5T6Bx0VT4cxb7CsSMt9xJLYA8rtaP9wolukzjFbLZeHFaaKpocak3k8En9uUNtmadQ6/Vaeir3zNc0njj0K4OzD5nUQkqJXySOc67nm5t0C6+F07t7VFttXj+VfHWumPmn+e3UiAlbeQXcNE742sbmaLEapmOEIs/mddE7pGyAtbe501W7kC30n3fojNY17Q5wuTqhbh/p7ojZGxgNde400QS3Mf2JJCdnr7JICHlyVar8Y7IYe6/iPujU/E0l2pv1QBh+o3uro7IcgAY4gAGyrF7r+I+6B5/qu7KVL9Q9kaIB0bS4XPqoz8LAW6G/RAZUHniPdOXut4irga2w0HJAKl5FGf4D2QKjhy5dL+SGxzi9oJPNAO/Vc/afCHY3s3UUcJtP9SEnlnbqPfku/lbfwj2VadxbJZulvJCXh4Xs18rUVcsldA2PEaSUiQPF7DQEEcui1pkwzEqZ8LWwBpHFliINvMHosltRTS0e01VX4e1zw+QmaNo5m51HmubNtZVOppaaGklbI/QcBaGn1usNTnp343xnv6pbS4hTw1slDhkdorgEA3LiNPe69Q2KwiWl2FgdGzNPv5JJGdXBwF/2C8u2cwyR2JGedueQuu420C942KBZh26ewBuYllx0Vs/16xjvmZ965WAVnDuHjLrpfutPQzRwyuY4gZ7e65W02E7oHEKJtnN1kY0c/8AJGwqB+JUkU9Q0xtI5DQlPWzXSdbzrHbs1Xib2UYfqN7o7GtbodfIlPKAGEgWNlq5RFTm+o6+gumzu+4+6sxNBY0kX06oKgI80leDG/aPZJAD5a340rin4bXvqj3HmFXqdXNI106IJb0ScFrX0um+W/zQ4gRI0kaXVsEW5hAHebrgteybMJ+CxbbW6hMCZSQLhPT6PN9NEEvlv8v0T78N0yk20ujZh5hUnA5joeaA5/v6+HKm3GTizckqchrXF2gv1VepxFjSWQDOfPoFMlvxFsiwakAXNgPO659XiMNzu+J1rKnIZZjd7j2CGYAGnz9Vrnxz9Z63WfxbZ51QX1NJ4nEuMfr6H+FnWYPLWVJp20rmyt8VwB+60e2eNy4LsvW1FI8CqI3UJH4XnqO2pXjGA4/WYXjmHV3zM8gZKN4wyEh0ZNnXv6Eqvk8ObeW3j/6NTPD2TCdlYaKVstQQ532N5D/da+n4MrWixHULnS1bM8bIeN8ouy3QeZV2nNgGkknqVeePOZ0xvk1ruuo2ckFj2h1xrbyUKJ7d1uQeKLS3p5oGcBpA1HX1VWqEkQZU0xs9hsQfxBV9U+ztjUIRma+R0N7Py3Nx081GCYTQtmHJw9lNwa4ZiNRyPkqWJlL5b/L9E+93XBa9tLorXAqtMCZHWHVVXEFSOjUkCx8ikgbX/hVil8Bt5rP4xXVdDXOjYWiOwLLhVY9oKyMWBjIPm1TwNdL9N3ZU/f3WfO0dYWkFsRB/xUP6/UX1ZH7JwNdB9Jqap+mO6y7NpqhrQBDHYd0Rm0znyMbUQtEZdqWnUJwO0ded1eb4R2QWwsc0EEkHqomZzTa3JQKeIzl1RuAeFrbn1KrtZYaIUr71Ukp/FIQrA8NwuiTiMbeajkv1S3Tba6oo1CYoM7tTDTQ4ZNUTxtc2na6YB/hGUE3K8j+G9JTYhjlRTVMTH7+C7Wu5DXiH6r0H4v4l8ns2+nYeOscILX/Dzd+i832DqPltr8Lf0e4xOPoQf5slpI9xp4GwsyQtaCABcao4dk0H5qZFmADT0QSLXPmrK8Db3QNujCVp4Tytb8lzHSWdbyQ6ioLGWDrPecrVMyi12cJlDTJS30HEzXn5rog3YsrHI6J7XxniadD5rQ01ZHUMa5o1PMeSz1ntbOlsgOGqJHYNA6hDaQdEtWm6yrUdJVt+8H8JSVVnJ2pgbNSsnZlLojY+dj/wLKlbiWMSxujd4XCxWJqI3QTPidzYSFaCCYprpiVKDk6KN/VMkg3Gzlc2fDI2yOs+LgP8K4YnlxOU81kdm6ndVhhceCUW7Hotwzwjsq2JZKaoDJ907mZz+q6EL7h7PJcbEbGpe61nCQm/Y6K86S+SZhsCAV0/jn/XRj8ITkahCikB9EVx0J6gKqzxT4012+2hoqBrrtgg3rv+pziB+jf1XB2JZn2twhoF7T5vZp/myDtnW/1HbHEp9S1km7ZfyaLfuul8MITPthTO6Rtc4+ij9We7EX5gIE3A0lW7aKpM0vfa12hWilUgwg53fksztLihpK+hY15Aa/M8DrotZUWjY534YxfuvNdopHSVwkdrZwWsZ1sqSuZU8TCC02yrs0c+7On6LObBYU6u3zZXubDEwAZTbU8v2XfrsNqKE5jcxjk9vTuqe2beF/Wycu7TVAeArWa4WWjrWxMzZh/pdf8AdW6bEqitAZTQud/lbRZ6i8rtNDpNWg6aJI1JCYIGscczvxH1SWNrSRPdR9GrK7V0bYaiOeMWbILHutRv2eqoYtTf1Gie1g1aLtHqEiWFJSUTy1Fj5JBWQdNdOFEuGYC49UBInlkjXt0cwhwW9pqt09PHMx3C9oKwI0Oi0uy8+8p5acuGaPiaD5KKKNXxbw9cxN01FNnidETxNKUp/tyl3dZ2sxL5Gphc1wzSSNZlPW66szmOe3itrG4ina7qNCnxWoFPhs017ZWH9kCjkE1PIBzIvbyK5u19QY9lK6QWuyCRx/JpP8KnCz58kn38801753ueD3N1vfg3BvNoppLaRw39yvOodAGjlyXqfwWZ/wDZ17h0iYP1Kp+rvXHeHRDcwNb6lHAtqeiG7qVdSuVizslKGDm7msBi8WZzjbkQVvMR/uPcR4W3AWZq6UyTW8/NWlVrS/D0GPAi9ruJ0hBPbRahj3SODHm7TzFua4+ydC6DCGgCwfI54B8iV2hGYyHnkFza/p0ZnQMmDYfI7M6mYevMgKekH9uIBjG6ANHJG37PVQMZkJcORVeUoCV4HiSU9w7090kARzVim8B7o2UeQ9lXqCQW2JAtyCDE7Q0nyeJSBvgk42/muaCtzWYfT4lu21IJynRwdYhVJNkqV30qiVnoQD/srSjIl2ULLYpjr209UadgEjXixtqOy7+3rZtn2NjjcTcZmSW0dbp6LJzPZPS1RkYWmoja8aa3F7/ust6dnh8fE5rWUdVcsimIbM5gfluCuvhtU6kqRI3kWlruxC87p5/lMTw2rnkYyOWENcXOtYEAi/sFu6eRk7WuikZIDyLHB1/ZXxrlz+XPGull9cC12enmER0MmXRYTaWuhhlyQ5pJGPDm2GgIN+a19V/VpHSilpWzQtDbu32Ui/oVm6zAq17pHSsngHN4bO0tHX9gV243nhwbzpusNqNYp2+CVgJ/NB2wg3uyuMRNP/5pbfmwqns/VjEMOjloy2enF2tkB00NrXuurUOlko5oZKfMJIy05XXvpZZ2zlpJXzfERoV6v8Eh/wDMxL/txn9SsSdgto4QGsoDIG6XDxqvQ/hPhOIYTW1oxKkdT72NgZmIOYgm9lSL16cdT6IM7sjCfyCNezbqtKN5IGDkNXKyqjUR5YsvU6rmMhaa6EOaCDI0EHuu1UAOf2QMOia/E4g7kHX9lF+In1paQAR2A0BsESb6buyBUHK8WuNOmijE4l4BJIv1KwboK5D9NvZSyjyHsqsxIkcAbC/Q2QWwkqIcfuPukguZkCXjyuPP0SSQRYLSNVjMkkg5uK0FHiIMVdTRzsBuBIL2XnG1mDUOF4lBDRRbuMsLg2+gv5JJKm23htYHGI2zUJEnEIzkaD5KL3mn2dhihAY0yl3Dpryvokks46PJHNFbWOErHVlSQ0i15XHp3Uoq2qdG4meThBI4ikkuzPx52/olPUzyRSl80hI1HEULGJ5mYTLMyWRsmgu1xCdJTURlm4jXNIy1tQP/ACFeu/BKpqJziJnnklLGx5TI4utqeV0klTK1euhxOQJodQ9x5lJJasldw4SeqHR8OJQEfckkovxafXfl4nAnyUYxaQJJLBqs31VeUXkPdMkgYNSSSQf/2Q==",
    type: "Image",
    label:
      "खुदा बुरी नज़र से बचाए आप को,चाँद सितारों से सजाए आप को,गम क्या होता है ये आप भूल ही जाओ,खुदा ज़िन्दगी मे इतना हँसाए आप को...Happy Birthday",
    birthurl:
      "https://cdn.pixabay.com/video/2022/04/26/115201-703528267_tiny.mp4",
  },
  {
    birthdayName: "Manish Kumar",
    bdImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkhRaS_zu-ZI5Sf3G05Zv4QqXbQVn3HiS-Hcfcd4eK9pZ7LmDTQM-611j9LUYIf20zgw&usqp=CAU",
    type: "Image",
    label:
      " प्यार से भरी जिंदगी मिले आपको,खुशियां से भरे पल मिले आपको,कभी किसी ग़म का सामना ना करना पड़े,ऐसा आने वाला कल मिले आपको।...Happy Birthday Friend !",
    birthurl:
      "https://cdn.pixabay.com/video/2022/06/24/121983-724732202_tiny.mp4",
  },
  {
    birthdayName: "Mohit",
    bdImage:
      "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149659.png",
    type: "Image",
    label:
      "खुदा बुरी नज़र से बचाए आप को,चाँद सितारों से सजाए आप को,गम क्या होता है ये आप भूल ही जाओ,खुदा ज़िन्दगी मे इतना हँसाए आप को...Happy Birthday",
    bi65rthurl:
      "https://cdn.pixabay.com/video/2018/01/25/13937-252799112_tiny.mp4",
  },
  {
    birthdayName: "SitaRam",
    bdImage:
      "https://images-platform.99static.com//syUUBXWPuntRp-CG7bhwjByZIMg=/0x0:1080x1080/fit-in/500x500/99designs-contests-attachments/127/127807/attachment_127807231",
    type: "Image",
    label:
      " प्यार से भरी जिंदगी मिले आपको,खुशियां से भरे पल मिले आपको,कभी किसी ग़म का सामना ना करना पड़े,ऐसा आने वाला कल मिले आपको।...Happy Birthday Friend !",
    birthurl:
      "https://cdn.pixabay.com/video/2023/09/25/182283-868067131_tiny.mp4",
  },
];

const contactObj = {
  heading: "Contacts",
  contact: [
    {
      id: "1",
      image:
        "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg",
      name: "Hament",
    },
    {
      id: "2",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/l0fm07k0/poster/s/a/o/medium-baby-boy-with-little-cap-on-fine-art-paper-hd-quality-original-imagc88wqzkjke7z.jpeg?q=90&crop=false",
      name: "Ramsingh",
    },
    {
      id: "3",
      image:
        "https://cf.ltkcdn.net/baby/images/orig/273163-1600x1066-welcome-baby-boy.jpg",
      name: "Ramesh Kumar",
    },
    {
      id: "4",
      image:
        "https://www.shutterstock.com/image-photo/just-beautiful-cute-smiling-baby-600nw-2208761477.jpg",
      name: "Rajkumar",
    },
    {
      id: "5",
      image:
        "https://cdn.shopify.com/s/files/1/1993/5303/files/baby_boy_x800_463fc242-ab78-4648-ad41-af7d49edfa62_1200x.jpg?v=1703588443",
      name: "Manish Kumar",
    },
    {
      id: "6",
      image:
        "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/477124c3229f4d8d90a53f57dbdaeaef.jpg?imageView2/2/w/500/q/60/format/webp",
      name: "Rajendra Singh",
    },
    {
      id: "7",
      image:
        "data:image/jpeg;base64,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",
      name: "Surya",
    },
    {
      id: "8",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/027/018/173/small_2x/cute-little-baby-relaxing-in-bed-after-bath-smiling-happily-created-with-generative-al-technology-photo.jpeg",
      name: "Yogesh Kumar",
    },
  ],
};

const MainContact = () => {
  return (
    <div className="mainContactchild">
      <div className="sponsored">
        <h3>Sponsored</h3>
        <div className="spondetails">
          <img
            src="https://media.gettyimages.com/id/sb10061750w-001/photo/slice-of-pizza-white-background-overhead-view.jpg?s=612x612&w=gi&k=20&c=5io9yLYpB1rdd41vCAcqvJbBoKH5d_FjeNXwxvRilVE="
            className="pizzaprofile"
            alt=""
          />
          <div className="pizzcontent">
            <h5>Lebo's Pizza</h5>
            <p>
              this is the full, unaccelerated record of the World Giga Pizza
              Eating championship held at the Beer Festival.
            </p>
            <img
              src="https://b.zmtcdn.com/data/pictures/chains/9/18438909/51fbbb10b71a1999349f8801cad928e4.png?fit=around|960:500&crop=960:500;*,*"
              className="pizzaimg"
              alt=""
            />
          </div>
        </div>
      </div>
      <p>
        <button
          class="btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseWidthExample"
          aria-expanded="false"
          aria-controls="collapseWidthExample"
        >
          <b>Birthdays</b>
          <br />
          <img
            src="https://img.icons8.com/?size=48&id=kLORTzuNOM2d&format=png"
            alt=""
          />{" "}
          <span>
            {" "}
            <b>Sohan lal</b> and <b>5 others</b> have Birthday today
          </span>
        </button>
      </p>
      <div>
        <div class="collapse collapse-horizontal" id="collapseWidthExample">
          <div class="card card-body">
            {BirthdayObj.map((ele) => {
              return ele.type === "Image" ? (
                <div className="birthdayCard">
                  <div className="birthdayprofile">
                    <img src={ele.bdImage} alt="" />
                    <p>{ele.birthdayName}</p>
                  </div>
                  <label>{ele.label}</label>
                  <video autoPlay muted loop>
                    <source src={ele.birthurl} type="video/mp4" />
                  </video>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
      <div className="ContactDetails">
        <div className="contact_head"> <h4>{contactObj.heading}</h4> <span> <FaSearch/>  &nbsp; &nbsp; &nbsp;<HiDotsHorizontal/> </span></div>
          {contactObj.contact.map((el)=>{
            return(
               <div key={el.name} className="contact_list">
                <img src={el.image} alt=''/> &nbsp;&nbsp; &nbsp;
                <span>{el.name}</span>
               </div>
            )

          })
        }
      </div>
    </div>
  );
};

export default MainContact;
