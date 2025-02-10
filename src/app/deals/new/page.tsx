import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "New Deal",
  description: "Create a new deal",
}

export default function NewDealPage() {
  return (
    <div className="page-heading">
      <div className="page-title text-center">
        <h3>New Deal</h3>
        <p className="text-subtitle text-muted">Create a new deal entry</p>
      </div>

      <section className="section">
        <div className="d-flex justify-content-center">
          <div className="card" style={{ width: "50%" }}>
            <div className="card-header">
              <h4 className="card-title">Deal Details</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    className="form-control"
                    placeholder="Enter title"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    className="form-control"
                    placeholder="Enter description"
                    rows={3}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    type="number"
                    id="price"
                    className="form-control"
                    placeholder="Enter price"
                  />
                </div>

                <div className="form-group text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Create Deal
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
