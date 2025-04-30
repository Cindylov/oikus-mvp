import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import ListingsPage from "./pages/ListingsPage";
import PropertyDetails from "./pages/PropertyDetails";
import PropertyRequest from "./pages/PropertyRequest";
import SidebarApp from "./pages/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listings />} />
        <Route path="/listingpage" element={<ListingsPage />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/request" element={<PropertyRequest />} />
        <Route path="/search" element={<SidebarApp />} />
      </Routes>
    </Router>
  );
}

export default App;
