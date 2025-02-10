"use client";
import { useState } from "react";
import type { Metadata } from "next";

export default function CurrencySettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="page-heading m-4">
      <div className="page-title">
        <div className="row">
          <div className="col-12 col-md-6 order-md-1 order-last">
            <h3>Currency Settings</h3>
            <p className="text-subtitle text-muted">
              Configure your currency preferences and system settings
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div className="list-group">
                  <button
                    className={`list-group-item ${
                      activeTab === "general" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("general")}
                  >
                    General Settings
                  </button>
                  <button
                    className={`list-group-item ${
                      activeTab === "profile" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("profile")}
                  >
                    Profile
                  </button>
                  <button
                    className={`list-group-item ${
                      activeTab === "notifications" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("notifications")}
                  >
                    Notifications
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <div className="card">
              <div className="card-body">
                {activeTab === "general" && (
                  <div>
                    <h4 className="card-title">General Settings</h4>
                    <div className="form-group">
                      <label>Default Currency</label>
                      <select className="form-select">
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Date Format</label>
                      <select className="form-select">
                        <option>MM/DD/YYYY</option>
                        <option>DD/MM/YYYY</option>
                        <option>YYYY-MM-DD</option>
                      </select>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="automaticUpdates"
                      />
                      <label className="form-check-label" htmlFor="automaticUpdates">
                        Enable Automatic Updates
                      </label>
                    </div>
                  </div>
                )}

                {activeTab === "profile" && (
                  <div>
                    <h4 className="card-title">Profile Settings</h4>
                    <div className="form-group">
                      <label>Full Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>Bio</label>
                      <textarea className="form-control" rows={3}></textarea>
                    </div>
                  </div>
                )}

                {activeTab === "notifications" && (
                  <div>
                    <h4 className="card-title">Notification Preferences</h4>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="emailNotifications"
                      />
                      <label className="form-check-label" htmlFor="emailNotifications">
                        Email Notifications
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="pushNotifications"
                      />
                      <label className="form-check-label" htmlFor="pushNotifications">
                        Push Notifications
                      </label>
                    </div>
                  </div>
                )}

                <div className="mt-4">
                  <button className="btn btn-primary me-2">Save Changes</button>
                  <button className="btn btn-secondary">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
