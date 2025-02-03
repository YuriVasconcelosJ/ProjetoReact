import './style.css'
import Trash from '../../assets/trash.svg'
function Home() {

  // const users = [{

  // }, {

  // }]




  return (

  // Formulário
  <div className='container'>
    <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type="text" />
        <input name='idade' type="number" />
        <input name='email' type="email" />
        <button type='button'>Cadastrar</button>   
    </form>

    <div>
      <div>
        <div>
          <p>Nome:</p>
          <p>Idade:</p>
          <p>Email:</p>
        </div>
        <button>
          <img  />
        </button>
      </div>
    </div>

  </div>
  )
}

export default Home
