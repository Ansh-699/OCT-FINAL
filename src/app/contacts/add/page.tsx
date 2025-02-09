import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Add Contact",
  description: "Add a new contact to the system",
}

export default function AddContactPage() {
  return (
    <div id="main">
      <div className="page-heading">
        <div className="page-title">
          <div className="row">
            <div className="col-12 col-md-6 order-md-1 order-last">
              <h3>Add New Contact</h3>
              <p className="text-subtitle text-muted">Add a new contact to the system</p>
            </div>
          </div>
        </div>

        <section className="section col-md-5">
          <div className="card">
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="uniqueId">Unique ID</label>
                      <input
                        type="text"
                        id="uniqueId"
                        className="form-control"
                        placeholder="Enter unique ID"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        placeholder="Enter name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        className="form-control"
                        placeholder="Enter phone number"
                      />
                    </div>

                    <div className="form-group">
                      <button type="submit" className="btn btn-primary me-1 mb-1">
                        Add Contact
                      </button>
                      <button type="reset" className="btn btn-light-secondary me-1 mb-1">
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
