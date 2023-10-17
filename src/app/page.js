import Image from 'next/image'
import SpinnerWheel from '../../component/spinnerWheel';

export default function Home() {

  return (
    <main >

      <h1 className='flex justify-center text-xl font-bold mt-10'>Spinner App</h1>

      <SpinnerWheel />

    </main>
  )
}
