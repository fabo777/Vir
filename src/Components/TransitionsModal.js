import React, { useContext } from "react"; ///mozdaa ovo
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Context } from "./Contexts/Context";

export default function TransitionsModal() {
  const {
    apNum,
    apartmani,
    toggle,
    setToggle,
    active,
    setActive,
    open,
    setOpen,
    handleOpen,
    handleClose,
    width,
  } = useContext(Context);
  const style = {
    position: "absolute",
    top: "50%",
    left: width < 850 ? "50%" : "65%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 700,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/*  <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
