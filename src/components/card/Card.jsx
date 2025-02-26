function Card({ imagesCard, titre, current, previous, textePeriode, bgColor }) {
    return (
      <div className="rounded-4 overflow-hidden" style={{ backgroundColor: bgColor}}>
        <div className=" position-relative" style={{ backgroundColor: bgColor, height: "55px" }}>
          <img src={imagesCard} alt={titre} className="position-absolute top-0 end-0 me-3" style={{ width: "50px" }} />
        </div>
  
        <div className="bg-dark text-white p-3 rounded-top-4">
          <div className="d-flex justify-content-between align-items-center">
            <h5>{titre}</h5>
            <img src="public/icon-ellipsis.svg" alt="Options" style={{ width: "20px" }} />
          </div>
          <h1>{current}hrs</h1>
          <p className="text-secondary">{textePeriode} - {previous}hrs</p>
        </div>
      </div>
    );
  }
  
  export default Card;
  