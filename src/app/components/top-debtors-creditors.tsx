import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
const mockDebtors = [
  { name: "John Doe", amount: 1000, currency: "USD", date: "2023-01-01" },
  { name: "Jane Smith", amount: 2000, currency: "USD", date: "2023-01-02" },
  { name: "Michael Brown", amount: 3500, currency: "USD", date: "2023-01-05" },
  { name: "Sarah Davis", amount: 2800, currency: "USD", date: "2023-01-07" },
  { name: "David Miller", amount: 4200, currency: "USD", date: "2023-01-08" },
  { name: "Lisa Anderson", amount: 1800, currency: "USD", date: "2023-01-10" },
  { name: "James Wilson", amount: 3100, currency: "USD", date: "2023-01-12" },
  { name: "Emily Taylor", amount: 2600, currency: "USD", date: "2023-01-15" },
  { name: "Robert Martin", amount: 1900, currency: "USD", date: "2023-01-17" },
  { name: "Jennifer Lee", amount: 3300, currency: "USD", date: "2023-01-19" },
  { name: "William Clark", amount: 2700, currency: "USD", date: "2023-01-21" },
  { name: "Patricia White", amount: 3900, currency: "USD", date: "2023-01-23" }
];

const mockCreditors = [
  { name: "Alice Johnson", amount: 1500, currency: "USD", date: "2023-01-03" },
  { name: "Bob Wilson", amount: 2500, currency: "USD", date: "2023-01-04" },
  { name: "Carol Thomas", amount: 4000, currency: "USD", date: "2023-01-06" },
  { name: "Daniel Harris", amount: 3200, currency: "USD", date: "2023-01-09" },
  { name: "Emma Garcia", amount: 2900, currency: "USD", date: "2023-01-11" },
  { name: "Frank Martinez", amount: 3700, currency: "USD", date: "2023-01-13" },
  { name: "Grace Rodriguez", amount: 2100, currency: "USD", date: "2023-01-14" },
  { name: "Henry Lopez", amount: 3400, currency: "USD", date: "2023-01-16" },
  { name: "Isabel Young", amount: 2300, currency: "USD", date: "2023-01-18" },
  { name: "Kevin King", amount: 3800, currency: "USD", date: "2023-01-20" },
  { name: "Lucy Baker", amount: 2400, currency: "USD", date: "2023-01-22" },
  { name: "Mark Scott", amount: 3600, currency: "USD", date: "2023-01-24" }
];

export function TopDebtorsCreditors() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-4">
      {/* Debtors */}
      <Card className="card">
        <CardHeader className="card-header">
          <CardTitle className="card-title text-danger">Top 20 Debtors</CardTitle>
        </CardHeader>
        <CardContent className="card-body">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Currency</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {mockDebtors.map((debtor, index) => (
                  <tr key={index}>
                    <td className="text-bold-500">{debtor.name}</td>
                    <td className="text-danger">${debtor.amount}</td>
                    <td>{debtor.currency}</td>
                    <td>{debtor.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Creditors */}
      <Card className="card">
        <CardHeader className="card-header">
          <CardTitle className="card-title text-success">Top 20 Creditors</CardTitle>
        </CardHeader>
        <CardContent className="card-body">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Currency</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {mockCreditors.map((creditor, index) => (
                  <tr key={index}>
                    <td className="text-bold-500">{creditor.name}</td>
                    <td className="text-success">${creditor.amount}</td>
                    <td>{creditor.currency}</td>
                    <td>{creditor.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
