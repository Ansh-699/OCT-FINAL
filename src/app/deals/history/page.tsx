"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const itemsPerPage = 5;

export default function DealHistoryPage() {
  const dealHistory = [
    { id: 1, date: "2023-12-28", description: "Initial Setup", amount: 5000, status: "Completed", active: true },
    { id: 2, date: "2024-01-05", description: "Marketing Campaign - Facebook Ads", amount: 1500, status: "Pending", active: true },
    { id: 3, date: "2024-01-12", description: "Software License Renewal", amount: 250, status: "Completed", active: false },
    { id: 4, date: "2024-01-19", description: "Consulting Services - Strategy", amount: 3000, status: "Completed", active: true },
    { id: 5, date: "2024-01-26", description: "Team Training Workshop", amount: 800, status: "Pending", active: true },
    { id: 6, date: "2024-02-02", description: "New Equipment Purchase", amount: 1200, status: "Completed", active: false },
    { id: 7, date: "2024-02-09", description: "Website Redesign Project", amount: 6000, status: "Completed", active: true },
    { id: 8, date: "2024-02-16", description: "Client Acquisition - Deal Signed", amount: 10000, status: "Pending", active: true },
    { id: 9, date: "2024-02-23", description: "Office Space Rent", amount: 2200, status: "Completed", active: false },
    { id: 10, date: "2024-03-01", description: "Employee Bonuses - Q1", amount: 7500, status: "Completed", active: true },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = dealHistory.slice(offset, offset + itemsPerPage);

  return (
    <motion.div
      className="page-heading m-4 "
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
              <table className="table table-striped" id="table1">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Active</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((deal, index) => (
                    <motion.tr
                      key={deal.id}
                      variants={fadeIn}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <td>{deal.date}</td>
                      <td>{deal.description}</td>
                      <td>${deal.amount.toLocaleString()}</td>
                      <td>{deal.status}</td>
                      <td>
                        {deal.active ? (
                          <FontAwesomeIcon icon={faCheckCircle} color="green" />
                        ) : (
                          <FontAwesomeIcon icon={faTimesCircle} color="red" />
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
              <ReactPaginate
                previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
                nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={Math.ceil(dealHistory.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                activeClassName={"active"}
                previousClassName={"page-item"}
                nextClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextLinkClassName={"page-link"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
