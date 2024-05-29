import React from 'react'
import { Dashboard } from './components/Dashboard'
import { SideNavPromo } from './components/SideNavPromo'
import { Wallet } from './components/Wallet'
import { SideNav } from './containers/SideNav'
import { TopNavbar } from './containers/TopNavBar'
import styles from './styles/App.module.scss'

function App() {

  return (
    <div className={styles.container}>
      <SideNav items={[
        <Wallet />,
        <SideNavPromo />
      ]} />
      <div className={styles.content}>
        <TopNavbar />
        <Dashboard />
      </div>
    </div>
  )
}

export default App
