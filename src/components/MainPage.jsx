import React from "react";
import CategoryMenu from "./CategoryMenu";
import ProductList from "./ProductList";
import Header from "./Header";

const MainPage = () => {
    return (
      <div>
        <section className="px-[135px] bg-black">
          <CategoryMenu />
          <ProductList />
        </section>
      </div>
    );
};

export default MainPage;
