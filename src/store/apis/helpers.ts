interface RequestProps {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: null | undefined | object;
  accessToken?: string;
}

const errorHandler = (response: Response): void => {
  if (response.status === 400) {
    throw new Error('400 Bad Request');
  }
  if (response.status === 401) {
    throw new Error('401 Unauthorized');
  }
  if (response.status === 403) {
    throw new Error('403 Forbidden');
  }
  if (response.status === 404) {
    throw new Error('404 Not found');
  }
  if (response.status === 500) {
    throw new Error('500 Internal Server Error');
  }
  if (response.status === 502) {
    throw new Error('502 Bad Gateway');
  }
  if (response.status === 504) {
    throw new Error('504 Gateway Timeout');
  }
};

export const request = async ({
  url,
  method,
  body,
  accessToken,
}: RequestProps): Promise<any> => {
  try {
    const response: Response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    errorHandler(response);

    const data: any = await response.json();

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
