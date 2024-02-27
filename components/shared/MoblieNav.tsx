import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from '../ui/separator'
import NavItems from './NavItems'
  

const MoblieNav = () => {
  return (
    <nav className='md:hidden'>
        <Sheet>
            <SheetTrigger className='align-middle'>
                <Image
                src="/assets/icons/menu.svg"
                alt='menu'
                width={24}
                height={24}
                className='cursor-pointer'
                />
            </SheetTrigger>
            <SheetContent className='flex flex-col gap-6 bg-purple-200 md:hidden'>
               <Image src="/assets/images/logo.svg"
               alt="logo"
               width={128}
               height={38}
               />
               <Separator className='border border-gray-400'/>
               <NavItems/>

            </SheetContent>
        </Sheet>


    </nav>
  )
}

export default MoblieNav