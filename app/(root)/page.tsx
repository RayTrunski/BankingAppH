import TotalBalanceBox from "@/components/TotalBalanceBox";
import HeaderBox from "@/components/ui/HeaderBox";
import React from "react";
import RightSidebar from "./RightSidebar";

const Home = () => {
  const loggedIn = {
    firstName: "Ray",
    lastName: "Saint",
    email: "saintviltrotskyray@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your accounts and transactions with ease"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[{}]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500.0 }]}
      />
    </section>
  );
};

export default Home;
