import { TextField, Button, Modal, Box, Typography } from "@mui/material";
import { useState, useRef } from "react";
import axios from "axios";
import { INFT } from "../pages/index";

type CreateNFTModalProps = {
  onCreate?: (nft: INFT) => void;
};

export default function CreateNFTModal({ onCreate }: CreateNFTModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [addNFTOpen, setAddNFTOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleOpenAddNFT = () => {
    setAddNFTOpen(true);
  };

  const handleCloseAddNFT = () => {
    setAddNFTOpen(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData();

    if (file) {
      data.append("image", file);
    }
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);

    try {
      const response = await axios.post("http://localhost:5002/api/NFTs", data);
      console.log("NFT created successfully:", response.data);
      if (onCreate) {
        try {
          onCreate(response.data as INFT);
        } catch (err) {}
      }
      handleCloseAddNFT();
    } catch (error: any) {
      console.error("Error creating NFT:", error);
    }
  };

  return (
    <div>
      <Button
        onClick={handleOpenAddNFT}
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300"
        sx={{
          backgroundColor: "#22d3ee",
          color: " #fff",
          borderRadius: "12px",
          fontWeight: "600",
          "&:hover": {
            backgroundColor: "#0491aa",
          },
          padding: "10px",
        }}
      >
        Add NFT
      </Button>
      <Modal open={addNFTOpen} onClose={handleCloseAddNFT}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#1f2937",
            padding: 4,
            borderRadius: 3,
            boxShadow: 24,
            width: 400,
            maxWidth: "90%",
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <input
            type="file"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              variant="outlined"
              onClick={() => fileInputRef.current?.click()}
              sx={{
                borderColor: "#22d3ee",
                color: "#22d3ee",
                "&:hover": {
                  borderColor: "#0491aa",
                  backgroundColor: "rgba(4, 145, 170, 0.1)",
                },
              }}
            >
              Choose File
            </Button>
            <Typography
              sx={{
                color: "#9ca3af",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {file?.name || "No file chosen"}
            </Typography>
          </Box>
          <TextField
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                color: "#e5e7eb",
                backgroundColor: "#3b404cff",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#4b5563",
                },
                "&:hover fieldset": {
                  borderColor: "#22d3ee",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#22d3ee",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#9ca3af",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#22d3ee",
              },
            }}
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                color: "#e5e7eb",
                backgroundColor: "#3b404cff",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#4b5563",
                },
                "&:hover fieldset": {
                  borderColor: "#22d3ee",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#22d3ee",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#9ca3af",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#22d3ee",
              },
            }}
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            sx={{
              "& .MuiInputBase-root": {
                color: "#e5e7eb",
                backgroundColor: "#3b404cff",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#4b5563",
                },
                "&:hover fieldset": {
                  borderColor: "#22d3ee",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#22d3ee",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#9ca3af",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#22d3ee",
              },
            }}
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />

          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}
          >
            <Button
              onClick={handleCloseAddNFT}
              variant="outlined"
              sx={{
                borderColor: "#f87171",
                color: "#f87171",
                "&:hover": {
                  borderColor: "#ef4444",
                  backgroundColor: "rgba(239, 68, 68, 0.1)",
                },
              }}
            >
              Close
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#22d3ee",
                "&:hover": {
                  backgroundColor: "#0491aa",
                },
              }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
