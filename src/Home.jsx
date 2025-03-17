import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()



  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });





  const sidebar = useRef(null)

  const openSidebar = () =>{
    sidebar.current.style.right= "0px"
  }

  return (
    <div>Home

      <button onClick={() => navigate("/checkout")} className="bg-blue-500 text-white rounded-xl w-[80%] w-full mt-5 h-[40px]">
        Checkout
      </button>

      <div ref={sidebar} className="w-[300px] h-[100vh] bg-gray-300 fixed top-0 right-[-300px]" >
        <button>close</button>
      </div>

      <button onClick={openSidebar}>Open</button>





      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>

    </div>
  )
}

export default Home






