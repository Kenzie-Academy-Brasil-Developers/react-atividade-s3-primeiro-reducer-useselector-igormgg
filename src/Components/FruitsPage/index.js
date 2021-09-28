import { useSelector } from "react-redux";
import "./styles.css";

const FruitsPage = () => {
  const fruits = useSelector((state) => state.fruits);

  return (
    <div className="fruitsBox">
      {fruits.map((fruit) => (
        <p id={fruit} key={fruit}>
          {" "}
          {fruit}{" "}
        </p>
      ))}
    </div>
  );
};

export default FruitsPage;
