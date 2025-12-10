import type { NavItem } from '@/types/layout'
import dashboardIcon from '@/../assets/img/dashboard.svg'
import positionsIcon from '@/../assets/img/positions.svg'
import analyticsIcon from '@/../assets/img/analytics.svg'
import transfersIcon from '@/../assets/img/transfers.svg'
import reportsIcon from '@/../assets/img/reports.svg'
import transactionsIcon from '@/../assets/img/transactions.svg'
import platformIcon from '@/../assets/img/platform.svg'
import referralsIcon from '@/../assets/img/referrals.svg'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', icon: dashboardIcon },
  { label: 'Positions', icon: positionsIcon },
  { label: 'Analytics', icon: analyticsIcon },
  { label: 'Transfers', icon: transfersIcon, active: true },
  { label: 'Reports', icon: reportsIcon },
  { label: 'Transactions', icon: transactionsIcon },
  { label: 'Platform', icon: platformIcon },
  { label: 'Referrals', icon: referralsIcon }
]

