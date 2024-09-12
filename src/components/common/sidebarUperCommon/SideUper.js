const SideBarUper = ({ UperArr = [] }) => {
  return (
    <div className="list_container">
      {UperArr.map((el) => {
        return (
          <li key={el.id}>
            {<img src={el.image} alt="" />}
            <p>{el.label}</p>
          </li>
        );
      })}
      
    

      
      <div><button>See More </button></div>
   </div>
   
  );
}
export default SideBarUper;
