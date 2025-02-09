import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function RecentTransactions() {
  return (
    <div className="card">
      <div className="card-header">
        <h4>Recent Transactions</h4>
      </div>
      <div className="card-content pb-4">
        {/* Transaction items */}
        <div className="recent-message d-flex px-4 py-3">
          <Avatar className="avatar">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="name ms-4">
            <h5 className="mb-1">Olivia Martin</h5>
            <small className="text-muted">BTC Purchase</small>
          </div>
          <div className="ms-auto text-success">+$1,999.00</div>
        </div>

        <div className="recent-message d-flex px-4 py-3">
          <Avatar className="avatar">
            <AvatarImage src="/avatars/02.png" alt="Avatar" />
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
          <div className="name ms-4">
            <h5 className="mb-1">Jackson Lee</h5>
            <small className="text-muted">ETH Sale</small>
          </div>
          <div className="ms-auto text-success">+$39.00</div>
        </div>

        <div className="recent-message d-flex px-4 py-3">
          <Avatar className="avatar">
            <AvatarImage src="/avatars/03.png" alt="Avatar" />
            <AvatarFallback>IN</AvatarFallback>
          </Avatar>
          <div className="name ms-4">
            <h5 className="mb-1">Isabella Nguyen</h5>
            <small className="text-muted">USDT Transfer</small>
          </div>
          <div className="ms-auto text-success">+$299.00</div>
        </div>

        <div className="recent-message d-flex px-4 py-3">
          <Avatar className="avatar">
            <AvatarImage src="/avatars/04.png" alt="Avatar" />
            <AvatarFallback>WK</AvatarFallback>
          </Avatar>
          <div className="name ms-4">
            <h5 className="mb-1">William Kim</h5>
            <small className="text-muted">DOT Purchase</small>
          </div>
          <div className="ms-auto text-success">+$99.00</div>
        </div>

        <div className="recent-message d-flex px-4 py-3">
          <Avatar className="avatar">
            <AvatarImage src="/avatars/05.png" alt="Avatar" />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
          <div className="name ms-4">
            <h5 className="mb-1">Sofia Davis</h5>
            <small className="text-muted">BNB Sale</small>
          </div>
          <div className="ms-auto text-success">+$39.00</div>
        </div>
      </div>
    </div>
  )
}
