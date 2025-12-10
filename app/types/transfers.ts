export type TransferStatus = 'Pending' | 'Completed' | 'Rejected'
export type TransferMethod = 'Wire' | 'ACH'

export type Transfer = {
  id: string
  date: string
  type: string
  method: TransferMethod
  account: string
  amount: number
  status: TransferStatus
}

export type Account = {
  id: string
  name: string
  last4: string
}

export type TransferFilter = 'all' | TransferMethod

export type TransferTableColumn = {
  key: keyof Transfer | 'amount' | 'status'
  label: string
  align: 'left' | 'center' | 'right'
}

export type TransferTableTab = {
  key: TransferFilter
  label: string
}

