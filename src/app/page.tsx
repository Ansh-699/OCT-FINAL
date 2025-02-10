"use client" // Client Component

import { DateRangeSelector } from "./components/date-range-selector";
import { BalanceBoxes } from "./components/balance-boxes";
import { FinancialCharts } from "./components/financial-charts";
import { TopDebtorsCreditors } from "./components/top-debtors-creditors";

export default function DashboardPage() {
    return (
        <div className="flex-1 space-y-6 p-6 m-4 md:p-10 max-w-screen-xl mx-auto section overflow-hidden overflow-x-hidden">
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
