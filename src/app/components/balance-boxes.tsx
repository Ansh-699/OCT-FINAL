"use client";
import { useState } from "react";
import { DollarSign, TrendingUp, TrendingDown, LineChart } from "lucide-react";

const allAccounts = [
  {
    id: 1,
    name: "Bank Account",
    balance: 5000,
    todaysChange: 250,
    lastMonthPnl: 10,
    currency: "USD",
  },
  {
    id: 2,
    name: "Credit Card",
    balance: -1000,
    todaysChange: -50,
    lastMonthPnl: -5,
    currency: "USD",
  },
  {
    id: 3,
    name: "Savings",
    balance: 10000,
    todaysChange: 500,
    lastMonthPnl: 15,
    currency: "USD",
  },
  {
    id: 4,
    name: "Bitcoin Wallet",
    balance: 2.5,
    todaysChange: 0.1,
    lastMonthPnl: 8,
    currency: "BTC",
  },
  {
    id: 5,
    name: "Dubai Account",
    balance: 25000,
    todaysChange: 1000,
    lastMonthPnl: 12,
    currency: "AED",
  },
  {
    id: 6,
    name: "Ethereum Wallet",
    balance: 15.7,
    todaysChange: -0.5,
    lastMonthPnl: -2,
    currency: "ETH",
  },
];

const profit = 7500;
const expenses = 2500;
const lastMonthPnl = 12.5;
const totalInflow = 15000;
const totalOutflow = 7500;

export function BalanceBoxes() {
  const [selectedAccounts, setSelectedAccounts] = useState(
    allAccounts.map((acc) => acc.id)
  );

  const toggleAccountSelection = (id: number): void => {
    setSelectedAccounts((prev: number[]) =>
      prev.includes(id)
        ? prev.filter((accId: number) => accId !== id)
        : [...prev, id]
    );
  };

  return (
    <div>
      <div className="space container mt-10 m-3">
        {/* Profit & Expense Overview */}
        <section className="row">
          {/* Total Profits Card */}
          <div className="col-12 col-lg-4 d-flex justify-content-center">
            <div className="card hover:scale-105 transition-transform duration-200 w-100 relative">
              <div className="card-body p-4 relative">
                {/* TrendingUp Icon on top left */}
                <TrendingUp
                  className="text-green-500 dark:text-green-300 mb-2 absolute top-2 left-2"
                  size={36}
                />
                {/* Total Profits text moved to top right */}
                <h6 className="font-bold absolute top-2 right-2">
                  Total Profits
                </h6>
                <div className="mt-10 text-left">
                  <h6 className="font-extrabold mb-0">
                    USD {profit.toLocaleString()}
                  </h6>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    <span className="text-green-600 dark:text-green-400 font-semibold">
                      ▲ {lastMonthPnl}%
                    </span>{" "}
                    last month
                  </p>
                  <p className="text-sm mt-1">
                    <span className="text-blue-600 dark:text-blue-400">
                      Total Inflow:
                    </span>{" "}
                    USD {totalInflow.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Total Expenses Card */}
          <div className="col-12 col-lg-4 d-flex justify-content-center">
            <div className="card hover:scale-105 transition-transform duration-200 w-100 relative">
              <div className="card-body p-4 relative">
                {/* TrendingDown Icon on top left */}
                <TrendingDown
                  className="text-red-500 dark:text-red-300 mb-2 absolute top-2 left-2"
                  size={36}
                />
                {/* Total Expenses text moved to top right */}
                <h6 className="font-bold absolute top-2 right-2">
                  Total Expenses
                </h6>
                <div className="mt-10 text-left">
                  <h6 className="font-extrabold mb-0">
                    USD {expenses.toLocaleString()}
                  </h6>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    <span className="text-red-600 dark:text-red-400 font-semibold">
                      ▼ {lastMonthPnl / 2}%
                    </span>{" "}
                    last month
                  </p>
                  <p className="text-sm mt-1">
                    <span className="text-red-600 dark:text-red-400">
                      Total Outflow:
                    </span>{" "}
                    USD {totalOutflow.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Account Selection Buttons */}
      <div className="row m-4 border border-gray-200 pt-2 ">
        {allAccounts.map((account) => (
          <div key={account.id} className="col-6 col-md-4 col-lg-3 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id={`account-${account.id}`}
                checked={selectedAccounts.includes(account.id)}
                onChange={() => toggleAccountSelection(account.id)}
              />
              <label
                className="form-check-label"
                htmlFor={`account-${account.id}`}
              >
                {account.name}
              </label>
            </div>
          </div>
        ))}
      </div>

      {/* Account Balance Cards */}
      <section className="row justify-content-center">
        {allAccounts
          .filter((account) => selectedAccounts.includes(account.id))
          .map((account) => (
            <div
              key={account.id}
              className="col-12 col-md-4 mb-4 d-flex justify-content-center"
            >
              <div
                className="card hover:scale-105 transition-transform duration-200"
                style={{ width: "18rem" }}
              >
                <div className="card-body px-3 py-3">
                  <div className="row">
                    <div className="col-md-4 col-lg-12 d-flex justify-content-start">
                      <DollarSign
                        className={`mb-2 ${
                          account.balance >= 0
                            ? "text-blue-500 dark:text-blue-300"
                            : "text-red-500 dark:text-red-300"
                        }`}
                        size={36}
                      />
                    </div>
                    <div className="col-md-8 col-lg-12">
                      <h6 className="text-muted font-semibold">
                        {account.name}
                      </h6>
                      <h6
                        className={`font-extrabold mb-0 ${
                          account.balance >= 0 ? "text-success" : "text-danger"
                        }`}
                      >
                        {account.currency} {account.balance.toLocaleString()}
                      </h6>
                      <span
                        className={
                          account.todaysChange >= 0
                            ? "text-success small"
                            : "text-danger small"
                        }
                      >
                        {account.todaysChange >= 0 ? "+" : ""}
                        {account.currency}{" "}
                        {account.todaysChange.toLocaleString()}
                      </span>
                      <div className="mt-2 flex items-center">
                        <LineChart
                          className="mr-1 text-gray-500 dark:text-gray-300"
                          size={20}
                        />
                        <span
                          className={`font-semibold ${
                            account.lastMonthPnl >= 0
                              ? "text-green-500 dark:text-green-300"
                              : "text-red-500 dark:text-red-300"
                          }`}
                        >
                          {account.lastMonthPnl}% last month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
}
