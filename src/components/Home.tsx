import { Link } from "react-router-dom"

const Home: React.FC = () => {
  return (
    <div className='flex flex-col mx-auto justify-center  m-8'>
      <Link
        className='flex-col mb-2 w-44  text-white mx-auto rounded-sm p-2 bg-slate-600 hover:bg-lime-400'
        to='/signup'
      >
        Sign up
      </Link>
      <Link
        className='flex-col mb-2 w-44  text-white mx-auto rounded-sm p-2 bg-slate-600 hover:bg-lime-400'
        to='/login'
      >
        Log in
      </Link>
    </div>
  )
}

export default Home
