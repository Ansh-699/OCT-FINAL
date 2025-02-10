"use client"

import { useState } from "react"

export default function NewTransactionPage() {
  const [cryptoType, setCryptoType] = useState("USDT")
  const [transactionRate, setTransactionRate] = useState("")

  const handleCryptoTypeChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCryptoType(e.target.value)
  }

  const handleTransactionRateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTransactionRate(e.target.value)
  }

  return (
    <div className="page-heading m-4">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">New Transaction</h3>
        </div>
        <div className="card-body">
          <div className="form form-horizontal">
            <div className="form-body">
              <div className="row mb-4">
                <div className="col-md-4">
                  <label htmlFor="cryptoType" className="form-label">
                    Select Crypto Type:
                  </label>
                </div>
                <div className="col-md-8">
                  <select
                    id="cryptoType"
                    className="form-select"
                    value={cryptoType}
                    onChange={handleCryptoTypeChange}
                  >
                    <option>USDT</option>
                    <option>AED</option>
                    <option>BTC</option>
                  </select>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-4">
                  <label htmlFor="transactionRate" className="form-label">
                    Transaction Rate:
                  </label>
                </div>
                <div className="col-md-8">
                  <input
                    type="number"
                    id="transactionRate"
                    className="form-control"
                    placeholder="Enter transaction rate"
                    value={transactionRate}
                    onChange={handleTransactionRateChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-end">
                  <button className="btn btn-primary me-1 mb-1">
                    Add Transaction
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
