import { useState, createContext, useContext, ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

/**
 * PASSO 1
 * Crie o provider.
 */
export const AuthContext = createContext({
  user: {
    name: '',
  },
  setUser: (_s: any) => {},
});

const AuthProcider = ({ children }: Props) => {
  const [user, setUser] = useState({
    name: 'Rodrigo Barbosa'
  });

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Crie um hook personalizado
 */
export const useAuth = () => useContext(AuthContext);

export default AuthProcider;
