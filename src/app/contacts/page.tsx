import type { Metadata } from "next";
import Link from "next/link";
import { Contact2, Plus, DollarSign } from "lucide-react";
import { Button } from "../components/ui/button";
import { ContactsList } from "../components/contacts-list";
import { ArrowUpRight } from "lucide-react";

export default function ContactsPage() {
  return (
    <div className="m-4">
      {/* Header Section */}
      <div className="page-title">
        <div className="row">
          <div className="col-12 col-md-6 order-md-1 order-last">
            <h3>Contacts</h3>
            <p className="text-subtitle text-muted">Manage your contacts and their financial statements</p>
          </div>
          <div className="col-12 col-md-6 order-md-2 order-first">
            <Button asChild className="btn btn-primary float-end">
              <Link href="/contacts/add">
                <Plus className="mr-2 h-4 w-4" /> Add Contact
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <section className="row g-4 mb-4">
        <div className="col-12 col-lg-4">
          <div className="card shadow-sm hover:shadow-md transition-shadow">
        <div className="card-body p-4">
          <div className="d-flex align-items-center gap-4">
            <div className="rounded-circle bg-primary bg-opacity-10 p-3">
          <Contact2 className="h-6 w-6 text-primary" />
            </div>
            <div>
          <h6 className="text-muted font-semibold mb-1">Total Contacts</h6>
          <h4 className="font-extrabold mb-1">2,350</h4>
          <span className="text-success d-flex align-items-center">
            <ArrowUpRight className="h-2 w-2 mr-1" />
            +180 this month
          </span>
            </div>
          </div>
        </div>
          </div>
        </div>
        
        <div className="col-12 col-lg-4">
          <div className="card shadow-sm hover:shadow-md transition-shadow">
        <div className="card-body p-4">
          <div className="d-flex align-items-center gap-4">
            <div className="rounded-circle bg-success bg-opacity-10 p-3">
          <DollarSign className="h-6 w-6 text-success" />
            </div>
            <div>
          <h6 className="text-muted font-semibold mb-1">Active Balance</h6>
          <h4 className="font-extrabold mb-1">$12,234</h4>
          <span className="text-success d-flex align-items-center">
            <ArrowUpRight className="h-2 w-2 mr-1" />
            +10.1% from last month
          </span>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Contacts List */}
      <section className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">All Contacts</h4>
              <p className="card-text">A list of all your contacts including their name, balance, and transaction history.</p>
            </div>
            <div className="card-body">
              <ContactsList />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
