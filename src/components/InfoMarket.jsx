import React from "react";

export default function InfoMarket() {
  return (
    <section className="py-16 md:px-16 sm:px-8">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h1 className="text-l font-bold mb-2">SHIBOSHILAND MARKET</h1>
          <h2 className="text-5xl font-bold mb-4">
            CREATE, SELL OR COLLECT DIGITAL ITEMS.
          </h2>
          <p className="text-gray-600 mb-6">
            Unit of data stored on a digital ledger, called a blockchain, that
            certifies a digital asset to be unique and therefore not
            interchangeable
          </p>
          <button className="btn btn-base-300">Explore</button>

          <div className="flex space-x-12 mt-12">
            <div>
              <div className="text-4xl font-bold">94,215</div>
              <div className="text-gray-600">COLLECTIBLES</div>
            </div>
            <div>
              <div className="text-4xl font-bold">27K</div>
              <div className="text-gray-600">AUCTIONS</div>
            </div>
            <div>
              <div className="text-4xl font-bold">4K</div>
              <div className="text-gray-600">NFT ARTIST</div>
            </div>
          </div>
        </div>
        <div>
            <img src="https://gigaland.retro.on3-step.com/img/misc/women-with-vr.png" class="img-fluid"></img>
        </div>
      </div>
    </section>
  );
}
