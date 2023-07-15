import Image from "next/image";
import { useState, useEffect } from "react";

import Layout from "@/components/Layout";
import PumpOperator from "@/components/PumpOperator";
import WUC from "@/components/WUC";

export default function Home() {
  const [userRole, setUserRole] = useState("pumpOperator");

  return (
    <Layout>
      <header className="py-10 bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Welcome, {userRole}
          </h1>
        </div>
      </header>
      <main className="">
        {userRole === "pumpOperator" && <PumpOperator />}
        {userRole === "WUC" && <WUC />}
      </main>
    </Layout>
  );
}
