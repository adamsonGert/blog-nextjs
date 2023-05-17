import { useState } from "react";
import { useRouter, Router } from 'next/router';
import Image from "next/image"
import Search from "./_child/search";
import Link from 'next/link'
import router from "next/router";
import ThemeToggle from "./_child/themeToggle";

export default function header() {
  return (
    <header className="bg-white dark:bg-slate-900">
        <div className="container mx-auto">
          <div className="border-b-[1px] py-5 flex flex-wrap items-center justify-between">
            <div className="flex flex-1">
              <Link href={"/"} className="font-bold dark:text-white flex items-center pr-5">
                  <span className="text-2xl">Botany.</span>
              </Link>
              <ThemeToggle />
              </div>
              <Search /> 
          </div>
        </div>
    </header>
  )
}
