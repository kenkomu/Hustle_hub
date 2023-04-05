import React from "react";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";


const RideSelector = (props) => {
  const [rideDuration, setRideDuration] = useState(0);

  useEffect(() => {
    const pickupCoord = props.pickupCoordinate;
    const dropoffCoord = props.dropoffCoordinate;

    if (pickupCoord && dropoffCoord) {
      rideDurationf(props);
    }
  }, [props]);

  const rideDurationf = (props) => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${props.pickupCoordinate[0]},${props.pickupCoordinate[1]};${props.dropoffCoordinate[0]},${props.dropoffCoordinate[1]}?` +
        new URLSearchParams({
          access_token: "pk.eyJ1Ijoia2VubmV0aDIxNiIsImEiOiJjbGcyaTY4ODIwNW9zM3BvM2JqcXBvN2Y5In0.UdSVjvyREG_MNu0LR6LAyg",
        })
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.routes[0]) {
          setRideDuration(data.routes[0].duration / 100);
        }
      });
  };
  const fetchPeopleList = () => {
    window.location.href = "https://example.com/people-list";
  };


  return (
    <div className="bg-gray-50 rounded-lg shadow-lg p-10 max-w-[500px] h-[300px]">
      <Title>Choose appropriate, or swipe up for more</Title>
      <CarList>
        {carList.map((car) => (
          <Car key="car">
            <CarImage src={car.imgUrl}width={100} height={50} className="rounded-full"/>
            <CarDetails>
            <Service onClick={fetchPeopleList}>{car.service}</Service>
            <Time>5 min away</Time>
            </CarDetails>
            <CarPrice>
              {"$" + (rideDuration * car.multiplier).toFixed(2)}
            </CarPrice>
          </Car>
        ))}
      </CarList>
    </div>
  );
};

const Wrapper = tw.div`
 flex-1  overflow-y-scroll flex flex-col flex flex-col
`;

const Title = tw.div`
text-center text-s text-gray-500 border-b py-2
`;
const CarList = tw.div`
bg-gray-50 rounded-lg shadow-lg p-10 max-w-[500px] h-[300px]
`;
const Car = tw.div`
flex items-center p-5
`;

const CarImage = tw.img`
h-20 px-4
`;

const CarDetails = tw.div`
flex-1 px-8
`;
const Service = tw.div`
font-semibold`;
const Time = tw.div`
text-blue-500 text-xs
`;

const CarPrice = tw.div`
px-4 text-sm
`;

export default RideSelector;