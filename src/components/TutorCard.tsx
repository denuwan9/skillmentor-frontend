import { useState } from "react";
import type { CardElement } from "../types";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { BadgeCheck, Users, ThumbsUp, Calendar, Briefcase } from "lucide-react";

export default function TutorCard({ tutor }: { tutor: CardElement }) {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <Card className="w-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col h-full rounded-lg overflow-hidden relative">
            <CardHeader className="p-6 pb-2 relative">
                <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg leading-tight pr-12 text-black">
                        {tutor.title}
                    </h3>
                    <img src={tutor.badge} alt="Badge" className="w-10 h-10 absolute top-6 right-6" />
                </div>

                <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
                    <ThumbsUp size={16} className="text-gray-500" />
                    <span className="font-medium text-black">{tutor.rating}%</span>
                    <span>positive reviews</span>
                </div>
            </CardHeader>

            <CardContent className="p-6 pt-2 flex-grow">
                <div className="flex items-center gap-3 mb-4">
                    <img src={tutor.image} alt={tutor.name} className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex flex-col">
                        <div className="font-bold text-sm text-black">{tutor.name}</div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Briefcase size={12} />
                            <span>{tutor.role} at {tutor.company}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                            <Calendar size={12} />
                            <span>Tutor since {tutor.tutorSince}</span>
                        </div>
                    </div>
                </div>

                <p className={`text-sm text-gray-600 leading-relaxed mb-4 ${isExpanded ? "" : "line-clamp-4"}`}>
                    {tutor.description}
                </p>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-yellow-500 text-sm font-medium hover:underline mb-6 block"
                >
                    {isExpanded ? "See less" : "See more"}
                </button>

                <div className="space-y-2">
                    <h4 className="text-xs font-bold text-black uppercase tracking-wide mb-2">Highlights</h4>
                    <div className="bg-blue-50/50 rounded-lg p-3 space-y-2 border border-blue-100/50">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <Users size={16} className="text-gray-500" />
                            <span>{tutor.enrollments} Enrollments</span>
                        </div>
                        {tutor.isCertified && (
                            <div className="flex items-center gap-2 text-sm text-gray-700">
                                <BadgeCheck size={16} className="text-gray-500" />
                                <span>Certified Teacher</span>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>

            <CardFooter className="p-6 pt-0 mt-auto">
                <Button className="w-full bg-black hover:bg-gray-800 text-white font-medium py-2 rounded-md h-10">
                    Schedule a session
                </Button>
            </CardFooter>
        </Card>
    );
}
