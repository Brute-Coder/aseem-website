"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="top-0 left-0 right-0 z-50 bg-black text-white  fixed">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src="/aseem-dark.png"
                            alt="Logo"
                            width={160}
                            height={60}
                            className="h-16 w-auto"
                        />
                    </Link>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-300">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <Link href="#home" className="text-white hover:text-gray-300">
                            Home
                        </Link>
                        <Link href="#about" className="text-white hover:text-gray-300">
                            About Me
                        </Link>
                        <Link href="#book" className="text-white hover:text-gray-300">
                            Books
                        </Link>
                        <Link href="#course" className="text-white hover:text-gray-300">
                            Course
                        </Link>
                        <Link href="#social" className="text-white hover:text-gray-300">
                            Socials
                        </Link>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 rounded-lg">
                            <Link
                                href="#home"
                                className="block px-3 py-2 text-white hover:text-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="#about"
                                className="block px-3 py-2 text-white hover:text-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                About Me
                            </Link>
                            <Link
                                href="#book"
                                className="block px-3 py-2 text-white hover:text-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Book
                            </Link>
                            <Link
                                href="#course"
                                className="block px-3 py-2 text-white hover:text-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Course
                            </Link>
                            <Link
                                href="#social"
                                className="block px-3 py-2 text-white hover:text-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Socials
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

