import type { Metadata } from "next"
import { BarChart3, Plus, TrendingUp, TrendingDown } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { CurrenciesList } from "../components/currencies-list"
import { CurrencyChart } from "../components/currency-chart"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Currencies",
  description: "Manage cryptocurrencies and fiat currencies",
}

export default function CurrenciesPage() {
  return (
    <div className="page-heading">
      <div className="page-title">
        <div className="row">
          <div className="col-12 col-md-6 order-md-1 order-last">
            <h3>Currencies</h3>
            <p className="text-subtitle text-muted">Manage cryptocurrencies and fiat currencies</p>
          </div>
          <div className="col-12 col-md-6 order-md-2 order-first">
            <Button asChild className="btn btn-primary float-end">
              <Link href="/currencies/add" className="flex items-center">
                <Plus className="mr-2 h-4 w-4" /> Add Currency
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="row">
        <div className="col-12 col-lg-4">
          <Card className="card">
            <CardHeader className="card-header d-flex justify-content-between align-items-center">
              <CardTitle className="card-title">Active Currencies</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted" />
            </CardHeader>
            <CardContent className="card-body">
              <h6 className="text-muted">Total Active</h6>
              <div className="h2 mb-2">15</div>
              <p className="text-muted text-sm">8 crypto, 7 fiat</p>
            </CardContent>
          </Card>
        </div>

        <div className="col-12 col-lg-4">
          <Card className="card">
            <CardHeader className="card-header d-flex justify-content-between align-items-center">
              <CardTitle className="card-title">24h Volume</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted" />
            </CardHeader>
            <CardContent className="card-body">
              <h6 className="text-muted">Total Volume</h6>
              <div className="h2 mb-2">$1.2M</div>
              <p className="text-success text-sm">+12.3% from yesterday</p>
            </CardContent>
          </Card>
        </div>

        <div className="col-12 col-lg-4">
          <Card className="card">
            <CardHeader className="card-header d-flex justify-content-between align-items-center">
              <CardTitle className="card-title">Price Changes</CardTitle>
              <TrendingDown className="h-4 w-4 text-muted" />
            </CardHeader>
            <CardContent className="card-body">
              <h6 className="text-muted">Average Change</h6>
              <div className="h2 mb-2 text-success">+2.5%</div>
              <p className="text-muted text-sm">Average 24h change</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="row">
        <div className="col-12 col-lg-8">
          <Card className="card">
            <CardHeader className="card-header">
              <CardTitle className="card-title">Price Chart</CardTitle>
              <CardDescription className="text-subtitle text-muted">24-hour price movement for major currencies</CardDescription>
            </CardHeader>
            <CardContent className="card-body">
              <CurrencyChart />
            </CardContent>
          </Card>
        </div>

        <div className="col-12 col-lg-4">
          <Card className="card">
            <CardHeader className="card-header">
              <CardTitle className="card-title">Currency List</CardTitle>
              <CardDescription className="text-subtitle text-muted">All supported currencies and their current status</CardDescription>
            </CardHeader>
            <CardContent className="card-body">
              <CurrenciesList />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
