import type { Metadata } from "next";
import Link from "next/link";
import { Contact2, Plus, DollarSign } from "lucide-react";
import { Button } from "../components/ui/button";
import { ContactsList } from "../components/contacts-list";

export default function ContactsPage() {
  return (
    <div className="page-heading container mt-10 m-4 max-w-screen-xl mx-auto overflow-hidden overflow-x-hidden no-scrollbar">
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
      <section className="row">
        <div className="col-12 col-lg-4">
          <div className="card">
            <div className="card-body px-4 py-5">
              <div className="row">
                <div className="col-md-4 col-lg-12 d-flex justify-content-start">
                  <Contact2 className="stats-icon purple mb-2" />
                </div>
                <div className="col-md-8 col-lg-12">
                  <h6 className="text-muted font-semibold">Total Contacts</h6>
                  <h6 className="font-extrabold mb-0">2,350</h6>
                  <span className="text-success small">+180 this month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-12 col-lg-4">
          <div className="card">
            <div className="card-body px-4 py-5">
              <div className="row">
                <div className="col-md-4 col-lg-12 d-flex justify-content-start">
                  <DollarSign className="stats-icon blue mb-2" />
                </div>
                <div className="col-md-8 col-lg-12">
                  <h6 className="text-muted font-semibold">Active Balance</h6>
                  <h6 className="font-extrabold mb-0">$12,234</h6>
                  <span className="text-success small">+10.1% from last month</span>
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
