import "../../css/components/Tag/style.css";

export default function Tag({ tagText }) {
  return (
    <li className="tag">
      <p>{tagText}</p>
    </li>
  );
}
