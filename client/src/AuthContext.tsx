import React from 'react';

export const AuthContext = React.createContext({
    token: null as string | null,
    login: () => { },
    logout: () => { }
});