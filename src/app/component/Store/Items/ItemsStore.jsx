import React from "react";
import ConvertCoins from "../../../../../functions/ConvertCoins";

const ItemsStore = ({ items }) => {
  let Items_colors = Object.entries(items).map((e) => e[1]);
    

  const showColors = () => {
    return Items_colors.map((item) => (
      <div>
        <div className="flex justify-between text-sm">
          <div className="flex">
            <p>{item.level} </p>
            <p>LEVEL</p>
          </div>
          <div className="flex">
            <p>Preço</p>
            <p>{ConvertCoins(item.preco)}</p>
          </div>
        </div>
        <ul className="flex">
          {item.colors.map((e) => (
            <li className={`w-10 h-10`} style={{ background: e }}></li>
          ))}
        </ul>
      </div>
    ));
  };

  return <div className="flex flex-col gap-2">{showColors()}</div>;
};

export default ItemsStore;
