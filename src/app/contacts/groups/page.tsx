import type { Metadata } from "next"


interface ContactGroup {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
}

const mockContactGroups: ContactGroup[] = [
  {
    id: "1",
    name: "Family",
    email: "family@example.com",
    phoneNumber: "123-456-7890",
  },
  {
    id: "2",
    name: "Friends",
    email: "friends@example.com",
    phoneNumber: "098-765-4321",
  },
  {
    id: "3",
    name: "Work",
    email: "work@example.com",
    phoneNumber: "111-222-3333",
  },
];

export default function ContactGroupsPage() {
  return (
    <div id="main">
      <header className="mb-3">
        <div className="col">
          <div className="col-12">
            <h1>Contact Groups</h1>
          </div>
        </div>
      </header>

      <section className="section d-flex justify-content-start">
        <div className="card" style={{width: "100%"}}>
          <div className="card-header">
            <h4 className="card-title">Contact Groups List</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mockContactGroups.map((group) => (
                    <tr key={group.id}>
                      <td>{group.name}</td>
                      <td>{group.email}</td>
                      <td>{group.phoneNumber}</td>
                      <td>
                        <button className="btn btn-danger">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
