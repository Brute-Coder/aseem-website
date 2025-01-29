import { Youtube, Instagram, Twitter, Linkedin, Facebook, X } from "lucide-react";

const SocialLinks = () => {
    const socialPlatforms = [
        {
            name: "YouTube",
            icon: <Youtube className="w-8 h-8 md:w-10 md:h-10" />,
            link: "https://youtube.com/@warikoo",
            color: "hover:bg-red-600",
        },
        {
            name: "Instagram",
            icon: <Instagram className="w-8 h-8 md:w-10 md:h-10" />,
            link: "https://instagram.com/warikoo",
            color: "hover:bg-pink-600",
        },
        {
            name: "Twitter",
            icon: <Twitter className="w-8 h-8 md:w-10 md:h-10" />,
            link: "https://twitter.com/warikoo",
            color: "hover:bg-blue-400",
        },
        {
            name: "Spotify",
            icon: <X className="w-8 h-8 md:w-10 md:h-10" />,
            link: "https://open.spotify.com/user/warikoo",
            color: "hover:bg-green-600",
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-8 h-8 md:w-10 md:h-10" />,
            link: "https://linkedin.com/in/warikoo",
            color: "hover:bg-orange-600",
        },
        {
            name: "Facebook",
            icon: <Facebook className="w-8 h-8 md:w-10 md:h-10" />,
            link: "https://facebook.com/warikoo",
            color: "hover:bg-blue-800",
        },
    ];

    return (
        <div className="w-full bg-blue-600 py-16 px-4 md:py-24">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Find Warikoo on
                    </h2>
                    <p className="text-lg md:text-xl text-blue-100">
                        ankur warikoo has a strong community of 10Mn+ followers across all popular social media.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
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