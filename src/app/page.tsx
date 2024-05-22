'use client';

import Navbars from "./components/navbars";
import Styles from "./page.module.scss";
import { useState } from 'react';
import HomePage from "./pages/Home";


export default function Home() {
  const [residents, setResidents] = useState(false);

  const handleResident = () => {
    setResidents(true);
  };


  return (
    <>
      <div className={Styles.container}>
        <HomePage name='Dayvid' />
      </div>
    </>
  );
}
