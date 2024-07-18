import React from 'react';
import Card from '../Card/Card.jsx'
import WoodenImage from '../../assets/Images/Products/Wooden/WoodenImage.png'
import SareeImage from '../../assets/Images/Products/Sarees/SareeImage.png'
import WallDecorImage from '../../assets/Images/Products/Wall Decor/WallDecorImage.png'
import PaintingsImage from '../../assets/Images/Products/Paintings/PaintingsImage.png'
import SculpturesImage from '../../assets/Images/Products/Sculptures/SculpturesImage.png'
import PotteryImage from '../../assets/Images/Products/Pottery/PotteryImage.png'
import JewelryImage from '../../assets/Images/Products/Jewelry/JewelryImage.png'
import MetalWorkImage from '../../assets/Images/Products/MetalWork/MetalWorkImage.png'

function Shop() {
  const Categories = [
    {
      title: 'Wooden',
      imageUrl: WoodenImage,
      description: 'Description for Wooden category',
      path: 'wooden'
    },
    {
      title: 'Sarees',
      imageUrl: SareeImage,
      description: 'Description for Saree category'
    },
    {
      title: 'Wall Decors',
      imageUrl: WallDecorImage,
      description: 'Description for Wall Decor category'
    },
    {
      title: 'Paintings',
      imageUrl: PaintingsImage,
      description: 'Description for Paintings category'
    },
    {
      title: 'Sculptures',
      imageUrl: SculpturesImage,
      description: 'Description for Paintings category'
    },
    {
      title: 'Pottery',
      imageUrl: PotteryImage,
      description: 'Description for Paintings category'
    },
    {
      title: 'Jewelry',
      imageUrl: JewelryImage,
      description: 'Description for Paintings category'
    },
    {
      title: 'MetalWork',
      imageUrl: MetalWorkImage,
      description: 'Description for Paintings category'
    }
  ];

  return (
    <>
      <h1 style={{ color: '#F4B3B3', textAlign: 'center', fontSize: '30px', fontFamily: "Philosopher, sans-serif" }}>Welcome to the Shop!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center">
        {Categories.map((category, index) => (
          <Card
            key={index}
            title={category.title}
            imageUrl={category.imageUrl}
            description={category.description}
          />
        ))}
      </div>
    </>
  );
}

export default Shop;
