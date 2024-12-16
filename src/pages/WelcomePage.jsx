import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import InfoMarket from "../components/InfoMarket";
import OldItem from "../components/OldItem";
import NewItem from "../components/NewItem";
import TopSellers from "../components/TopSellers";
import HotCollections from "../components/HotCollections";

export default function WelcomePage() {
  return (
    <div>
      <main className="container mx-auto px-4">
        <Header />
        <InfoMarket />
        <OldItem />
        <NewItem />
        <TopSellers />
        <HotCollections />
      </main>
    </div>
  );
}
