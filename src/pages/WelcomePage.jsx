import React from "react";
import { useNavigate } from "react-router-dom";
import InfoMarket from "../components/InfoMarket";
import OldItem from "../components/OldItem";
import NewItem from "../components/NewItem";
import TopSellers from "../components/TopSellers";

export default function WelcomePage() {
  return (
    <div>
      <main className="container mx-auto px-4">
        <InfoMarket />
        <OldItem />
        <NewItem />
        <TopSellers />
      </main>
    </div>
  );
}
