import video from '../assets/background.mp4';


const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <video autoPlay loop muted className='wrapr'>
        <source src={video} type="video/mp4" />
      </video>

      <div className="mt-16 mb-6 text-3xl font-bold">
        Login
      </div>
      <div className='bg-white rounded-lg shadow-lg p-4'>
        <form className="mx-auto max-w-md">
          <div>
            <label className="block text-sm font-medium">Email</label> 
            <input className="border p-2 w-full rounded" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login