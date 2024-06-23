import "./Campus.css";
import gallaery_1 from "../../assets/gallery-1.png";
import gallaery_2 from "../../assets/gallery-2.png";
import gallaery_3 from "../../assets/gallery-3.png";
import gallaery_4 from "../../assets/gallery-4.png";
import White_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  return (
    <>
      <div className="campus">
        <div className="gallery">
          <img src={gallaery_1} alt="" />
          <img src={gallaery_2} alt="" />
          <img src={gallaery_3} alt="" />
          <img src={gallaery_4} alt="" />
        </div>
        <button className="btn dark-btn">
          See more here <img src={White_arrow} />
        </button>
      </div>
    </>
  );
};

export default Campus;
