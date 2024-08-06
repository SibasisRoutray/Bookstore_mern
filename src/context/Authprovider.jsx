import { createContext,  useState } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export default function Authprovider({ children }) {
    const localstorageUser = localStorage.getItem('user');
    const [authUser, setAuthUser] = useState(
        localstorageUser ? JSON.parse(localstorageUser) : undefined
    );

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

Authprovider.propTypes = {
    children: PropTypes.node.isRequired,
};
