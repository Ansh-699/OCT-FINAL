"use client";

import { useEffect, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { BalanceBoxes } from "./components/balance-boxes";
import { FinancialCharts } from "./components/financial-charts";
import { TopDebtorsCreditors } from "./components/top-debtors-creditors";

export default function DashboardPage() {
    const [selectedDate, setSelectedDate] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const datepicker = flatpickr("#datepicker-button", {
            dateFormat: "m/d/Y",
            onChange: (_, dateStr) => setSelectedDate(dateStr),
        });

        return () => {
            if (Array.isArray(datepicker)) {
                datepicker.forEach(instance => instance.destroy());
            } else {
                datepicker.destroy();
            }
        };
    }, []);
    return (
        <div className="space-y-6 p-6 md:p-10 max-w-screen-xl mx-auto overflow-hidden overflow-x-hidden text-start">
            <div className="flex justify-end m-5 p-4 relative text-start">
                <button
                    id="datepicker-button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="btn btn-primary"
                >
                    {selectedDate ? `Selected: ${selectedDate}` : "Select Date Range"}
                </button>
                {isDropdownOpen && (
                    <div className="dropdown-menu show absolute right-0 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                            <button
                                onClick={() => {
                                    const today = new Date();
                                    setSelectedDate(today.toLocaleDateString());
                                    setIsDropdownOpen(false);
                                }}
                                className="dropdown-item text-xs hover:bg-[#7367F0] hover:text-white"
                            >
                                Today
                            </button>
                            <button
                                onClick={() => {
                                    const lastYear = new Date();
                                    lastYear.setFullYear(lastYear.getFullYear() - 1);
                                    setSelectedDate(lastYear.toLocaleDateString());
                                    setIsDropdownOpen(false);
                                }}
                                className="dropdown-item text-xs hover:bg-[#7367F0] hover:text-white"
                            >
                                Last Year
                            </button>
                            <button
                                onClick={() => {
                                    const end = new Date();
                                    const start = new Date();
                                    start.setDate(start.getDate() - 6);
                                    setSelectedDate(
                                        `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`
                                    );
                                    setIsDropdownOpen(false);
                                }}
                                className="dropdown-item text-xs hover:bg-[#7367F0] hover:text-white"
                            >
                                Last 7 Days
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div>
                <BalanceBoxes />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <FinancialCharts />
            </div>

            <TopDebtorsCreditors />
        </div>
    );
}
