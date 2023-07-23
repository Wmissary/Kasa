import "../../css/components/Banner/style.css";

export default function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="banner" className="banner_image" />
      <p className="banner_text">{text}</p>
    </div>
  );
}
