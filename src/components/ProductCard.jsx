import React from "react";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="w-[300px] bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative w-full h-[250px] group">
        <img src={image} alt={title} className="w-full h-full object-contain" />
        <div className="absolute inset-0 bg-[#4E9F0D] bg-opacity-80 opacity-0 group-hover:opacity-80 flex items-center justify-center transition-opacity duration-300">
          <span className="text-white text-[16px] font-medium">Добавить в корзину</span>
        </div>
      </div>
      <div className="p-4 text-center">
        <h1 className="font-bold text-[20px] text-[#4E9F0D] mb-[5px] line-clamp-1 hover:line-clamp-none">{title}</h1>
        <p className="text-gray-600 text-[14px] leading-[20px]">
          Свежая булочка, салат, маринованный огурец, лук, котлета, майонез и кетчуп.
        </p>
        <div className="mt-4 text-[#4E9F0D] font-bold text-[20px]">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
