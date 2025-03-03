import React from 'react';
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
      <div className="text-center p-10">
        <h1 className="text-[48px] font-bold text-[#4E9F0D]">Наше меню</h1>
        <p className="text-[20px] text-green-600 mt-4">Здесь вы найдете самые вкусные гамбургеры!</p>
        
        <div className="inline-flex rounded-md shadow-xs mt-[30px]" role="group">
            <NavLink to="/todos" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700">
                Todos
            </NavLink>
            <NavLink to="/comments" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700">
                Comments
            </NavLink>
            <NavLink to="/posts" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700">
                Posts
            </NavLink>
        </div>
      </div>
    );
};

export default Menu;
