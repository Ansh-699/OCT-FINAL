import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Exchange Rates",
  description: "View and manage exchange rates",
}

export default function ExchangeRatesPage() {
  const exchangeRates = [
    { currency: "USD", rate: 1.0 },
    { currency: "EUR", rate: 0.85 },
    { currency: "GBP", rate: 0.72 },
    { currency: "JPY", rate: 110.33 },
  ];

  return (
    <div id="main">
      <div className="page-heading">
        <div className="page-title">
          <div className="row">
            <div className="col-12 col-md-6 order-md-1 order-last">
              <h3>Exchange Rates</h3>
              <p className="text-subtitle text-muted">Current exchange rates against USD</p>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="row">
            {exchangeRates.map((rate) => (
              <div key={rate.currency} className="col-12 col-md-6 col-lg-3">
                <div className="card">
                  <div className="card-body px-4 py-4-5">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="stats-icon purple">
                          {rate.currency}
                        </div>
                      </div>
                      <div className="col-md-8">
                        <h6 className="text-muted font-semibold">{rate.currency}/USD</h6>
                        <h6 className="font-extrabold mb-0">{rate.rate}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
