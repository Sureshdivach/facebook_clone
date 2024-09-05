const SideBarUper = ({ UperArr = [] }) => {
  return (
    <div className="list_container">
      {UperArr.map((el) => {
        return (
          <li key={el.id}>
            {<img src={el.image} alt="" />}
            <h3>{el.label}</h3>
          </li>
        );
      })}
    </div>
  );
};
export default SideBarUper;
