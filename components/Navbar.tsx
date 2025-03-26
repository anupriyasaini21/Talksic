import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex justify-between fixed z-50 w-full bg-[#1C1F2E] px-6 py-4 lg:px-10'>
      <Link href="/" className='flex item gap-1'>
      <Image src='/icons/logo.svg' alt='TALKSIC Logo' width={32} height={32}
      className='max-sm:size-10 cursor-pointer'
      />
      <p className='text-[26px] font-extrabold text-white max-sm:hidden'>TALKSIC</p>
      </Link>

      <div className='flex-between gap-5'>

       
<SignedIn>
  <UserButton />
</SignedIn>

          <MobileNav/>
      </div>

    </nav>
  ) 
}

export default Navbar