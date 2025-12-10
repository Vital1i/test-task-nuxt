import type { Transfer, Account } from '@/types/transfers'

export const HEADER_TABS: readonly string[] = ['Overview', 'Deposit', 'Withdraw', 'History']

export const WEEKS: readonly string[] = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12']

export const BALANCES: readonly number[] = [22, 14, 26, 20, 23, 9, 25, 26, 24, 19, 27, 28]

export const WIRE_ACCOUNTS: Account[] = [
  { id: 'wire-1', name: 'BMO Harris Bank', last4: '6222' }
]

export const ACH_ACCOUNTS: Account[] = [
  { id: 'ach-1', name: 'Bank of America', last4: '3456' },
  { id: 'ach-2', name: 'Chase', last4: '1122' }
]

export const TRANSFERS: Transfer[] = [
  {
    id: 't-1',
    date: 'Nov 4, 2025 12:15 PM',
    type: 'Deposit',
    method: 'ACH',
    account: '****3456',
    amount: 40000,
    status: 'Pending'
  },
  {
    id: 't-2',
    date: 'Nov 3, 2025 4:16 PM',
    type: 'Withdrawal',
    method: 'Wire',
    account: '****6222',
    amount: -8888.08,
    status: 'Completed'
  },
  {
    id: 't-3',
    date: 'Nov 3, 2025 3:23 PM',
    type: 'Withdrawal',
    method: 'Wire',
    account: '****6222',
    amount: -8888.08,
    status: 'Rejected'
  }
]

