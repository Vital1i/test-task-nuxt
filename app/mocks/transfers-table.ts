import type { TransferTableTab, TransferTableColumn } from '@/types/transfers'

export const TRANSFER_TABS: TransferTableTab[] = [
  { key: 'all', label: 'All' },
  { key: 'Wire', label: 'Wire' },
  { key: 'ACH', label: 'ACH' }
]

export const TRANSFER_COLUMNS: TransferTableColumn[] = [
  { key: 'date', label: 'Date', align: 'left' },
  { key: 'type', label: 'Type', align: 'left' },
  { key: 'method', label: 'Method', align: 'left' },
  { key: 'account', label: 'Account', align: 'left' },
  { key: 'amount', label: 'Amount ($)', align: 'left' },
  { key: 'status', label: 'Status', align: 'center' }
]

