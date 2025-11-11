import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    const userInfo = {
        email: 'poy@alo.com'
    }


    return (
        <div>
            <AuthContext value={userInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;