import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";

const pages = import.meta.glob('./pages/**/*.jsx', { eager: true });

export default function App() {
  return (
    <BrowserRouter>
      <Routes pages={pages} />
    </BrowserRouter>
  );
}
