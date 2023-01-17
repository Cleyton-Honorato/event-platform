import { Routes, Route } from "react-router-dom";

import Event from "./pages/Event";

const Home = () => {
  return (
      <h1>HOME</h1>

  );
};
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
