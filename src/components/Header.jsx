import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LangThemeContext } from "../context/LangThemeContext";

const Header = () => {
  const { language, toggleLanguage, darkMode, toggleDarkMode } = useContext(LangThemeContext);

  const texts = {
    uz: {
      cart: "Savat",
      menu: "Menyu",
      about: "Biz haqimizda",
      contact: "Kontaktlar",
      title: "Katta Gamburger",
      beef: "Mol go‘shti",
      desc: "Yangi xushbo'y bulochka, marul barglari, tuzlangan bodring va piyoz, mayonez va ketchup bilan to‘ldirilgan mayda kotlet.",
      price: "14 500",
      lang: "RU",
      theme: "Tungi rejim",
    },
    ru: {
      cart: "Корзина",
      menu: "Меню",
      about: "О нас",
      contact: "Контакты",
      title: "Большой гамбургер",
      beef: "Говядина",
      desc: "Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом.",
      price: "14 500",
      lang: "UZ",
      theme: "Дневной режим",
    },
  };

  const currentText = texts[language];

  return (
    <header className={`px-[135px] py-8 h-[600px] ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="flex items-center justify-between mb-[150px]">
        <h2 className="w-[160px] bg-[#4E9F0D] text-center py-1 rounded-[3px] text-[20px] cursor-pointer text-white">
          Street88
        </h2>
        <ul className="flex items-center gap-[40px]">
          <li className="font-medium text-[18px] cursor-pointer hover:text-[#4E9F0D]">{currentText.cart}</li>
          <li>
            <NavLink to="/menu" className="font-medium text-[18px] cursor-pointer hover:text-[#4E9F0D]">
              {currentText.menu}
            </NavLink>
          </li>
          <li className="font-medium text-[18px] cursor-pointer hover:text-[#4E9F0D]">{currentText.about}</li>
          <li className="font-medium text-[18px] cursor-pointer hover:text-[#4E9F0D]">{currentText.contact}</li>
        </ul>
        <div className="flex gap-4 mt-6">
          <button onClick={toggleLanguage} className="bg-[#4E9F0D] text-white px-4 py-2 rounded-md">
            {currentText.lang}
          </button>
          <button onClick={toggleDarkMode} className="bg-gray-700 text-white px-4 py-2 rounded-md">
            {currentText.theme}
          </button>
        </div>
      </div>

      <h1 className="font-black text-[72px] leading-[84px] text-[#4E9F0D] mb-[60px]">{currentText.title}</h1>
      <h3 className="text-[36px] leading-[42px] text-[#4E9F0D]">{currentText.beef}</h3>
      <p className="text-[18px] leading-[21px] mb-[53px]">{currentText.desc}</p>
      <strong className="font-thin text-[60px] leading-[70px] mb-[135px] block w-[350px] bg-[#4E9F0D] px-[16px] text-white text-center">
        {currentText.price}
      </strong>
    </header>
  );
};

export default Header;

