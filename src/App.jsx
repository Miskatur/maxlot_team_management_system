import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { io } from "socket.io-client";

const socket = io.connect('http://localhost:5000')
const App = () => {

  socket.on('connection', () => {
    console.log(socket.id);
  })
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;
