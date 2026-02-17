import { useState } from "react"

function App() {

  const [nomeCompleto, setNomeCompleto] = useState("")
  const [surname, setSurname] = useState("")
  const [password, setPassword] = useState("")
  const [specializzazione, setSpecializzazione] = useState("")
  const [anniEsperienza, setAnniEsperienza] = useState(0)
  const [descrizione, setDescrizione] = useState("")



  function handleSubmit(e) {
    e.preventDefault()

    if (nomeCompleto || surname || password || specializzazione || descrizione === "" && anniEsperienza <= 0) {
      return console.log("Errore");
    } else {
      console.log(`Nome: ${nomeCompleto}`);
      console.log(`Surname: ${surname}`);
      console.log(`Password: ${password}`);
      console.log(`Anni di esperienza: ${anniEsperienza}`);
      console.log(`Specializzazione scelta: ${specializzazione}`);
      console.log(`Descrizione :${descrizione}`);
    }
  }

  return (
    <>
      <div className="container">
        <div className="d-flex flex-column">
          <form onSubmit={handleSubmit}>
            <div>Nome completo :
              <input
                type="text"
                value={nomeCompleto}
                onChange={e => setNomeCompleto(e.target.value)}
                require />
            </div>
            <div>Surname :
              <input
                type="text"
                value={surname}
                onChange={e => setSurname(e.target.value)}
                require />
            </div>
            <div>Password :
              <input
                type="text"
                value={password}
                onChange={e => setPassword(e.target.value)}
                require />
            </div>
            <div>Anni di esperienza :
              <input
                type="number"
                value={anniEsperienza}
                onChange={e => setAnniEsperienza(e.target.value)}
                require />
            </div>
            <div>
              <select value={specializzazione} onChange={e => setSpecializzazione(e.target.value)}>
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
                require />
            </div>
            <button>Invia dati</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
