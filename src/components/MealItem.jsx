import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";

export default function MealItem({ meal }) {
  return (
    <li className="bg-[#1d1a16] rounded-2xl overflow-hidden text-center box-shadow">
      <article className="flex h-full flex-col justify-between">
        <img
          src={`http://localhost:3000/${meal.image}`}
          alt={meal.name}
          className="w-full h-80 object-cover"
        />
        <div>
          <h3 className="font-bold text-[1.5rem] my-3">{meal.name}</h3>
          <p className="bg-[#312c1d] inline-block text-[#ffc404] text-[0.9rem] font-bold m-0 rounded-[4px] padding">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="m-4">{meal.description}</p>
        </div>
        <p className="mb-6">
          <Button textOnly={false}>Add To Cart</Button>
        </p>
      </article>
    </li>
  );
}
