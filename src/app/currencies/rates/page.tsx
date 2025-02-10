"use client";
import { useState } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exchange Rates",
  description: "View and manage exchange rates",
};

export default function ExchangeRatesPage() {
  const [exchangeRates, setExchangeRates] = useState([
    { currency: "USD", rate: 1.0 },
    { currency: "EUR", rate: 0.85 },
    { currency: "GBP", rate: 0.72 },
    { currency: "JPY", rate: 110.33 },
    { currency: "AUD", rate: 1.34 },
    { currency: "CAD", rate: 1.25 },
    { currency: "CHF", rate: 0.91 },
    { currency: "CNY", rate: 6.47 },
    { currency: "INR", rate: 74.56 },
    { currency: "NZD", rate: 1.42 },
  ]);

  const [newCurrency, setNewCurrency] = useState("");
  const [newRate, setNewRate] = useState("");

  const handleAddRate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCurrency || !newRate) return;

    setExchangeRates([...exchangeRates, { currency: newCurrency.toUpperCase(), rate: parseFloat(newRate) }]);
    setNewCurrency("");
    setNewRate("");
  };

  return (
    <div id="main ">
      <div className=" p-10 page-heading text-start items-end justify-between max-w-[50vw]">
        <div className="page-title">
          <div className="row">
            <div className="col-12">
              <h3>Exchange Rates</h3>
              <p className="text-subtitle text-muted">Current exchange rates against USD</p>
            </div>
          </div>
        </div>

        {/* Add Exchange Rate Form */}
        <section className="section mb-4">
          <div className="card p-3 shadow-sm">
            <h5>Add Custom Exchange Rate</h5>
            <form className="row g-2 mt-2" onSubmit={handleAddRate}>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Currency (e.g., INR)"
                  value={newCurrency}
                  onChange={(e) => setNewCurrency(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Rate (e.g., 74.56)"
                  value={newRate}
                  onChange={(e) => setNewRate(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-4">
                <button type="submit" className="btn btn-primary w-100">
                  Add Rate
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Exchange Rates List */}
        <section className="section">
          <div className="row">
            {exchangeRates.map((rate) => (
              <div key={rate.currency} className="col-12 col-md-6 col-lg-3">
                <div className="card text-start shadow-sm">
                  <div className="card-body">
                    <h6 className="text-muted font-semibold">{rate.currency}/USD</h6>
                    <h6 className="font-extrabold mb-0">{rate.rate}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
