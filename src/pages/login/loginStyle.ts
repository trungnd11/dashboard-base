import styled, { keyframes } from "styled-components";
import { zoomIn } from "react-animations";
import { BorderRadius, Color } from "../../component/variable";

const AnimateBgLogin = keyframes`${zoomIn}`;

export const LoginContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #21D4FD;
  background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);


  .form-container {
    background-color: ${Color.white};
    position: absolute;
    border-radius: ${BorderRadius.border6};
    display: flex;
    max-width: 40%;
    overflow: hidden;
    animation: 0.6s ${AnimateBgLogin} forwards;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    .bg-image {
      flex-basis: 50%;

      img {
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
      }
    }

    .form {
      padding: 3rem;
      flex-grow: 1;
      display: flex;
      align-items: center;

      h3 {
        text-transform: uppercase;
        font-weight: 700;
        color: ${Color.blueText};
        margin-bottom: 1rem;
      }
      
      form {
        flex-basis: 100%;
      }
    }


    .title, .button  {
      text-align: center;
    }

    .button {
      button {
        width: 100%;
      }
    }
  }
`;
