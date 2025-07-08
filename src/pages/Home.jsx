import React from 'react';
import Card from './Card';
import Carousel from './Carousel';
import Navbar from './Navbar';
import Page from './Page';
import Footer from './Footer';

function Home() {
  const cards = [
    {
      img: "/img/Card-1 (1).jpg",
      title: "Card Title-01",
      p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime repellendus laborum qui dignissimos maiores doloremque natus rerum ullam eos asperiores!"
    },
    {
      img: "/img/Card-1 (2).jpg",
      title: "Card Title-02",
      p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime repellendus laborum qui dignissimos maiores doloremque natus rerum ullam eos asperiores!"
    },
    {
      img: "/img/Card-1 (8).jpg",
      title: "Card Title-03",
      p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime repellendus laborum qui dignissimos maiores doloremque natus rerum ullam eos asperiores!"
    },
    {
      img: "/img/Card-1 (1).jpg",
      title: "Card Title-04",
      p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime repellendus laborum qui dignissimos maiores doloremque natus rerum ullam eos asperiores!"
    },
    {
      img: "/img/Card-1 (2).jpg",
      title: "Card Title-05",
      p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime repellendus laborum qui dignissimos maiores doloremque natus rerum ullam eos asperiores!"
    },
    {
      img: "/img/Card-1 (8).jpg",
      title: "Card Title-06",
      p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime repellendus laborum qui dignissimos maiores doloremque natus rerum ullam eos asperiores!"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <Carousel />

        {/* Cards Section */}
        <div className="row mt-5">
          {cards.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <Card img={card.img} title={card.title} p={card.p} />
            </div>
          ))}
        </div>

        {/* Additional Page Component */}
        <Page />
      </div>

      <Footer />
    </>
  );
}

export default Home;
