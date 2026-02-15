import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 px-6 border-t border-gray-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-bold mb-4">About</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Help center</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Join</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">SkillMentor for kids</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">SkillMentor for business</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Become a tutor</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Become an ambassador</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Other</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Terms and conditions</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Social</h3>
                    <div className="flex gap-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="SkillMentor Logo" className="h-8 w-auto" />
                    <span className="text-xl font-bold">SkillMentor</span>
                </div>

                <p className="text-sm text-gray-500">
                    SkillMentor Inc. © Copyright 2025. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
