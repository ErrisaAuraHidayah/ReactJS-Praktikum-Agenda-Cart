import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AgendaEvent from "./pages/AgendaEvent";
import KeranjangBelanja from "./pages/KeranjangBelanja";
import Cart from "./pages/Cart";


function App() {
	return (
		<div className=" justify-center p-6 w-screen h-screen bg-gray-200 overflow-y-auto">
			<div className="max-w-full">
				<div className="flex items-center justify-center mb-5 text-xs text-gray-600 font-semibold uppercase tracking-wide">
					<Link
						className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all ease-in-out no-underline text-black-50"
						to="/"
					>
						Home
					</Link>
          			<Link
						className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all ease-in-out no-underline text-black-50"
						to="/agenda"
					>
						Agenda Lingkungan
					</Link>
					<Link
						className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all ease-in-out no-underline text-black-50"
						to="/belanja"
					>
						Keranjang Belanja
					</Link>
					<Link
						className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all ease-in-out bg-purple-600 text-gray-50 hover: p-4 rounded-full no-underline"
						to="/cart"
						
					>
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  							<path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
						</svg>
						
						Cart (0)
					</Link>
					{/* <Link
						className="mx-2 px-4 py-2 rounded-xl hover:bg-gray-100 transition-all ease-in-out no-underline text-black-50"
						to="/about"
					>
						About
					</Link> */}
          
				</div>
				<div className="p-6 w-full bg-white rounded-xl shadow-lg">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/about" element={<About />}></Route>
            			<Route path="/agenda" element={<AgendaEvent />}></Route>
						<Route path="/belanja" element={<KeranjangBelanja />}></Route>
						<Route path="/cart" element={<Cart />}></Route>
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;