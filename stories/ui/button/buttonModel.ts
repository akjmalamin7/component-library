export type ButtonVariant =
  | "default"
  | "info"
  | "danger"
  | "success"
  | "warning"
  | "disabled"
  | "white";
export type ButtonSize = "sm" | "md" | "lg" | "xlg";
export type ButtonProps = {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  size?: ButtonSize;
  display?: "block" | "inline_block";
  type?: "normal" | "outline" | "text";
  spinnerType?: string;
  spinnerColor?: string;
  submit?: boolean;
  disabled?: boolean;
  loading?: boolean;
  isPressed?: boolean;
  marginTop?: string;
  marginBottom?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseOverEvent?: (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onMouseOutEvent?: (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};
