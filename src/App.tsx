import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import OrganisationRegisterModal from './features/organisation/components/registerModal';
import { Organisation } from './store/apis/organisation';
import { User } from './store/apis/user';

function App({
  getUser,
  getOrganisation,
  userOrganisation,
  setCurrentEmailOrganisation,
}: {
  getUser: any;
  getOrganisation: any;
  userOrganisation: any;
  setCurrentEmailOrganisation: any;
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
        return;
      }

      await getOrganisation({ payload: user.payload.organisation });
    })();

    return (): void => { };
  }, []);

  useEffect((): (() => void) => {
    if (setCurrentEmailOrganisation) {
      setCurrentEmailOrganisation(userOrganisation);
    }

    return (): void => { };
  }, [userOrganisation]);

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
