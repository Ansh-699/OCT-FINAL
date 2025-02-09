import type { Metadata } from "next"
import Link from "next/link"
import { Receipt, Plus, ArrowUpDown, ArrowDownUp } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { TransactionsList } from "../components/transactions-list"



export default function TransactionsPage() {
  return (
    <div className="page-heading">
      <div className="page-title">
        <div className="row">
          <div className="col-12 col-md-6 order-md-1 order-last">
            <h3>Transactions</h3>
            <p className="text-subtitle text-muted">View and manage all transactions</p>
          </div>
          <div className="col-12 col-md-6 order-md-2 order-first">
            <Link href="/transactions/new" className="btn btn-primary float-end">
              <Plus className="mr-2 h-4 w-4" />
              New Transaction
            </Link>
          </div>
        </div>
      </div>

      <section className="row">
        <div className="col-12 col-lg-4">
          <div className="card">
            <div className="card-body px-4 py-4-5">
              <div className="row">
                <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                  <Receipt className="stats-icon purple mb-2" />
                </div>
                <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                  <h6 className="text-muted font-semibold">Total Transactions</h6>
                  <h6 className="font-extrabold mb-0">2,234</h6>
                  <span className="text-success text-sm">+180 this month</span>
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
                  <ArrowDownUp className="stats-icon green mb-2" />
                </div>
                <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                  <h6 className="text-muted font-semibold">Money In</h6>
                  <h6 className="font-extrabold mb-0 text-success">+$12,234</h6>
                  <span className="text-success text-sm">+10.1% from last month</span>
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
                  <ArrowUpDown className="stats-icon red mb-2" />
                </div>
                <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                  <h6 className="text-muted font-semibold">Money Out</h6>
                  <h6 className="font-extrabold mb-0 text-danger">-$5,234</h6>
                  <span className="text-danger text-sm">+5.1% from last month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Recent Transactions</h4>
            <p className="card-text">A list of your recent transactions including their status.</p>
          </div>
          <div className="card-body">
            <TransactionsList />
          </div>
        </div>
      </section>
    </div>
  )
}
