import { useContext } from 'react';
import { AuthContext } from './Authprovider';

export const useAuth = () => useContext(AuthContext);
