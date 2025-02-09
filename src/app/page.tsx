"use client" // Client Component

import { DateRangeSelector } from "./components/date-range-selector"
import { BalanceBoxes } from "./components/balance-boxes"
import { FinancialCharts } from "./components/financial-charts"
import { TopDebtorsCreditors } from "./components/top-debtors-creditors"

export default function DashboardPage() {
    return (
        <div className="flex-1 space-y-6 p-6 md:p-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard & Reporting Overview</h2>
                
                {/* Top Bar Icons & Controls */}
                <div className="flex justify-end items-end space-x-4 w-full md:w-auto">
                    <DateRangeSelector onDateChange={(range) => console.log(range)} />
                </div>
            </div>

            {/* Balance Boxes */}
            <BalanceBoxes />

            {/* Charts Section */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <FinancialCharts />
            </div>

            {/* Debtors & Creditors */}
            <TopDebtorsCreditors />
        </div>
    )
}
