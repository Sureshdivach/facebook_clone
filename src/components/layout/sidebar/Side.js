import "./side.scss"
import SideBarUper from "../../common/sidebarUperCommon/SideUper"
const DownObj={
   Down: [ 

            {
                id:"1",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTno-Dyg_cjGMntFC7rnVbjgbPadhd2UK4GFmlaqQPrDfTmsrHFknpLHStLIVUPYBqqq0U&usqp=CAU",
                label:"Sohan lal",
               
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
]

}

const SideBar =()=>{
    return(
        <aside className="sidebar">           
            <div className="uper">

            </div>
            <div className="down">
            <SideBarUper UperArr={DownObj.Down} key={DownObj.Down.id} />
                </div>           
        </aside> 
    )
}
export default SideBar;