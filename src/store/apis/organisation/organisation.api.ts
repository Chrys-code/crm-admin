import { Organisation, NewOrganisation } from './organisation.types';
import { request } from '../helpers';

// const baseUrl: string | undefined = process.env.API_BASE_URL;
// const url: string = `${baseUrl}/organisation`;

const url = 'http://localhost:8080/organisation';

export const createOrganisationRequest = async (
  newOrganisation: NewOrganisation
): Promise<Organisation> =>
  await request({
    url: url,
    method: 'POST',
    body: newOrganisation,
  });

export const getOrganisationRequest = async (
  id: string
): Promise<Organisation> =>
  await request({
    url: `${url}/${id}`,
    method: 'GET',
  });

export const updateOrganisationRequest = async ({
  id,
  payload,
}: {
  id: string;
  payload: Organisation;
}): Promise<Organisation> =>
  await request({ url: `${url}?id=${id}`, method: 'PATCH', body: payload });
