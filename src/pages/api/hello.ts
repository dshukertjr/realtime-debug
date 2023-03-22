// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// const { Client } = require('pg')
import { Client } from 'pg'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = new Client({
    connectionString:
      'postgres://postgres:XufJQPLy4urhXZb8@db.nlbsnpoablmsxwkdbmer.supabase.co:6543/postgres',
  })
  await client.connect()

  const response = await client.query(`
select
  table_schema,
  table_name,
  column_name,
  udt_name,
  column_default,
  is_nullable,
  identity_generation,
  character_maximum_length
from information_schema.columns
where table_schema = 'public';
`)

  console.log(response.rows) // Will contain list of columns as JSON

  await client.end()

  res.status(200).json(response.rows)
}

// npm i pg
// npm i --save-dev @types/pg
