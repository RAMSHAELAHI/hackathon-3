/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { createClient } from 'next-sanity'
import { defineCliConfig } from 'sanity/cli'
export const client = createClient({
    projectId: "2r79i5c8" ,
    dataset:" production",
    apiVersion:"v2025-1-18",
    useCdn: false,
    token: process.env.SANITY_TOKEN,
})


