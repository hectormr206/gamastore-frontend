import PropTypes from 'prop-types';
import React from 'react';

// next
import Image from 'next/image';
import { signIn } from 'next-auth/react';

// material-ui

import { Box, useMediaQuery, Button, Stack } from '@mui/material';

// project import
import FirebaseSocial from './FirebaseSocial';
import { DEFAULT_PATH } from 'config';

const GitHub = '/assets/images/icons/github.svg';
const Google = '/assets/images/icons/google.svg';

// ============================|| AWS CONNITO - LOGIN ||============================ //

const AuthLogin = ({ providers }) => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      {providers && (
        <Stack direction="column" spacing={matchDownSM ? 1 : 2} justifyContent="space-between">
          {Object.values(providers).map((provider) => {
            if (provider.id === 'login' || provider.id === 'register') {
              return;
            }
            return (
              <Box key={provider.name} sx={{ width: '100%' }}>
                {provider.id === 'github' && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    startIcon={<Image src={GitHub} alt="GitHub" width={16} height={16} />}
                    onClick={() => signIn(provider.id, { callbackUrl: DEFAULT_PATH })}
                  >
                    GitHub
                  </Button>
                )}
                {provider.id === 'google' && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    startIcon={<Image src={Google} alt="Google" width={16} height={16} />}
                    onClick={() => signIn(provider.id, { callbackUrl: DEFAULT_PATH })}
                  >
                    Google
                  </Button>
                )}
              </Box>
            );
          })}
        </Stack>
      )}
      {!providers && (
        <Box sx={{ mt: 3 }}>
          <FirebaseSocial />
        </Box>
      )}
    </>
  );
};

AuthLogin.propTypes = {
  providers: PropTypes.object,
  csrfToken: PropTypes.string
};

export default AuthLogin;
