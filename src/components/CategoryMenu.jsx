import React from "react";

const CategoryMenu = () => {
  const categories = ['Гамбургеры', 'Хот доги', 'Пицца', 'Напитки', 'Соки'];
  return (
    <ul className="pt-[47px] pb-[74px] flex items-center gap-[44px]">
      {categories.map((category) => (
        <li key={category} className="font-semibold text-[20px] leading-[23px] text-[#7A7A7A] hover:text-[#4E9F0D] cursor-pointer">
          {category}
        </li>
      ))}
    </ul>
  );
};

export default CategoryMenu