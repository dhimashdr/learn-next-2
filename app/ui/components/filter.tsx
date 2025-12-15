'use server'

import { redirect } from "next/navigation"

export async function Hello(){
    return redirect('/hello')
}