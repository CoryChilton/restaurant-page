export default function menu() {
  const contentDiv = document.querySelector('div#content');
  const menuItems = [createMenuItem('Small Nachos', 6),
                     createMenuItem('Medium Nachos', 8),
                     createMenuItem('Large Nachos', 10)];
  menuItems.forEach(item => {
    const itemDiv = document.createElement('div');
    const itemNameH3 = document.createElement('h3');
    itemNameH3.textContent = item.name;
    const itemPriceH4 = document.createElement('h4');
    itemPriceH4.textContent = item.price;
    itemDiv.appendChild(itemNameH3);
    itemDiv.appendChild(itemPriceH4);
    contentDiv.appendChild(itemDiv);
  });
}

function createMenuItem(name, price) {
  return { name, price };
}