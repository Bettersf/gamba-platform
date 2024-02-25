import React from 'react';
import styled, { keyframes } from 'styled-components';
import BackgroundImage from './assets/banner-5.jpeg'; // Assuming './assets/brazilbanner.jpg' is the correct path to your image

// Define keyframe for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled component for the banner container
const BannerContainer = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  animation: ${fadeIn} 0.8s ease forwards;
  height: 441px; /* Set a fixed height for all banners */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent dark layer */
    z-index: 1;
  }

  @media (max-width: 768px) {
    border-radius: 0; /* Remove border radius for mobile */
    min-height: 350px; /* Set a minimum height for mobile */
  }
`;

// Styled component for the background image
const Background = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

// Styled component for the text container
const TextContainer = styled.div`
  position: absolute;
  top: 50%; // Center vertically
  left: 50%; // Center horizontally
  transform: translate(-50%, -50%); // Adjust the positioning to true center
  z-index: 2; // Ensure the text is above the dark layer
  padding: 40px;
  max-width: 50%; // Ensure the text container does not go beyond the dark area
  color: white;
  text-align: center; // Align text to the center within the container

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 70%; // Adjust for mobile to fit text properly
    text-align: center; // Keep text centered on smaller screens
  }
`;




// Styled components for title, description, and buttons remain the same
const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }

  & > button {
    border: none;
    border-radius: 15px;
    padding: 10px 20px;
    background: #333;
    color: white;
    cursor: pointer;
    transition: background .2s ease;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
    justify-content: center;
    &:hover {
      background: #555;
    }

    @media (max-width: 768px) {
      font-size: 12px;
      padding: 8px 16px;
    }
  }
`;

export function TokenListingBanner() {
  return (
    <BannerContainer>
      <Background />
      <TextContainer>
        <Title>Play Games on SolBets and support $STACKS with Revenue 🚀</Title>
        <Description>
          We sharing the platform revenue with #STACKS For BuyBacks and Burn!!
        </Description>
        <Buttons style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button 
            style={{ padding: '10px', cursor: 'pointer' }} 
            onClick={() => window.open('https://t.me/StacksTokenBSC', '_blank')}>
            Telegram
          </button>
          <button 
            style={{ padding: '10px', cursor: 'pointer' }} 
            onClick={() => window.open('https://www.dextools.io/app/en/bnb/pair-explorer/0xa1ad3c70207663ee62c5bd7d491c16c25dee9b76?t=1708889419588', '_blank')}>
            Chart
          </button>
          <button 
            style={{ padding: '10px', cursor: 'pointer' }} 
            onClick={() => window.open('https://twitter.com/StacksTokenBSC', '_blank')}>
            X
          </button>
        </Buttons>
      </TextContainer>
    </BannerContainer>
  );
}
