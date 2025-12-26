'use client'

import { MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import { useDebouncedCallback } from 'use-debounce';

export default function Search(){
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((term : string) => {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('q', term)
        } else {
            params.delete('q')
        }
        replace(`${pathName}?${params.toString()}`)
    }, 500)

    return <div className="flex bg-slate-800  w-full rounded-3xl px-4 py-1 border-2 text-xs md:text-sm">
        <input placeholder="Search book by title..." type="text" onChange={(e) => handleSearch(e.target.value)} defaultValue={searchParams.get('q')?.toString()} className="border-slate-300 focus:ring-0 focus:outline-none focus:border-blue-300 flex-1/2"/>
        <MagnifyingGlassIcon className="w-5"/>
    </div>
}