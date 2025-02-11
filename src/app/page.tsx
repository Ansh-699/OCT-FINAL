"use client";

import { useEffect, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { BalanceBoxes } from "./components/balance-boxes";
import { FinancialCharts } from "./components/financial-charts";
import { TopDebtorsCreditors } from "./components/top-debtors-creditors";

export default function DashboardPage() {
    const [selectedDate, setSelectedDate] = useState("");
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
            <div className="flex justify-center m-4">
                <button
                    id="datepicker-button"
                    className="px-4 py-2 bg-primary text-white rounded-md shadow-md"
                >
                    {selectedDate ? `Selected: ${selectedDate}` : "Select Date"}
                </button>
            </div>

            <div className="flex flex-col items-center space-y-8">
                <h2 className="text-3xl font-bold tracking-tight m-4">
                    Dashboard & Reporting Overview
                </h2>
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
