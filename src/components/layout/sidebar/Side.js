import "./side.scss"
import SideBarUper from "../../common/sidebarUperCommon/SideUper"
const DownObj={
    heading:"Shortcut",
    icon:"...",
    Uper:[
        {
            id:"1",
            image:"https://s.yimg.com/uu/api/res/1.2/GltCSVd7bZm2_I0xxRQ.qw--~B/Zmk9ZmlsbDtoPTIwMDtweW9mZj0wO3c9MjAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2023-09/210e82a0-5e14-11ee-93bd-e80525011260.cf.webp",
            label:"Igor Bonifacic",
            name:"Igor Bonifacic",
        },
        {
            id:"2",
            image:"https://img.icons8.com/?size=48&id=19605&format=png",
            label:"Watch",
            name:"Watch",
        },
        {
            id:"3",
            image:"https://img.icons8.com/?size=80&id=LfiDJXxVCKY9&format=png",
            label:"Events",
            name:"Events",
        },
        {
            id:"4",
            image:"https://img.icons8.com/?size=80&id=LhFkuELDy2Il&format=png",
            label:"Frienns",
            name:"Frienns",
        },
        {
            id:"5",
            image:"https://img.icons8.com/?size=80&id=nn8TO8scfhGB&format=png",
            label:"Memories",
            name:"Frienns",
        },
    ],
   Down: [ 
             
              {
                id:"1",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTno-Dyg_cjGMntFC7rnVbjgbPadhd2UK4GFmlaqQPrDfTmsrHFknpLHStLIVUPYBqqq0U&usqp=CAU",
                label:"Sohan lal",
                name:"Sohan lal"
               
            },
            {
                id:"2",
                image:"https://images-platform.99static.com//syUUBXWPuntRp-CG7bhwjByZIMg=/0x0:1080x1080/fit-in/500x500/99designs-contests-attachments/127/127807/attachment_127807231",
                label:"Manoj Kumar",
                name:"Manoj Kumar",
            },
            {
                id:"3",
                image:"https://cdn.vectorstock.com/i/500p/53/42/user-member-avatar-face-profile-icon-vector-22965342.jpg",
                label:"SitaRam",
                name:"SitaRam",
            },
            {
                id:"4",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1-tiy7YDb83_KFy-AySQBYfkuEAN75tg5Q&s",
                label:"Mohit",
                name:"Mohit",
            },
            {
                id:"5",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkhRaS_zu-ZI5Sf3G05Zv4QqXbQVn3HiS-Hcfcd4eK9pZ7LmDTQM-611j9LUYIf20zgw&usqp=CAU",
                label:"Manish Kumar",
                name:"Manish Kumar"
            },
            {
                id:"6",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTno-Dyg_cjGMntFC7rnVbjgbPadhd2UK4GFmlaqQPrDfTmsrHFknpLHStLIVUPYBqqq0U&usqp=CAU",
                label:"Ashok Kumar",
                name:"Ashok Kumar"
               
            },
            {
                id:"7",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTno-Dyg_cjGMntFC7rnVbjgbPadhd2UK4GFmlaqQPrDfTmsrHFknpLHStLIVUPYBqqq0U&usqp=CAU",
                label:"SevaRam",
                name:"SevaRam"
               
            },
           
           
]

}

const SideBar =()=>{
    return(
        <aside className="sidebar">           
            <div className="uper">
            <SideBarUper UperArr={DownObj.Uper} key={DownObj.Uper.id} />
            </div>
            <div className="down">
              <div className="heading"><h2>{DownObj.heading}</h2><h2>{DownObj.icon}</h2></div>  
            <SideBarUper UperArr={DownObj.Down} key={DownObj.Down.id} />
                </div>           
        </aside> 
    )
}
export default SideBar;