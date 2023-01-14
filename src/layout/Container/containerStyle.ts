import styled from "styled-components";
import { BorderRadius, Color, HeaderComponent } from "../../component/variable";

export const ContainerStyle = styled.div`
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
  }
  .ant-layout-sider {
    overflow: auto;
    position: fixed;
    left: 0px;
    top: ${HeaderComponent.height};
    bottom: 0px;
    overflow-x: hidden;

    .trigger {
      position: absolute;
      bottom: 0;
      padding: 1rem;
      width: 100%;
      justify-content: center;

      svg {
        color: ${Color.white};
        width: 1.1rem;
        height: 1.1rem;
      }
    }
  }

  #content {
    margin-top: ${HeaderComponent.height};

    .site-layout-background {
      min-height: 100%;
      background-color: ${Color.grayBland};
      padding: 1rem;

      .description-content {
        background-color: ${Color.white};
        border-radius: ${BorderRadius.border6};
      }
    }
  }

  #footer {
    background-color: ${Color.grayBland};
    text-align: center;
  }
`;
