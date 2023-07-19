import Provider from "./Context/Provider";
import ChatPage from "./Pages/ChatPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./app.css"
import ExportMessagesPage from "./Pages/ExportMessagesPage";
import CyclotronPage from "./Pages/CyclotronPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChatPage />,
  },
  {
    path: "/messages",
    element: <ExportMessagesPage />,
  },
  {
    path: "/cyclotron",
    element: <CyclotronPage />,
  },
]);

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
