import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const locations = [
    {
      img: "https://images.shiksha.ws/mediadata/images/articles/iStock_000064575555_Medium.jpg",
      location: "Canada",
    },
    {
      img: "https://www.travelandleisure.com/thmb/3Iul9mBZaj40HHmCaHzL6z7Y5J0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/london-cityscape-UKESSAY1222-3c3b4b23062f410080b77839b31243a6.jpg",
      location: "UK",
    },
    {
      img: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-149298,resizemode-75,msid-103750904/nri/latest-updates/india-becomes-the-first-country-to-beat-pre-pandemic-levels-of-travel-to-australia.jpg",
      location: "Australia",
    },
    {
      img: "https://www.aeccglobal.com/images/2021/09/14/nz.png",
      location: "New Zealand",
    },
    {
      img: "https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/08/Cliffs-of-Moher-Liscannor-Co-Clare_AirSwing-Media.jpg?quality=90&strip=all&w=1220&h=488&crop=1",
      location: "Ireland",
    },
    {
      img: "https://images.shiksha.com/mediadata/images/articles/1677644477phpiqm5TY.jpeg",
      location: "Sweden",
    },
    {
      img: "https://erudera.com/media/images/frankfurt_germany.2e16d0ba.fill-16000x9000.jpg",
      location: "Germany",
    },
    {
      img: "https://www.nationsonline.org/gallery/Switzerland/Sunrise-on-the-Matterhorn.jpg",
      location: "Switzerland",
    },
  ];

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={2}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 4,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {locations.map((location) => (
          <div className="w-60 h-96 p-2 rounded-md hover:pt-0 transition-all ease-in duration-200" key={location}>
            <img
              src={location.img}
              alt=""
              className="w-60 h-80 object-cover rounded-md "
            />
            <div>
              <p>{location.location}</p>
            </div>
          </div>
        ))}
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;
