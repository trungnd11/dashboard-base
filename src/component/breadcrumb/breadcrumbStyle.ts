import { bounceInRight } from "react-animations";
import styled, { keyframes } from "styled-components";
import { Color, HeaderComponent } from "../variable";

const AnimateBreadscrumb = keyframes`${bounceInRight}`;

export const BreadcrumbContainer = styled.div`
  z-index: 10;
  position: fixed;
  top: ${HeaderComponent.height};
  right: 0;
  padding: .5rem 1rem;
  background-color: ${Color.white};
  animation: 0.6s ${AnimateBreadscrumb} forwards;
`;
