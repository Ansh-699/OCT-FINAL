import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Expense Categories",
  description: "Manage expense categories",
}

export default function ExpenseCategoriesPage() {
  return (
    <div className="page-heading">
      <div className="page-title">
        <div className="row">
          <div className="col-12 col-md-6 order-md-1 order-last">
            <h3>Expense Categories</h3>
            <p className="text-subtitle text-muted">Manage your expense categories</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="grid-category" className="form-label">
                  Category Name
                </label>
                <input
                  className="form-control"
                  id="grid-category"
                  type="text"
                  placeholder="Category name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="grid-parent-category" className="form-label">
                  Parent Category
                </label>
                <select className="form-select" id="grid-parent-category">
                  <option>USDT</option>
                  <option>AED</option>
                  <option>OTHER</option>
                  <option>CUSTOM</option>
                </select>
              </div>

              <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
