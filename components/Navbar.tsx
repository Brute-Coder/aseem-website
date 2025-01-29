"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="top-0 left-0 right-0 z-50 bg-black text-white sticky">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex-shrink-0">
                        {/* <Image
                            src="https://sjc.microlink.io/SU14FZW6oLcy1mhMyzh_bUfVny9tx-lBIsjLx1-Jnr-9PZmgxbqh4UYmOMz9_EDLMPxeYllwQrgn4qzSlLP2Tw.jpeg"
                            alt="Logo"
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                        /> */}
                        <h1>OG-Aseem</h1>
                    </Link>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gray-300">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <Link href="/courses" className="text-white hover:text-gray-300">
                            Courses
                        </Link>
                        <Link href="/content" className="text-white hover:text-gray-300">
                            Content
                        </Link>
                        <Link href="/books" className="text-white hover:text-gray-300">
                            Books
                        </Link>
                        <Link href="/public-speaking" className="text-white hover:text-gray-300">
                            Public Speaking
                        </Link>
                        <Link href="/contact" className="text-white hover:text-gray-300">
                            Contact
                        </Link>
                        <Link href="/about" className="text-white hover:text-gray-300">
                            About
                        </Link>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 rounded-lg">
                            <Link
                                href="/courses"
                                className="block px-3 py-2 text-white hover:text-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Courses
                            </Link>
                            <Link
                                href="/content"
                                className="block px-3 py-2 text-white hover:text-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Content
                            </Link>
                            <Link
                                href="/books"
                                className="block px-3 py-2 text-white hover:text-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Books
                            </Link>
                            <Link
                                href="/public-speaking"
                                className="block px-3 py-2 text-white hover:text-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Public Speaking
                            </Link>
                            <Link
                                href="/contact"
                                className="block px-3 py-2 text-white hover:text-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                            <Link
                                href="/about"
                                className="block px-3 py-2 text-white hover:text-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

