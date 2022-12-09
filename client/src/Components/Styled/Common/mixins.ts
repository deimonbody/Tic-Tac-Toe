import { IFlexMixin } from "../../../common/interfaces";

export const flexMixin = ({
  flexDirection = "row",
  justifyContent = "flex-start",
  alignItems = "flex-start",
}: IFlexMixin) => `
display: flex;
flex-direction: ${flexDirection};
align-items: ${alignItems};
justify-content: ${justifyContent};
`;
