import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import OrganisationRegisterModal from './features/organisation/components/registerModal';

function App({
  getUser,
  getOrganisation,
}: {
  getUser: any;
  getOrganisation: any;
}): JSX.Element {
  const acToken = process.env.REACT_APP_BEARER;

  if (acToken) localStorage.setItem('accessToken', acToken);

  const [organisationRegisterModalIsOpen, setOrganisationRegisterModalIsOpen] =
    useState<boolean>(false);

  useEffect((): (() => void) => {
    (async () => {
      const user = await getAuthUser();

      if (user.payload.organisation === 'None') {
        setOrganisationRegisterModalIsOpen(true);
      }

      await getOrganisation({ payload: user.payload.organisation });
    })();

    return (): void => {};
  }, []);

  const getAuthUser = async () => {
    const localStorageUserKey =
      '@@auth0spajs@@::0iQweZrVE0fx0Df2S76ppCKDNpxJVkrp::@@user@@';

    const localStorageUser = JSON.parse(
      localStorage.getItem(localStorageUserKey)!
    );

    const extId: string = localStorageUser.decodedToken.user.sub;

    const user = await getUser({ payload: extId });
    return user;
  };

  return (
    <>
      <RouterProvider router={router} />
      <OrganisationRegisterModal
        isOpen={organisationRegisterModalIsOpen}
        onClose={() => setOrganisationRegisterModalIsOpen(false)}
      />
    </>
  );
}

export default App;
