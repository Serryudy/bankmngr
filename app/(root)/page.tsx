import React from 'react';
import HeaderBox from '@/components/ui/HeaderBox';
import TotalBalanaceBox from '@/components/ui/TotalBalanaceBox';

const HOME = () => {
    const loggedIn = {name:"pabasara"};
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
        </div>
    </section>    
  )
}

export default HOME