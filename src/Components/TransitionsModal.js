import React, { useContext } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Context } from "./Contexts/Context";
import { ContactUs } from "./ContactUs";

export default function TransitionsModal() {
  const { open, handleClose, dimensions } = useContext(Context);
  const style = {
    position: "absolute",
    top: "50%",
    left: dimensions.width < 850 ? "50%" : "65%",
    transform: "translate(-50%, -50%)",
    width:
      dimensions.width < 420
        ? "88%"
        : dimensions.width < 850
        ? "50%"
        : "fit-content",
    bgcolor: "rgba(199, 225, 245, 1);",
    border: "none",
    boxShadow: 24,
    p: 2,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 700,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>{<ContactUs />}</Box>
      </Fade>
    </Modal>
  );
}
