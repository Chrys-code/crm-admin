interface RequestProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: null | undefined | object;
  accessToken?: string;
}

const errorHandler = (response: Response): void => {
  if (response.status === 400) {
    throw new Error(`400 Bad Request, response: ${response}`);
  }
  if (response.status === 401) {
    throw new Error(`401 Unauthorized, response: ${response}`);
  }
  if (response.status === 403) {
    throw new Error(`403 Forbidden, response: ${response}`);
  }
  if (response.status === 404) {
    throw new Error(`404 Not found, response: ${response}`);
  }
  if (response.status === 500) {
    throw new Error(`500 Internal Server Error, response: ${response}`);
  }
  if (response.status === 502) {
    throw new Error(`502 Bad Gateway, response: ${response}`);
  }
  if (response.status === 504) {
    throw new Error(`504 Gateway Timeout, response: ${response}`);
  }
};

export const request = async ({
  url,
  method,
  body,
}: RequestProps): Promise<any> => {
  try {
    const accessToken: string | null = localStorage.getItem('accessToken');
    const response: Response = await fetch(url, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    errorHandler(response);

    const data: any = await response.json();

    return data;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};
