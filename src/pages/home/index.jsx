import './style.css'
import Trash from '../../assets/trash.svg'
function Home() {

  const users = [{
    id: '2342asdasds',
    name: 'Rodolfo',
    age: 33,
    email: 'rod@email.com',
  },
  {
    id: '2342asdasd456',
    name: 'Aline',
    age: 28,
    email: 'aline@email.com',
  }
  ]



  return (

    // Formulário
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='nome' type="text" />
        <input placeholder='Idade' name='idade' type="number" />
        <input placeholder='E-mail' name='email' type="email" />
        <button type='button'>Cadastrar</button>
      </form>
      {/* Repetição de cards dos Usuários */}
      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome:{user.name} </p>
            <p>Idade: {user.age} </p>
            <p>Email: {user.email} </p>
          </div>
          <button>
            <img />
          </button>
        </div>

      ))}


    </div>
  )
}

export default Home
