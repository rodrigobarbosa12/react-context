import { useAuth } from './providers/AuthProcider';

function App() {

  /**
   * PASSO 3
   * Use com useContext ou com um hook personalizado, nesse caso o useAuth.
   */
  const { user, setUser } = useAuth();

  return (
    <div className="App">
      Olá, {user.name}
      <hr />
      <br />
      <input type="text" onChange={(e) => setUser({ name: e.target.value })} />
    </div>
  )
}

export default App
