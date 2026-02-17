import { useRef, useState } from "react"

function App() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [descrizione, setDescrizione] = useState("")

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

  const nomeCompletoRef = useRef()
  const specializzazioneRef = useRef()
  const anniEsperienzaRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    if (
      nomeCompletoRef.current.value === "" ||
      username === "" ||
      password === "" ||
      specializzazioneRef.current.value === "" ||
      descrizione === "" ||
      anniEsperienzaRef.current.value <= 0) {
      console.log("Errore");
      return
    }
    console.log(`Nome: ${nomeCompletoRef.current.value}`);
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`Anni di esperienza: ${anniEsperienzaRef.current.value}`);
    console.log(`Specializzazione scelta: ${specializzazioneRef.current.value}`);
    console.log(`Descrizione :${descrizione}`);

  }

  const userValidation = username.trim().length >= 6 && [...username.trim()].every(c => letters.includes(c))
  const passwordValidation = password.trim().length >= 8
    && [...password.trim().toLowerCase()].some(c => letters.includes(c))
    && [...password.trim().toLowerCase()].some(c => numbers.includes(c))
    && [...password.trim().toLowerCase()].some(c => symbols.includes(c))
  const descriptionValidation = descrizione.trim().length >= 100 && descrizione.trim().length <= 1000

  return (
    <>
      <div className="container">
        <div className="d-flex flex-column">
          <form onSubmit={handleSubmit}>
            <div>Nome completo :
              <input
                type="text"
                ref={nomeCompletoRef}
                required />
            </div>
            <div>Username :
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required />
              <strong style={{ color: userValidation ? "green" : "red" }}>{userValidation ? "username valida" : "minimo 6 caratteri"}</strong>
            </div>
            <div>Password :
              <input
                type="text"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required />
              <strong style={{ color: passwordValidation ? "green" : "red" }}>{passwordValidation ? "password sicura" : "minimo 8 caratteri"}</strong>
            </div>
            <div>Anni di esperienza :
              <input
                type="number"
                ref={anniEsperienzaRef}
                required />
            </div>
            <div>
              <select ref={specializzazioneRef}>
                <option value="default">Seleziona una specializzazione</option>
                <option value="fullstack">Full Stack</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
              </select>
            </div>
            <div>Descrizione :
              <textarea
                type="text"
                value={descrizione}
                onChange={e => setDescrizione(e.target.value)}
                required />
              <strong style={{ color: descriptionValidation ? "green" : "red" }}>{descriptionValidation ? "descrizione valida" : "digita tra i 100 e i 1000 caratteri"}</strong>
            </div>
            <button>Invia dati</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
