import {createAirtableRecord} from '~/lib/airtable'

export async function POST (request: Request) {
  const body = await request.json()

  const record = await createAirtableRecord(body)

  return Response.json(record)
}
