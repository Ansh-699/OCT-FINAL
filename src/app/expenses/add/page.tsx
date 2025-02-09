import type { Metadata } from "next"



export default function AddExpensePage() {
  return (
    <div className="page-heading">
      <div className="page-title">
        <div className="row">
          <div className="col-12 col-md-6 order-md-1 order-last">
            <h3>Add New Expense</h3>
            <p className="text-subtitle text-muted">Enter expense details below</p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="grid-description">Description</label>
                <input 
                  className="form-control" 
                  id="grid-description" 
                  type="text" 
                  placeholder="Expense description" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="grid-amount">Amount</label>
                <input 
                  className="form-control" 
                  id="grid-amount" 
                  type="number" 
                  placeholder="Expense amount" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="grid-date">Date</label>
                <input 
                  className="form-control" 
                  id="grid-date" 
                  type="date" 
                />
              </div>

              <div className="form-group">
                <label htmlFor="grid-category">Category</label>
                <select className="form-select" id="grid-category">
                  <option>Food</option>
                  <option>Transportation</option>
                  <option>Entertainment</option>
                </select>
              </div>

              <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  Add Expense
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
