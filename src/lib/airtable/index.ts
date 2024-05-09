import {AIRTABLE_BASE_ID, AIRTABLE_TABLE_ID} from '~/lib/airtable/config'

export interface FirstContactBody {
  Email: string,
  BenefitsConcerns: string[],
  WorkspaceConcerns: string[],
  BriefConcern: string,
  ExpectedOutcome: string,
}

export const createAirtableRecord = async (body: FirstContactBody) => {
  try {
    const data = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`, {
      method: 'POST',
      body: JSON.stringify({
        fields: body,
      }),
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })

    return await data.json()
  } catch (error) {
    return null
  }
}
