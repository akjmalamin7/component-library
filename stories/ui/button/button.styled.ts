import { css, styled } from "styled-components";
import { ButtonVariant } from "./buttonModel";

// Define the sizes with media queries
const sizes = {
  sm: css`
    padding: 4px 8px; // Smaller padding for small buttons
    font-size: 12px; // Font size for small buttons
    border-radius: 2px; // Border radius for small buttons

    @media (min-width: 576px) {
      // For medium devices
      padding: 6px 12px; // Adjust padding for medium devices
      font-size: 14px; // Adjust font size for medium devices
    }

    @media (min-width: 768px) {
      // For large devices
      padding: 8px 16px; // Adjust padding for large devices
      font-size: 16px; // Adjust font size for large devices
    }
  `,
  md: css`
    padding: 8px 16px; // Default padding for medium buttons
    font-size: 14px; // Font size for medium buttons
    border-radius: 4px; // Border radius for medium buttons

    @media (min-width: 576px) {
      // For medium devices
      padding: 10px 18px; // Adjust padding for medium devices
      font-size: 16px; // Adjust font size for medium devices
    }

    @media (min-width: 768px) {
      // For large devices
      padding: 12px 24px; // Adjust padding for large devices
      font-size: 18px; // Adjust font size for large devices
    }
  `,
  lg: css`
    padding: 12px 24px; // Larger padding for large buttons
    font-size: 16px; // Font size for large buttons
    border-radius: 6px; // Border radius for large buttons

    @media (min-width: 576px) {
      // For medium devices
      padding: 14px 28px; // Adjust padding for medium devices
      font-size: 18px; // Adjust font size for medium devices
    }

    @media (min-width: 768px) {
      // For large devices
      padding: 16px 32px; // Adjust padding for large devices
      font-size: 20px; // Adjust font size for large devices
    }
  `,
  xlg: css`
    padding: 16px 32px;
    font-size: 18px;
    border-radius: 8px;

    @media (min-width: 576px) {
      padding: 18px 36px;
      font-size: 20px;
    }

    @media (min-width: 768px) {
      // For large devices
      padding: 20px 40px; // Adjust padding for large devices
      font-size: 22px; // Adjust font size for large devices
    }
  `,
};

const variants = {
  default: "background-color: #e0e0e0; color: #000;", // Default variant styles
  info: "background-color: #17a2b8; color: #fff;",
  danger: "background-color: #dc3545; color: #fff;",
  success: "background-color: #28a745; color: #fff;",
  warning: "background-color: #ffc107; color: #000;",
  disabled: "background-color: #dcdcdc; color: #a9a9a9;",
  white: "background-color: #fff; color: #000; border: 1px solid #000;",
};

const BTN = styled.button<{ variant: ButtonVariant }>`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  text-align: center;

  &:focus {
    outline: none;
  }
  ${({ size }) => sizes[size]};
  ${({ variant }) => variants[variant] || variants.default};
`;

export const ButtonStyled = {
  BTN,
};
