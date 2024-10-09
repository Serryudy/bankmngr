import React from 'react';
import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanaceBox from '@/components/ui/TotalBalanaceBox';
import RightSideBar from '@/components/ui/Rightsidebar';

const HOME = () => {
    const loggedIn = {firstName:"Pabasara", lastName:"Fernando", email:"somapalagala@gmail.com"};
  return (
    <section className="home">
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                type = "greeting"
                title = "welcome"
                user = {loggedIn?.name || "user"}
                subtext = "welcome to your banking"
                />
                <TotalBalanaceBox
                accounts = {[]}
                totalBanks = {1}
                totalCurrentBalance = {1250.98}
                />
            </header>
            RECENT TRANSACTIONS
        </div>
        <RightSideBar
          user={loggedIn}
          transactions={[]}
          banks={[{}, {}]}
        />
    </section>    
  )
}

export default HOME