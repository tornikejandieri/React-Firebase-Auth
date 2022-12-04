import { useState } from "react"
import { app } from "../../firebaseConfig"
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth"

interface Props {
  title: string
  buttonTitle: string
  id: number
}

const Form: React.FC<Props> = ({ title, buttonTitle, id }) => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSubmit = (e: { preventDefault: () => void }, id: number) => {
    e.preventDefault()
    const authentication = getAuth()
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password).then(
        (resp) => {
          console.log(resp)
        }
      )
    }
  }

  return (
    <article className='flex flex-col mx-auto sm:flex-col sm:mx-auto'>
      <h3 className='mx-auto text-slate-500 text-3xl'>{title}</h3>
      <div className='flex flex-col mx-auto sm:flex-col sm:mx-auto'>
        <form
          onSubmit={(e) => handleSubmit(e, id)}
          className='flex flex-col mx-auto sm:flex-col sm:mx-auto p-4 sm:p-6'
        >
          <label className='text-slate-700 mt-4' htmlFor='email'>
            Email
          </label>
          <input
            className='border rounded p-4 lg:w-80'
            type='email'
            id='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className='text-slate-700 mt-4' htmlFor='password'>
            Password
          </label>
          <input
            className='border rounded p-4 lg:w-80'
            type='password'
            id='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className='text-slate-700  bg-lime-400 hover:bg-lime-200 rounded-sm mt-4 p-4'
            type='submit'
          >
            {buttonTitle}
          </button>
        </form>
      </div>
    </article>
  )
}

export default Form
