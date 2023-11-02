"use client"
import Features from './components/Features/index';
import {NextUIProvider} from "@nextui-org/react";


export default function Home() {
  return (
    <NextUIProvider>
    <main>
      {/* <Banner /> */}
      {/* <People /> */}
      <Features />
      {/* <Business /> */}
      {/* <Payment /> */}
      {/* <Pricing /> */}
    </main>
    </NextUIProvider>
  )
}
