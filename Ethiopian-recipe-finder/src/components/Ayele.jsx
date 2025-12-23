

export default function Ayele({ imgSrc, pt }) {
  return (
    <div
      className="custom-image"
      style={{ paddingTop: pt }} // 85% gives aspect ratio
    >
      <img src={imgSrc} alt="" />
    </div>
  );
}
