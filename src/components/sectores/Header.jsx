export default function NavBar() {
    return (
        <nav className="w-full bg-white shadow-xl drop-shadow-2xl">
            <div className="px-4 lg:max-w-7xl md:items-center md:flex md:px-8">
                <div className="flex items-center py-5">
                    <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-100 focus:border focus:p-2"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "http://localhost:3000/home";
                        }}>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <h1 className="text-4xl tracking-wider text-center text-[#008E9B] font-bold ml-5">SECTORES</h1>
                </div>
            </div>
        </nav>
    );
}