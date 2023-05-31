import React from 'react';
import { Carousel } from 'react-carousel-minimal';

function MyCarousel() {
 const data = [
    {
      image: "https://audimediacenter-a.akamaihd.net/system/production/media/86301/images/af0b0b8565ad129a521cf145c2c46dc08b116d3a/A1914174_blog.jpg?1582576581",
      caption: "Audi A6 Sedan"
    },
    {
      image: "https://www.topgear.com/sites/default/files/2021/08/01%205219-AudiUK00019837AudiA6Avant.jpg",
      caption: "Audi A6 Avant"
    },
    {
      image: "https://i.auto-bild.de/mdb/extra_large/33/7-90a.jpg",
      caption: "BMW 5 series"
    },
    {
      image: "https://www.topgear.com/sites/default/files/2022/11/1-BMW-i7-7-Series-review.jpg",
      caption: "BMW 7 series"
    },
    {
      image: "https://автоновините.com/wp-content/uploads/2020/11/2019-Audi-A8-L-71.jpg",
      caption: "Audi A8"
    },
    {
      image: "https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/story/hero_image/2024-mercedes-benz-e-class-sedan-black-1001x565-%281%29.jpg",
      caption: "Mercedess E-Class"
    },
    {
      image: "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/48067/s-class-exterior-right-front-three-quarter-8.jpeg?isig=0&q=75",
      caption: "Mercedess S-Class"
    },
    {
      image: "https://www.dsautomobiles.bg/wp-content/uploads/2020/02/Mosa1.4.jpg",
      caption: "DS 9"
    },
    {
      image: "https://www.auto-data.net/images/f119/Peugeot-508-II-SW-Phase-II-2023.jpg",
      caption: "Peugeot 508"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="myCarousel">
      <div style={{ textAlign: "center" }}>
        <h2>Nikos Auto</h2>
        <p>Here comes the future !</p>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MyCarousel;