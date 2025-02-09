import { HandCoins, Plus, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "../components/ui/button";
import DealsList from "../components/deals-list";
import Link from "next/link";

export default function DealsPage() {
    return (
        <div className="page-heading">
            <div className="page-title">
                <div className="row">
                    <div className="col-12 col-md-6 order-md-1 order-last">
                        <h3>Deals</h3>
                        <p className="text-subtitle text-muted">View and manage your crypto deals</p>
                    </div>
                    <div className="col-12 col-md-6 order-md-2 order-first">
                      <a href="/deals/new" className="btn btn-primary float-end inline-flex items-center">
                        <Plus className="mr-2 h-4 w-4" />
                        New Deal
                      </a>
                    </div>
                </div>
            </div>

            <section className="row">
                {/* Summary Cards */}
                <div className="col-12 col-lg-4">
                    <div className="card">
                        <div className="card-body px-4 py-4-5">
                            <div className="row">
                                <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                                    <HandCoins className="stats-icon purple mb-2" />
                                </div>
                                <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                                    <h6 className="text-muted font-semibold">Total Deals</h6>
                                    <h6 className="font-extrabold mb-0">1,234</h6>
                                    <small className="text-muted">+180 this month</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <div className="card">
                        <div className="card-body px-4 py-4-5">
                            <div className="row">
                                <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                                    <TrendingUp className="stats-icon green mb-2" />
                                </div>
                                <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                                    <h6 className="text-muted font-semibold">Profit</h6>
                                    <h6 className="font-extrabold mb-0 text-success">+$12,234</h6>
                                    <small className="text-muted">+10.1% from last month</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4">
                    <div className="card">
                        <div className="card-body px-4 py-4-5">
                            <div className="row">
                                <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                                    <TrendingDown className="stats-icon red mb-2" />
                                </div>
                                <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                                    <h6 className="text-muted font-semibold">Loss</h6>
                                    <h6 className="font-extrabold mb-0 text-danger">-$5,234</h6>
                                    <small className="text-muted">+5.1% from last month</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Active Deals</h4>
                            <p className="card-text">A list of your active deals including their status and progress.</p>
                        </div>
                        <div className="card-body">
                            <DealsList deals={[]} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}