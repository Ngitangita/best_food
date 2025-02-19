import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoteFound from "./views/NoteFound";
import Layout from "./Components/layout/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<Layout/>}>
          <Route path="/*" element={<NoteFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

