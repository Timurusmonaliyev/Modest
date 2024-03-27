import React from "react";
import JQuery from "jquery";

const Navbar = () => {
  JQuery(function ($) {
    var $navbar = $(".navbar");
    $(window).scroll(function (event) {
      var $current = $(this).scrollTop();
      if ($current > 0) {
        $navbar.addClass("navbar-color");
      } else {
        $navbar.removeClass("navbar-color");
      }
    });
  });
  return (
    <div className="navbar">
      <div className="bg-[#262626] py-4 flex justify-between md:justify-start md:px-10 px-6 md:gap-4 md:items-start xl:px-20 xl:justify-between lg:px-10 lg:justify-between items-center">
        <div>
          <p className="text-[26px] font-[Raleway Helvetica Arial sans-serif] text-white font-semibold uppercase">
            Modest
          </p>
        </div>
        <div className="hidden lg:flex xl:flex md:grid md:grid-cols-4 md:gap-y-4 items-center">
          <div className="text-white h-[6vh] md:px-4 lg:px-7 hover:text-black duration-500 text-[17px] xl:px-7 bg-[#CF6FC1] uppercase flex items-center border-gray-800 border-[0.1px]">
            Services
          </div>
          <div className="text-white h-[6vh] md:px-4 lg:px-7 hover:text-black duration-500 text-[17px] xl:px-7 bg-[#6DB4C4] uppercase flex items-center border-gray-800 border-[0.1px]">
            facts
          </div>
          <div className="text-white h-[6vh] md:px-4 lg:px-7 hover:text-black duration-500 text-[17px] xl:px-7 bg-[#4876C0] uppercase flex items-center border-gray-800 border-[0.1px]">
            portfolio
          </div>
          <div className="text-white h-[6vh] md:px-4 lg:px-7 hover:text-black duration-500 text-[17px] xl:px-7 bg-[#C55050] uppercase flex items-center border-gray-800 border-[0.1px]">
            clients
          </div>
          <div className="text-black h-[6vh] md:px-4 lg:px-7 hover:text-black duration-500 text-[17px] xl:px-7 bg-[#ffffff] uppercase flex items-center border-gray-800 border-[0.1px]">
            contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
