import { Button } from "./ui/button";

export default function Hero() {
    return (
        <section className="py-20 px-6 text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-normal text-black mb-6 tracking-tight">
                Find your SkillMentor
            </h1>
            <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Empower your career with personalized mentorship for AWS Developer Associate, Interview Prep, and more.
            </p>
            <div className="flex justify-center">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-8 py-6 h-auto rounded-md">
                    Sign up to see all tutors
                </Button>
            </div>
        </section>
    );
}
