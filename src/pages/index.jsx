import Head from "next/head";
import styled from "styled-components";

import LinkButton from "components/LinkButton";

const BaseContainer = styled.div.attrs({
  className: "grid place-items-center",
})`
  background-image: url("/assets/planet/${(props) => props.image}");
  background-position: ${(props) => props.dir} center;
  background-size: 75%;
  background-repeat: no-repeat;
`;

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Zero Explorer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute grid grid-rows-2 w-full h-full text-white md:grid-cols-2 md:grid-rows-none">
        <BaseContainer image="planet-4-half.jpg" dir="right">
          <div className="px-12 w-full text-center md:text-right">
            <div className="glow-sp mb-8 w-full text-3xl md:text-6xl">Wilderverse</div>
            <div>
              <LinkButton size="large" href="#">
                Explore
              </LinkButton>
            </div>
          </div>
        </BaseContainer>
        <BaseContainer image="planet-7-half.jpg" dir="left">
          <div className="px-12 w-full text-center md:text-left">
            <div className="glow-sp mb-8 w-full text-3xl md:text-6xl">Cyberverse</div>
            <div>
              <LinkButton size="large" href="#">
                Explore
              </LinkButton>
            </div>
          </div>
        </BaseContainer>
      </div>
      <div className="absolute bottom-0 mb-6 w-full text-center md:mb-24">
        <LinkButton size="large" href="#">
          Make your own Universe
        </LinkButton>
      </div>
    </div>
  );
}
