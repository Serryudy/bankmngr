'use client'
import React from 'react'
import Image from 'next/image'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
  

const Mobilenav = ({user}:MobileNavProps) => {
    const pathname = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
        <SheetTrigger>
            <Image src="/icons/hamburger.svg" alt="menu" width={30} height={30} className='cursor-pointer'/>
        </SheetTrigger>
        <SheetContent side="left" className='border-none bg-white'>
            <Link href={'/'} className='cursor-pointer flex items-center gap-2 px-4'>
                <Image 
                    src="/icons/logo.svg" 
                    alt="logo" 
                    width={34} 
                    height={34}
                    className='xize-[24px] max-xl:size-14'
                /> 
                <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
                  Horizon
                </h1>
            </Link>
            <div className='mobilenav-sheet'>
                <SheetClose asChild>
                    <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                        {sidebarLinks.map((items) => {
                            const isActive = pathname === items.route || pathname.startsWith(`${items.route}/`)
                            return (
                                <SheetClose asChild key={items.label}>
                                    <Link href={items.route} key={items.label} className={cn('mobilenav-sheet_close w-full', {'bg-bank-gradient': isActive})}>
                                    <Image 
                                    src={items.imgURL}
                                    alt={items.label}
                                    width={20}
                                    height={20}
                                    className={cn({'brightness-[3] invert-0':isActive})}
                                    />
                                <p className={cn('text-16 font-semibold text-black-2',{'text-white':isActive})}>
                                    {items.label}
                                </p>
                                </Link>
                                </SheetClose>
                            )
                            }
                        )}
                        USER
                    </nav>
                </SheetClose>
                FOOTER
            </div>
        </SheetContent>
        </Sheet>
    </section>
  )
}

export default Mobilenav