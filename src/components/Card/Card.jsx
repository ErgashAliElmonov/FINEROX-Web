import "./style.css";
export const Card = ({ url, script, title }) => {
  return (
    <div className="card">
      <img src={url} alt="" width={"300px"} height={"150px"} />
      <div>
        <h3>{title}</h3>
        <p style={{color:"#c3bcbcff"}}>{script}</p>
      </div>
    </div>
  );
};
