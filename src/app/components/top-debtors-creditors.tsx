import React, { useState, useMemo, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faSort } from "@fortawesome/free-solid-svg-icons";

interface Column<T> {
  header: string;
  accessor: keyof T;
  formatter?: (value: any, row: T) => React.ReactNode;
  cellClass?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  title: string;
  titleClass: string;
}

function DataTable<T extends { [key: string]: any }>({
  data,
  columns,
  title,
  titleClass,
}: DataTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'asc' | 'desc' } | null>(null);

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    return data.filter((row) =>
      Object.values(row)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data]);

  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData;
    return [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortConfig]);

  const totalEntries = sortedData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * entriesPerPage;
    return sortedData.slice(start, start + entriesPerPage);
  }, [currentPage, entriesPerPage, sortedData]);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handleSort = (key: keyof T) => {
    setSortConfig((prev) => {
      if (prev && prev.key === key) {
        return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  };

  // Reset current page when entriesPerPage or searchTerm changes
  useEffect(() => {
    setCurrentPage(1);
  }, [entriesPerPage, searchTerm]);

  return (
    <div className="mb-4">
      <h5 className={titleClass}>{title}</h5>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div>
          {" "}
          <select
            className="form-select d-inline-block w-auto"
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
          >
            {[5, 10, 15, 20].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>{" "}
          
        </div>
        <div className="d-flex justify-content-end">
          <div className="me-2 mt-2">
            Search:{" "}
          </div>
          <input
            type="text"
            className="form-control d-inline-block w-50"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
            </div>
            <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-light">
            <tr>
              {columns.map((col, index) => (
          <th key={index} onClick={() => handleSort(col.accessor)}>
            {col.header} <FontAwesomeIcon icon={faSort} />
          </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {columns.map((col, colIndex) => (
                    <td key={colIndex} className={col.cellClass || ""}>
                      {col.formatter
                        ? col.formatter(row[col.accessor], row)
                        : row[col.accessor]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
        <span className="mx-2">
            Page {currentPage} of {totalPages}
          </span>
        </div>
        <div>
            <button
            className="btn btn-primary btn-sm ms-2"
            onClick={handlePrev}
            disabled={currentPage === 1}
            >
            <FontAwesomeIcon icon={faArrowLeft} /> 
            </button>
            
            <button
            className="btn btn-primary btn-sm ms-2"
            onClick={handleNext}
            disabled={currentPage === totalPages || totalPages === 0}
            >
             <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
      </div>
    </div>
  );
}

export function TopDebtorsCreditors() {
  const debtorColumns = [
    {
      header: "Name",
      accessor: "name" as const,
      cellClass: "text-bold-500",
    },
    {
      header: "Amount",
      accessor: "amount" as const,
      formatter: (value: number) => `$${value.toLocaleString()}`,
      cellClass: "text-danger",
    },
    {
      header: "Currency",
      accessor: "currency" as const,
    },
    {
      header: "Date",
      accessor: "date" as const,
    },
  ];

  const creditorColumns = [
    {
      header: "Name",
      accessor: "name" as const,
      cellClass: "text-bold-500",
    },
    {
      header: "Amount",
      accessor: "amount" as const,
      formatter: (value: number) => `$${value.toLocaleString()}`,
      cellClass: "text-success",
    },
    {
      header: "Currency",
      accessor: "currency" as const,
    },
    {
      header: "Date",
      accessor: "date" as const,
    },
  ];

  return (
    <div className="row m-4">
      <div className="col-md-6">
        <DataTable
          data={mockDebtors}
          columns={debtorColumns}
          title="Top Debtors"
          titleClass="text-danger"
        />
      </div>
      <div className="col-md-6">
        <DataTable
          data={mockCreditors}
          columns={creditorColumns}
          title="Top Creditors"
          titleClass="text-success"
        />
      </div>
    </div>
  );
}

// Mock data arrays below
const mockDebtors = [
  { name: "John Doe", amount: 1000, currency: "USD", date: "2023-01-01" },
  { name: "Jane Smith", amount: 2000, currency: "USD", date: "2023-01-02" },
  { name: "Michael Brown", amount: 3500, currency: "USD", date: "2023-01-05" },
  { name: "Sarah Davis", amount: 2800, currency: "USD", date: "2023-01-07" },
  { name: "David Miller", amount: 4200, currency: "USD", date: "2023-01-08" },
  { name: "Lisa Anderson", amount: 1800, currency: "USD", date: "2023-01-10" },
  { name: "James Wilson", amount: 3100, currency: "USD", date: "2023-01-12" },
  { name: "Emily Taylor", amount: 2600, currency: "USD", date: "2023-01-15" },
  { name: "Robert Martin", amount: 1900, currency: "USD", date: "2023-01-17" },
  { name: "Jennifer Lee", amount: 3300, currency: "USD", date: "2023-01-19" },
  { name: "William Clark", amount: 2700, currency: "USD", date: "2023-01-21" },
  { name: "Patricia White", amount: 3900, currency: "USD", date: "2023-01-23" },
];

const mockCreditors = [
  { name: "Alice Johnson", amount: 1500, currency: "USD", date: "2023-01-03" },
  { name: "Bob Wilson", amount: 2500, currency: "USD", date: "2023-01-04" },
  { name: "Carol Thomas", amount: 4000, currency: "USD", date: "2023-01-06" },
  { name: "Daniel Harris", amount: 3200, currency: "USD", date: "2023-01-09" },
  { name: "Emma Garcia", amount: 2900, currency: "USD", date: "2023-01-11" },
  { name: "Frank Martinez", amount: 3700, currency: "USD", date: "2023-01-13" },
  { name: "Grace Rodriguez", amount: 2100, currency: "USD", date: "2023-01-14" },
  { name: "Henry Lopez", amount: 3400, currency: "USD", date: "2023-01-16" },
  { name: "Isabel Young", amount: 2300, currency: "USD", date: "2023-01-18" },
  { name: "Kevin King", amount: 3800, currency: "USD", date: "2023-01-20" },
  { name: "Lucy Baker", amount: 2400, currency: "USD", date: "2023-01-22" },
  { name: "Mark Scott", amount: 3600, currency: "USD", date: "2023-01-24" },
];