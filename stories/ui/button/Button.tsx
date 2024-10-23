import React from "react";
import { ButtonStyled } from "./button.styled";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      size = "md",
      display = "inline_block",
      type = "normal",
      className,
      children,
      loading = false,
      submit = false,
      disabled = false,
      isPressed = true,
      marginBottom,
      marginTop,
      spinnerType,
      spinnerColor,
      onClick,
      onMouseOverEvent,
      onMouseOutEvent,
    },
    ref
  ) => {
    return (
      <ButtonStyled.BTN
        ref={ref}
        className={className}
        disabled={disabled}
        type={submit ? "submit" : "button"}
        onClick={onClick}
        variant={variant}
        onMouseOver={onMouseOverEvent}
        onMouseOut={onMouseOutEvent}
      >
        {children}
      </ButtonStyled.BTN>
    );
  }
);

export default Button;
