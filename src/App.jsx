import { RouterProvider } from "react-router-dom"
import router from "./PAGES/Routes/Router"

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
