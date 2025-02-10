"use client"
import { useState } from "react"

const mockReports = [
  {
    transactionTime: "2023-01-01T12:00:00.000Z",
    date: "2023-01-01",
    amount: 100,
    fromAccount: "Savings",
    toAccount: "Checking",
  },
  {
    transactionTime: "2023-01-02T12:00:00.000Z",
    date: "2023-01-02",
    amount: 200,
    fromAccount: "Checking",
    toAccount: "Savings",
  },
]

export default function TransactionReportsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="page-heading m-4">
      <div className="page-title">
        <div className="row">
          <div className="col-12 col-md-6 order-md-1 order-last">
            <h3>Transaction Reports</h3>
            <p className="text-subtitle text-muted">Your transaction history</p>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="card">
          <div className="card-body">
            {mockReports.map((report, index) => (
              <div
                key={index}
                className={`card ${
                  hoveredIndex === index ? "border-primary" : "border-secondary"
                } mb-4`}
                style={{borderWidth: '1px'}}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="card-body">
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <div className="text-muted">
                        Date: {report.date} | Time: {report.transactionTime}
                      </div>
                      <div className="mt-2">
                        <strong>Amount: ${report.amount}</strong>
                        <br />
                        From: <span className="text-primary">{report.fromAccount}</span> 
                        To: <span className="text-success">{report.toAccount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}