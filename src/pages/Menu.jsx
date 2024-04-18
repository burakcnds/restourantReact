import React, { useState } from 'react';
import lobsterBisque from '../assets/menu/lobster-bisque.jpg';
import breadBarrel from '../assets/menu/bread-barrel.jpg';
import cake from '../assets/menu/cake.jpg';
import caesar from '../assets/menu/caesar.jpg';
import tuscanGrilled from '../assets/menu/tuscan-grilled.jpg';
import mozzarella from '../assets/menu/mozzarella.jpg';
import greekSalad from '../assets/menu/greek-salad.jpg';
import spinachSalad from '../assets/menu/spinach-salad.jpg';

function Menu() {
  const [filter, setFilter] = useState("*");

  const handleFilter = (filterValue) => {
    setFilter(filterValue);
  };

  const menuItems = [
    { category: "Hamburger", name: "Lobster Bisque", price: "$5.95", image: lobsterBisque, description: "Lorem, deren, trataro, filede, nerada" },
    { category: "İçecekler", name: "Bread Barrel", price: "$6.95", image: breadBarrel, description: "Lorem, deren, trataro, filede, nerada" },
    { category: "Hamburger", name: "Crab Cake", price: "$7.95", image: cake, description: "A delicate crab cake served on a toasted roll with lettuce and tartar sauce" },
    { category: "Salatalar", name: "Caesar Selections", price: "$8.95", image: caesar, description: "Lorem, deren, trataro, filede, nerada" },
    { category: "İçecekler", name: "Tuscan Grilled", price: "$9.95", image: tuscanGrilled, description: "Grilled chicken with provolone, artichoke hearts, and roasted red pesto" },
    { category: "Hamburger", name: "Mozzarella Stick", price: "$4.95", image: mozzarella, description: "Lorem, deren, trataro, filede, nerada" },
    { category: "Salatalar", name: "Greek Salad", price: "$9.95", image: greekSalad, description: "Fresh spinach, crisp romaine, tomatoes, and Greek olives" },
    { category: "Salatalar", name: "Spinach Salad", price: "$9.95", image: spinachSalad, description: "Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette" }
  ];

  return (
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Menu</h2>
          <p>Menü İçeriğimizi Keşfedin</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              <li onClick={() => handleFilter("*")} className={filter === "*" ? "filter-active" : ""}>Tümü</li>
              <li onClick={() => handleFilter("Hamburger")} className={filter === "Hamburger" ? "filter-active" : ""}>Hamburger</li>
              <li onClick={() => handleFilter("Salatalar")} className={filter === "Salatalar" ? "filter-active" : ""}>Salatalar</li>
              <li onClick={() => handleFilter("İçecekler")} className={filter === "İçecekler" ? "filter-active" : ""}>İçecekler</li>
            </ul>
          </div>
        </div>

        <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">
          {menuItems.map((item, index) => (
            (filter === "*" || filter === item.category) && (
              <div key={index} className="col-lg-6 menu-item">
                <img src={item.image} className="menu-img" alt="" />
                <div className="menu-content">
                  <a href="#">{item.name}</a><span>{item.price}</span>
                </div>
                <div className="menu-ingredients">
                  {item.description}
                </div>
              </div>
            )
          ))}
        </div>

      </div>
    </section>
  );
}

export default Menu;
