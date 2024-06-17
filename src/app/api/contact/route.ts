import {createAirtableRecord} from '~/lib/airtable'

export async function POST (request: Request) {
  try {
    const body = await request.json()

    const record = await createAirtableRecord(body)

    if ('status' in record) {
      return Response.json(record, {
        status: 400,
      })
    }

    return Response.json(record)
  } catch (error) {
    return Response.json(error, {
      status: 500,
    })
  }
}
