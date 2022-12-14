import styled, { keyframes } from "styled-components";

const bouncing = keyframes`
0% { transform: translate3d(0, 10px, 0) scale(1.2, 0.85); }
100% { transform: translate3d(0, -20px, 0) scale(0.9, 1.1); }
`;

export const LoaderBalls = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .LoaderBalls__item {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #40a3c3;
    &:nth-child(1) {
      animation: ${bouncing} 0.4s alternate infinite
        cubic-bezier(0.6, 0.05, 0.15, 0.95);
    }

    &:nth-child(2) {
      animation: ${bouncing} 0.4s 0.1s alternate infinite
        cubic-bezier(0.6, 0.05, 0.15, 0.95) backwards;
    }

    &:nth-child(3) {
      animation: ${bouncing} 0.4s 0.2s alternate infinite
        cubic-bezier(0.6, 0.05, 0.15, 0.95) backwards;
    }
  }
`;
