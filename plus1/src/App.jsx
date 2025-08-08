import { useState } from "react"

function App() {
  const [a, set_a] = useState(0)

   function h1()
  {
    set_a(a+1)
  }
  
  function h2()
  {
    alert('홍길동 반가워')
  }
  return (
    <>
     <button onClick={h1}> 현재상태 : {a}</button>
     <button onClick={h2}> 클릭! </button>
    </>
  )
}

export default App
