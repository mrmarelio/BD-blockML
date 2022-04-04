import React from "react";
import NavigationItem from "./NavigationItem";
import "./navigation.scss";

const Navigation = () => {
  const navigationItems = [
    {
      link: "/pagrindinis",
      itemName: "Pagrindinis",
    },
    {
      link: "/sandbox",
      itemName: "Sandbox",
    },
    {
      link: "/kontaktai",
      itemName: "Kontaktai",
    },
  ];

  return (
    <nav className="navigation">
      <ul className="navigation__items">
        {navigationItems.map((item) => (
          <NavigationItem
            key={item.link}
            link={item.link}
            itemName={item.itemName}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
