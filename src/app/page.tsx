"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import Styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/search');
  }, []);

  return (
    <main className={Styles.main}>
      <div className={Styles.imageContainer}>
        <Image src="/taxilogo.png" alt="Application Taxi Logo" fill />
      </div>
    </main>
  );
}
