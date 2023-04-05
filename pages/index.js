import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="logo.png"/>
          
        </Header>
        <ActionButtons>
          <Link href="/search" passHref>
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Work
            </ActionButton>
          </Link>
          </ActionButtons>
        <Link href="/search" passHref>
          <InputButton>Book Now</InputButton>
        </Link>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
 flex flex-col h-screen
`;

const ActionItems = tw.div`
 flex-1 p-4
`;

const Header = tw.div`
 flex justify-between items-center
`;

const UberLogo = tw.img`
 h-28
`;

const ActionButtons = tw.div`
flex 
`;

const ActionButton = tw.div`
flex flex-col bg-gray-200 flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl curson-pointer
`;

const ActionButtonImage = tw.img`
h-3/5
`;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center justify-center rounded-lg transform hover:scale-105 transition mt-8
`;
