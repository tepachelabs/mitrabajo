import {AIRTABLE_BASE_ID, AIRTABLE_TABLE_ID} from '~/lib/airtable/config'

export type WorkspaceConcern =
  | 'Despido repentino'
  | 'Falta de pago o pago incompleto'
  | 'Incuplimiento de contrato'
  | 'Otro'

export type BenefitsConcerns =
  | 'Pagos de salarios'
  | 'Prima vacacional'
  | 'Dias de descanso'
  | 'Condiciones en el contrato'
  | 'Condiciones de seguridad y/o salubridad en el trabajo'
  | 'Despido repentino'
  | 'Otro'

export interface FirstContactBody {
  Email: string,
  BenefitsConcerns: BenefitsConcerns[],
  WorkspaceConcerns: WorkspaceConcern[],
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

    if (!data.ok) {
      return {
        message: `Airtable with ID ${AIRTABLE_TABLE_ID}`,
        status: 'error',
      }
    }

    return await data.json()
  } catch (error) {
    return {
      message: `Airtable with ID ${AIRTABLE_TABLE_ID}`,
      status: 'error',
    }
  }
}
