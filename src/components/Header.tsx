import { Button } from "./ui/button";
import logo from "../assets/logo.png";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img src={logo} alt="SkillMentor Logo" className="h-8 w-auto" />
                <span className="text-xl font-bold tracking-tight">SkillMentor</span>

                <nav className="hidden md:flex items-center gap-6 ml-8 text-sm font-medium text-gray-300">
                    <a href="#" className="hover:text-white transition-colors">Tutors</a>
                    <a href="#" className="hover:text-white transition-colors">About Us</a>
                    <a href="#" className="hover:text-white transition-colors">Resources</a>
                </nav>
            </div>

            <div className="flex items-center gap-4">
                <a href="#" className="text-sm font-medium hover:text-gray-300 transition-colors hidden sm:block">
                    Login
                </a>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md px-6">
                    Sign up
                </Button>
            </div>
        </header>
    );
}
