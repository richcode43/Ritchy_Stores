import React, { createContext, useState, useContext, useEffect } from 'react';
export interface User {
    id?: string;
    fullName?: string;
    email?: string;
    isLoggedIn: boolean;
    role?: "admin" | "user";
    token?: string;
}
interface AuthContext {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AuthContext = createContext<AuthContext>({
    user: null,
    setUser: () => null,
    loading: true,
    setLoading: () => null,
});
export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        setLoading(true)
        const state = JSON.parse(localStorage.getItem('auth_state')||"{}") as User
        if(!user) setUser(state)
        setLoading(false)
    },[user])
    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading, }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);