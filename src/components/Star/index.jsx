import star from "../../assets/star.svg";

export default function Star({ fulfilled }) {
  return (
    <img
      src={star}
      alt="Star"
      style={{
        width: "20px",
        height: "20px",
        marginRight: "5px",
        filter: fulfilled ? "none" : "grayscale(100%)",
      }}
    />
  );
}
