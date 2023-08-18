// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// const { Client } = require('pg')
import { Client } from 'pg'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query

  const question = query.q;

  console.log(question)


  res.status(200).json('aaa')
}

// npm i pg
// npm i --save-dev @types/pg
