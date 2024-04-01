
interface IconBox {
  icon: string;
  text: string;
}

export const IconBox = ({ icon, text }: IconBox) => {
  return (
    <div
      className="col-xl-3 col-md-6 d-flex align-items-stretch"
      data-aos-delay="100"
    >
      <div className="icon-box">
        <div className="icon">{icon}</div>
        <p>{text}</p>
      </div>
    </div>
  );
};
