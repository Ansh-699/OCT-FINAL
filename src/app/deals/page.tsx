import { HandCoins, Plus, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "../components/ui/button";
import DealsList from "../components/deals-list";
import Link from "next/link";

export type Deal = {
    id: string;
    crypto: string;
    date: string;
    price: number;
    total: number;
    progress: number;
    amount: number;
    entryPrice: number;
    pair: string;
    targetPrice: number;
    stopLoss: number;
    status: string;
    dateOpened: string;
};

export default function DealsPage() {
        return (
                <div className="container-fluid">
                        <div className="page-heading">
                                <div className="page-title d-flex justify-content-between align-items-center">
                                        <div>
                                                <h3>Deals</h3>
                                                <p className="text-subtitle text-muted">View and manage your crypto deals</p>
                                        </div>
                                        <Link href="/deals/new" className="btn btn-primary d-flex align-items-center">
                                                <Plus className="me-2 h-4 w-4" />
                                                New Deal
                                        </Link>
                                </div>
                        </div>

                        <section className="row">
                                {/* Summary Cards */}
                                <div className="col-lg-4 col-md-6">
                                        <div className="card shadow-sm">
                                                <div className="card-body d-flex align-items-center">
                                                        <HandCoins className="text-primary me-3" size={40} />
                                                        <div>
                                                                <h6 className="text-muted">Total Deals</h6>
                                                                <h4 className="mb-0">1,234</h4>
                                                                <small className="text-success">+180 this month</small>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                        <div className="card shadow-sm">
                                                <div className="card-body d-flex align-items-center">
                                                        <TrendingUp className="text-success me-3" size={40} />
                                                        <div>
                                                                <h6 className="text-muted">Profit</h6>
                                                                <h4 className="text-success mb-0">+$12,234</h4>
                                                                <small className="text-success">+10.1% from last month</small>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                        <div className="card shadow-sm">
                                                <div className="card-body d-flex align-items-center">
                                                        <TrendingDown className="text-danger me-3" size={40} />
                                                        <div>
                                                                <h6 className="text-muted">Loss</h6>
                                                                <h4 className="text-danger mb-0">-$5,234</h4>
                                                                <small className="text-danger">+5.1% from last month</small>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </section>

                        <section className="row mt-4">
                                <div className="col-12">
                                        <div className="card shadow-sm bg-light">
                                            <div className="card-header bg-primary text-white">
                                            <h4 className="mb-0">Active Deals</h4>
                                            <p className="text-white-50">A list of your active deals including their status and progress.</p>
                                            </div>
                                                <div className="card-body">
                                                <DealsList deals={[
                                                {
                                                    id: "1",
                                                    crypto: "Bitcoin",
                                                    pair: "BTC/USD",
                                                    amount: 0.5,
                                                    entryPrice: 27000,
                                                    targetPrice: 30000,
                                                    stopLoss: 26500,
                                                    status: "pending",
                                                    dateOpened: "2024-01-20",
                                                    date: "2024-01-20",
                                                    price: 27500,
                                                    total: 13750,
                                                    progress: 50,
                                                },
                                                {
                                                    id: "2",
                                                    crypto: "Ethereum",
                                                    pair: "ETH/USD",
                                                    amount: 1,
                                                    entryPrice: 1800,
                                                    targetPrice: 2000,
                                                    stopLoss: 1750,
                                                    status: "pending",
                                                    dateOpened: "2024-01-22",
                                                    date: "2024-01-22",
                                                    price: 1850,
                                                    total: 1850,
                                                    progress: 75,
                                                },
                                                {
                                                    id: "3",
                                                    crypto: "Litecoin",
                                                    pair: "LTC/USD",
                                                    amount: 5,
                                                    entryPrice: 80,
                                                    targetPrice: 90,
                                                    stopLoss: 78,
                                                    status: "completed",
                                                    dateOpened: "2024-01-15",
                                                    date: "2024-01-15",
                                                    price: 85,
                                                    total: 425,
                                                    progress: 100,
                                                },
                                                ]} />
                                                </div>
                                        </div>
                                    </div>
                        </section>
                </div>
        );
}
