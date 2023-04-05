import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../../data/carList";

const RideSelector = (props) => {
  const [rideDuration, setRideDuration] = useState(0);
  const serviceRef = useRef(null);

  useEffect(() => {
    const pickupCoord = props.pickupCoordinate;
    const dropoffCoord = props.dropoffCoordinate;

    if (pickupCoord && dropoffCoord) {
      rideDurationf(props);
    }

    if (serviceRef.current) {
      serviceRef.current.addEventListener("click", handleServiceClick);
    }

    return () => {
      if (serviceRef.current) {
        serviceRef.current.removeEventListener("click", handleServiceClick);
      }
    };
  }, [props]);

  const rideDurationf = (props) => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${props.pickupCoordinate[0]},${props.pickupCoordinate[1]};${props.dropoffCoordinate[0]},${props.dropoffCoordinate[1]}?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1Ijoia2VubmV0aDIxNiIsImEiOiJjbGcyaTY4ODIwNW9zM3BvM2JqcXBvN2Y5In0.UdSVjvyREG_MNu0LR6LAyg",
        })
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.routes[0]) {
          setRideDuration(data.routes[0].duration / 100);
        }
      });
  };

  const handleServiceClick = (event) => {
    const dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
  };

  return (
    <Wrapper>
      <Title>Choose appropriate, or swipe up for more</Title>
      <CarList>
        {carList.map((car) => (
          <Car key="car">
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service ref={serviceRef}>{car.service}</Service>
              <div id="myDropdown" className="dropdown-content">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
              <Time>5 min away</Time>
            </CarDetails>
            <CarPrice>
              {"$" + (rideDuration * car.multiplier).toFixed(2)}
            </CarPrice>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

const Wrapper = tw.div`
 flex-1  overflow-y-scroll flex flex-col flex flex-col
`;

const Title = tw.div`
text-center text-s text-gray-500 border-b py-2
`;
const CarList = tw.div`
border-b overflow-y-scroll 
`;
const Car = tw.div`
flex items-center 
`;

const CarImage = tw.img`
h-20 px-4
`;

const CarDetails = tw.div`
flex-1 px-8
`;
const Service = tw.div`
font-semibold cursor-pointer`;
const Time = tw.div`
text-blue-500 text-xs
`;

const CarPrice = tw.div`
px-4 text-sm
`;

export default RideSelector;