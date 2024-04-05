import { navLinks } from "@/constants";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useState } from "react";

type OnCloseHandler = () => void;

type Props = {
  flexDir: "row" | "column" | "row-reverse" | "column-reverse";
  onClose?: OnCloseHandler;
};

const MenuNav = ({ flexDir, onClose }: Props) => {
  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();

  const [selected, setSelected] = useState("Presentation");
  const theme = useTheme();

  return (
    <>
      <Box
        display="flex"
        gap={1}
        flexDirection={flexDir}
        sx={{
          backgroundColor: theme.breakpoints.down('sm') ? 'black' : 'transparent',
          color: theme.breakpoints.down('sm') ? 'white' : 'inherit',
        }}
      >
        {navLinks.map((item, index) => (
          <React.Fragment key={index}>
            <Button
              key={index}
              component={Link}
              to={item.href}
              onClick={onClose}
            >
              <Typography
                variant="h6"
                onClick={() => {
                  setSelected(item.label);
                }}
                sx={{
                  fontWeight: selected === item.label ? "600" : "400",
                  color:
                    selected === item.label ? "secondary.main" : "white.main",
                }}
              >
                {item.label}
              </Typography>
            </Button>
            <Divider orientation="vertical" flexItem />
          </React.Fragment>
        ))}
      </Box>
    </>
  );
};

export default MenuNav;