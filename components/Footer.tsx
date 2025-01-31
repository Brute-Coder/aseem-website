// import { Youtube, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
const Footer = () => {
    const currentYear = new Date().getFullYear();

    // const socialLinks = [
    //     { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com/@warikoo", label: "YouTube" },
    //     { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/warikoo", label: "Instagram" },
    //     { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/warikoo", label: "Twitter" },
    //     { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/in/warikoo", label: "LinkedIn" },
    // ];

    return (
        <footer className="bg-black">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex flex-col items-center space-y-4">
                    {/* Logo or Name */}
                    <Image
                        src="/aseem-dark.png"
                        alt="logo"
                        height={160}
                        width={80}
                    />

                    {/* Contact */}
                    <a
                        href="mailto:contact@warikoo.com"
                        className="flex items-center space-x-2 text-blue-100 hover:text-white transition-colors duration-300"
                    >
                        {/* <Mail className="w-4 h-4" />
                        <span>contact@.com</span> */}
                    </a>

                    {/* Social Links */}
                    {/* <div className="flex space-x-8">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-blue-100 hover:text-white transform hover:scale-110 transition-all duration-300"
                                aria-label={link.label}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div> */}

                    {/* Copyright */}
                    <div className="text-sm text-blue-100">
                        © {currentYear} Aseem Singhal. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;