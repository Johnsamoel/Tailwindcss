
//importing image
import imageLink from './pexels-raka-miftah-4253620.jpg'

function App() {
  return (
    <div class='bg-zinc-700 h-screen flex items-center justify-center'>
      {/* card container */}
      <div class='bg-slate-800 w-64 h-auto rounded-md flex flex-col md:flex-row p-2 md:w-96 md:h-52 md:justify-between'>
      {/* image */}
      <img src={imageLink} alt='' class='object-fit w-full max-h-25 rounded-md md:h-full md:w-2/5 md:rounded-l-lg md:rounded-r-none transform hover:scale-105 duration-200 hover:rounded-lg ' />

      {/* form container */}
      <div class=' h-15 md:h-full p-2 md:p-5 md:w-3/5'>
        <h2 class='text-lime-400 text-sm text-center md:text-left font-bold w-full max-w-xs'>Let's guess!!</h2>
        <p class='text-white text-center md:text-left text-xs md:w-full font-sans'>The more complex number you enter the more it take to get it</p>

        <input type='text' class='bg-zinc-800 w-full border border-lime-600 rounded-sm mt-4 text-center p-1 text-lime-400 placeholder:text-xs placeholder:text-lime-500 md:p-none focus:outline-none' placeholder='Enter your Email' />

        <button class='w-full bg-lime-500 text-white rounded-md md:h-8 h-10 mt-3 hover:bg-lime-600 duration-200 active:bg-zinc-600'>Submit</button>
       </div>


      </div>

    </div>
  );
}

export default App;
