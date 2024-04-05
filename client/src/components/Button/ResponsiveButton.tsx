import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

interface ResponsiveButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: "text" | "contained" | "outlined";
  to?: String;
}

const ResponsiveButton: React.FC<ResponsiveButtonProps> = ({
  variant,
  component,
  to,
  children,
  ...props
}) => {
  return (
    <Button
      {...props}
      variant={variant}
      sx={{
        ...props.sx,

        fontSize: { xs: "0.8rem", sm: "1rem" },
        padding: { xs: "6px 12px", sm: "8px 16px" },
      }}
    >
      {children}
    </Button>
  );
};

export default ResponsiveButton;
