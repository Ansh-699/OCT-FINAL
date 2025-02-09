import type { Metadata } from "next"
import { DollarSign, Plus, PieChart, TrendingDown } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { ExpensesList } from "../components/expenses-list"
import { ExpensesChart } from "../components/expenses-chart"
import Link from "next/link"


export default function ExpensesPage() {
  return (
    <div className="page-heading">
      <div className="page-title">
        <div className="row">
          <div className="col-12 col-md-6 order-md-1 order-last">
            <h3>Expenses</h3>
            <p className="text-subtitle text-muted">Track and manage business expenses</p>
          </div>
          <div className="col-12 col-md-6 order-md-2 order-first">
            <Button asChild className="btn btn-primary float-end">
              <Link href="/expenses/add" className="flex items-center">
                <Plus className="mr-2 h-4 w-4" /> Add Expense
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="row">
          <div className="col-md-4">
            <Card className="card">
              <CardHeader className="card-header d-flex justify-content-between align-items-center">
                <CardTitle className="card-title">Total Expenses</CardTitle>
                <DollarSign className="card-header-icon" />
              </CardHeader>
              <CardContent className="card-body">
                <h6 className="text-muted">Total</h6>
                <div className="h3">$12,234</div>
                <p className="text-muted font-semibold">+$1,234 this month</p>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="card">
              <CardHeader className="card-header d-flex justify-content-between align-items-center">
                <CardTitle className="card-title">Monthly Change</CardTitle>
                <TrendingDown className="card-header-icon" />
              </CardHeader>
              <CardContent className="card-body">
                <h6 className="text-muted">Change</h6>
                <div className="h3 text-success">-5.2%</div>
                <p className="text-muted font-semibold">Compared to last month</p>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="card">
              <CardHeader className="card-header d-flex justify-content-between align-items-center">
                <CardTitle className="card-title">Categories</CardTitle>
                <PieChart className="card-header-icon" />
              </CardHeader>
              <CardContent className="card-body">
                <h6 className="text-muted">Active</h6>
                <div className="h3">8</div>
                <p className="text-muted font-semibold">Active expense categories</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <Card className="card">
              <CardHeader className="card-header">
                <CardTitle className="card-title">Expenses Overview</CardTitle>
                <CardDescription className="card-subtitle">Monthly expenses breakdown by category</CardDescription>
              </CardHeader>
              <CardContent className="card-body">
                <ExpensesChart />
              </CardContent>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="card">
              <CardHeader className="card-header">
                <CardTitle className="card-title">Recent Expenses</CardTitle>
                <CardDescription className="card-subtitle">Your recent expenses and their categories</CardDescription>
              </CardHeader>
              <CardContent className="card-body">
                <ExpensesList />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
