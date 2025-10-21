import { INFT } from "../pages/index";
import { Button } from "@mui/material";

export default function NFTCard({
  nft,
  onPurchaseClick,
}: {
  nft: INFT;
  onPurchaseClick: (nft: INFT) => void;
}) {
  return (
    <div>
      <div
        key={nft._id}
        className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300"
      >
        <img
          src={`http://localhost:5002${nft.img}`}
          alt={nft.description}
          className="w-full aspect-[4/3] object-cover rounded-xl"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white">{nft.name}</h3>
          <p className="text-gray-300 text-sm h-20 overflow-hidden">
            {nft.description}
          </p>
          <div style={{ marginTop: "1rem", textAlign: "center" }}>
            <p className="font-bold text-lg text-cyan-400 mb-2">
              Price: {nft.price} ETH
            </p>
            <Button
              variant="contained"
              onClick={() => onPurchaseClick(nft)}
              sx={{
                width: "70%",
                backgroundColor: "#22d3ee",
                borderRadius: "12px",
                fontWeight: "600",
                "&:hover": {
                  backgroundColor: "#0491aa",
                },
              }}
            >
              Purchase
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
