import { useState, useEffect } from "react";
import axios from "axios";
import NFTCard from "../components/NFTCard";
import PurchaseModal from "../modals/PurchaseModal";
import CreateNFTModal from "@/modals/CreateNFTModal";

export interface INFT {
  _id: string;
  name: string;
  description: string;
  price: number;
  img: string;
}

export default function HomePage() {
  const [nfts, setNfts] = useState<INFT[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState<INFT | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchNFTs = async (query = "") => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/NFTs`, {
        params: { name: query },
      });
      console.log("Data from server:", res.data);
      setNfts(res.data);
    } catch (e: any) {
      console.error("Error with getting NFT", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNFTs();
  }, []);

  const handleOpenModal = (nft: INFT) => {
    setSelectedNFT(nft);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedNFT(null);
    setIsModalOpen(false);
  };

  const handleNewNFT = (newNFT: INFT) => {
    setNfts((prev) => [newNFT, ...(prev || [])]);
  };

  if (loading) return <p>Loading NFTs...</p>;

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="relative flex flex-col items-center gap-2 pt-3 sm:block sm:pt-5">
        <h1 className="text-4xl font-bold text-center text-white">
          ChainGallery
        </h1>
        <div className="sm:absolute sm:right-4 sm:top-1/2 sm:-translate-y-1/2 sm:pt-5">
          <CreateNFTModal onCreate={handleNewNFT} />
        </div>
      </div>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {nfts && nfts.length > 0 ? (
          nfts.map((nft) => (
            <NFTCard
              key={nft._id}
              nft={nft}
              onPurchaseClick={handleOpenModal}
            />
          ))
        ) : (
          <p>No NFTs found.</p>
        )}
        <PurchaseModal
          open={isModalOpen}
          handleClose={handleCloseModal}
          nft={selectedNFT}
        />
      </div>
    </div>
  );
}
