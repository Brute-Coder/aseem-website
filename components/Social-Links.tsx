import { Youtube, Linkedin, X } from "lucide-react";
import links from "@/data/social-links";

const SocialLinks = () => {
    const socialPlatforms = [
        {
            name: "YouTube",
            icon: <Youtube className="w-8 h-8 md:w-10 md:h-10" />,
            link: links.youtube,
            color: "hover:bg-red-600",
        },

        {
            name: "X.com",
            icon: <X className="w-8 h-8 md:w-10 md:h-10" />,
            link: links.x,
            color: "hover:bg-green-400",
        },

        {
            name: "LinkedIn",
            icon: <Linkedin className="w-8 h-8 md:w-10 md:h-10" />,
            link: links.linkdln,
            color: "hover:bg-orange-600",
        },

    ];

    return (
        <div className="w-full bg-blue-600 py-16 px-4 md:py-24" id="social">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Find Aseem On
                    </h2>
                    <p className="text-lg md:text-xl text-blue-100">
                        Aseem Singhal has a strong community of 10k+ followers across all popular social media.
                    </p>
                </div>

                <div className="grid grid-cols-3  gap-6 mt-12 ">
                    {socialPlatforms.map((platform) => (
                        <a
                            key={platform.name}
                            href={platform.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                flex flex-col items-center justify-center p-6
                bg-white/10 backdrop-blur-sm rounded-xl
                transform transition-all duration-300
                hover:scale-105 ${platform.color}
                hover:shadow-xl hover:-translate-y-1
                group
              `}
                        >
                            <div className="text-white group-hover:text-white">
                                {platform.icon}
                            </div>
                            <span className="mt-3 text-sm md:text-base font-medium text-white">
                                {platform.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialLinks;