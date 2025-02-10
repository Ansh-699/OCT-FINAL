import Link from 'next/link';

export default function DealsPage() {
    return (
        <div className="container ml-2 ">
            <div className="page-heading">
                <div className="page-title d-flex justify-content-between align-items-center">
                    <div>
                        <h3>Deals</h3>
                        <p className="text-subtitle text-muted">View and manage your crypto deals</p>
                    </div>
                    <Link href="/deals/new" className="btn btn-primary d-flex align-items-center">
                        <svg className="me-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        New Deal
                    </Link>
                </div>
            </div>

            <section className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="card shadow-sm">
                        <div className="card-body d-flex align-items-center">
                            <svg className="text-primary me-3" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
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
                            <svg className="text-success me-3" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
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
                            <svg className="text-danger me-3" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
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
                    <div className="card shadow-sm ">
                        <div className="card-header bg-primary text-white">
                            <h4 className="mb-0">Active Deals</h4>
                            <p className="text-white-50">A list of your active deals including their status and progress.</p>
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                {[{
                                    id: "1",
                                    crypto: "Bitcoin",
                                    pair: "BTC/USD",
                                    amount: 0.5,
                                    entryPrice: 27000,
                                    targetPrice: 30000,
                                    stopLoss: 26500,
                                    status: "pending",
                                    dateOpened: "2024-01-20",
                                    price: 27500,
                                    total: 13750,
                                    progress: 50,
                                }, {
                                    id: "2",
                                    crypto: "Ethereum",
                                    pair: "ETH/USD",
                                    amount: 1,
                                    entryPrice: 1800,
                                    targetPrice: 2000,
                                    stopLoss: 1750,
                                    status: "pending",
                                    dateOpened: "2024-01-22",
                                    price: 1850,
                                    total: 1850,
                                    progress: 75,
                                }, {
                                    id: "3",
                                    crypto: "Litecoin",
                                    pair: "LTC/USD",
                                    amount: 5,
                                    entryPrice: 80,
                                    targetPrice: 90,
                                    stopLoss: 78,
                                    status: "completed",
                                    dateOpened: "2024-01-15",
                                    price: 85,
                                    total: 425,
                                    progress: 100,
                                }].map(deal => (
                                    <li key={deal.id} className="list-group-item d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6>{deal.crypto} ({deal.pair})</h6>
                                            <p className="mb-0 text-muted">Entry: ${deal.entryPrice} | Target: ${deal.targetPrice} | Stop: ${deal.stopLoss}</p>
                                            <small className="text-muted">Opened: {deal.dateOpened} | Status: {deal.status}</small>
                                        </div>
                                        <span className={`badge bg-${deal.status === "completed" ? "success" : "warning"}`}>{deal.progress}%</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
