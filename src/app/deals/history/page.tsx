"use client";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export default function DealHistoryPage() {
  // Mock deal history data remains the same
  const dealHistory = [
    { id: 1, date: "2023-12-28", description: "Initial Setup", amount: 5000 },
    { id: 2, date: "2024-01-05", description: "Marketing Campaign - Facebook Ads", amount: 1500 },
    { id: 3, date: "2024-01-12", description: "Software License Renewal", amount: 250 },
    { id: 4, date: "2024-01-19", description: "Consulting Services - Strategy", amount: 3000 },
    { id: 5, date: "2024-01-26", description: "Team Training Workshop", amount: 800 },
    { id: 6, date: "2024-02-02", description: "New Equipment Purchase", amount: 1200 },
    { id: 7, date: "2024-02-09", description: "Website Redesign Project", amount: 6000 },
    { id: 8, date: "2024-02-16", description: "Client Acquisition - Deal Signed", amount: 10000 },
    { id: 9, date: "2024-02-23", description: "Office Space Rent", amount: 2200 },
    { id: 10, date: "2024-03-01", description: "Employee Bonuses - Q1", amount: 7500 },
  ];

  return (
    <motion.div
      className="page-heading"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <div className="page-title">
        <div className="row">
          <div className="col-12 col-md-6 order-md-1 order-last">
            <h3>Deal History</h3>
            <p className="text-subtitle text-muted">Your transaction history</p>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover table-lg">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {dealHistory.map((deal, index) => (
                    <motion.tr
                      key={deal.id}
                      variants={fadeIn}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <td className="col-3">{deal.date}</td>
                      <td className="col-6">{deal.description}</td>
                      <td className="col-3">${deal.amount.toLocaleString()}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
