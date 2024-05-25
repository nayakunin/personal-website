import { useContext } from 'react';

import { AuthContext } from '../ctx';

export const useAuth = () => useContext(AuthContext);
