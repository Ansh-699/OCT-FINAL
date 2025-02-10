"use client" // Client Component

import { useEffect, useState } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { BalanceBoxes } from "./components/balance-boxes";
import { FinancialCharts } from "./components/financial-charts";
import { TopDebtorsCreditors } from "./components/top-debtors-creditors";

export default function DashboardPage() {
    const [selectedDate, setSelectedDate] = useState("");
    useEffect(() => {
        interface FlatpickrInstance {
            destroy: () => void;
        }

        interface FlatpickrOptions {
            dateFormat: string;
            onChange: (selectedDates: Date[], dateStr: string) => void;
        }

        const datepicker = flatpickr("#datepicker-button", {
            dateFormat: "m/d/Y",
            onChange: (selectedDates: Date[], dateStr: string) => {
                setSelectedDate(dateStr);
            },
        });

        const destroyDatepicker = () => {
            if (Array.isArray(datepicker)) {
                datepicker.forEach(instance => instance.destroy());
            } else {
                datepicker.destroy();
            }
        };
    
        return () => destroyDatepicker(); // Cleanup on unmount
    }, []);
    

    return (
        <div className="flex-1 space-y-6 p-6 m-4 md:p-10 max-w-screen-xl mx-auto section overflow-hidden overflow-x-hidden">
            {/* Date Picker Button */}
            <div className="flex justify-end m-4">
                <button id="datepicker-button" className="px-4 py-2 bg-primary text-white rounded-md shadow-md">
                    {selectedDate ? `Selected: ${selectedDate}` : "Select Date"}
                </button>
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4">
                <h2 className="text-3xl font-bold tracking-tight m-4">Dashboard & Reporting Overview</h2>
            </div>
            <div className="">
                {/* Balance Boxes */}
                <BalanceBoxes />
            </div>

            {/* Charts Section */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <FinancialCharts />
            </div>

            {/* Debtors & Creditors */}
            <TopDebtorsCreditors />
        </div>
    );
}
