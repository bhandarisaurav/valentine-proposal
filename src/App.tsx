import './App.css'
import ValentineCard from './ValentineCard'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Box from './3d';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   loader: () => ({ message: "Hello Data Router!" }),
  //   Component() {
  //     const data = useLoaderData() as { message: string };
  //     return <h1>{data.message}</h1>;
  //   },
  // },
  {
    path: "/",
    Component: ValentineCard,
  }, {
    path: "/3d",
    Component: Box,
  }
]);

function App() {

  return (
    <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  )
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default App
