import "./mainstory.scss"
const MainStory=({StoryArr=[]})=>{
    return(
         StoryArr.map((ele)=>{
        return  ele.storytype==="video" ?(       
        <div className="story" key={ele. username}>
        {<video src={ele.storyurl}/>}
        <p>{ele. username}</p>
        <img src={ele.userPic} alt=''/>            
        </div>
        ):null;
    
    })

        
    )
}

export default MainStory;