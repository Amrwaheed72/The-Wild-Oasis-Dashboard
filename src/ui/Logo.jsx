import styled from "styled-components";
import { Tilt } from "react-tilt";
import { useDarkMode } from "../context/DarkmodeContext";

const StyledLogo = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;

// const Img = styled.img`
//   height: 9.6rem;
//   width: auto;
// `;
const NameHeaderWhiteMode = styled.h3`
  margin-bottom: 50px;
  color: black;
`;
const NameHeaderDarkMode = styled.h3`
  margin-bottom: 50px;
  color: #ececec;
`;
const StyledImage = styled.img`
  height: 9.6rem;
  width: auto;
`;

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 30, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
function Logo() {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? "/Amr.png" : "/Amr.png";
  return (
    <StyledLogo>
      <Tilt options={defaultOptions} style={{ height: 100, width: 100 }}>
        <StyledImage src={src} alt="Logo" />
      </Tilt>
      {isDarkMode ? (
        <NameHeaderDarkMode>Amr Waheed</NameHeaderDarkMode>
      ) : (
        <NameHeaderWhiteMode>Amr Waheed</NameHeaderWhiteMode>
      )}
    </StyledLogo>
  );
}

export default Logo;
