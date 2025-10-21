import { INFT } from "../pages/index";
import { Modal, Typography, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";

interface IPurchaseModalProps {
  open: boolean;
  handleClose: () => void;
  nft: INFT | null;
}

export default function PurchaseModal({
  open,
  handleClose,
  nft,
}: IPurchaseModalProps) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  useEffect(() => {
    if (!open) {
      setTimeout(() => setQuantity(1), 300);
    }
  }, [open]);

  if (!nft) {
    return null;
  }

  const totalPrice = parseFloat((quantity * nft.price).toFixed(4));

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {
            xs: "90%",
            sm: 350,
            md: 400,
          },
          bgcolor: "#1f2937",
          border: "1px solid #22d3ee",
          boxShadow: 24,
          p: 4,
          color: "#e5e7eb",
          borderRadius: "16px",
        }}
      >
        <Typography variant="h6" sx={{ textAlign: "center", mb: 2 }}>
          Price: {nft.price} ETH
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            my: 2,
          }}
        >
          <Button
            onClick={handleDecrement}
            variant="outlined"
            sx={{
              borderColor: "#22d3ee",
              color: "#22d3ee",
              "&:hover": {
                backgroundColor: "#0491aa",
                borderColor: "#0491aa",
              },
            }}
          >
            -
          </Button>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {quantity}
          </Typography>
          <Button
            onClick={handleIncrement}
            variant="outlined"
            sx={{
              borderColor: "#22d3ee",
              color: "#22d3ee",
              "&:hover": {
                backgroundColor: "#0491aa",
                borderColor: "#0491aa",
              },
            }}
          >
            +
          </Button>
        </Box>
        <Typography
          sx={{ fontSize: "1.3rem", fontWeight: "bold", textAlign: "center" }}
        >
          Total price: {totalPrice} ETH
        </Typography>
      </Box>
    </Modal>
  );
}
