import { section } from "framer-motion/client";
import Image from "next/image";

export default function Books() {
    return (
        <section className="flex flex-col items-center justify-center mt-10 md:mt-20">
            <h1 className="text-2xl">Book</h1>
            <div className="flex flex-col items-center py-12 px-4 md:flex-row md:justify-center md:gap-12">
                <div className="relative w-64 h-80 md:w-80 md:h-96">
                    <Image
                        src="/do-epic-shit.png"
                        alt="Do Epic Shit Book Cover"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="text-center md:text-left max-w-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">DO EPIC SHIT</h2>
                    <p className="mt-4 text-gray-600">
                        This is a book to be read, and re-read, a book whose lines you will
                        underline and think about again and again, a book you will give your
                        family and your friends and strangers.
                    </p>
                    <div className="mt-4 flex flex-col items-center md:items-start">
                        <Image
                            src="/signature.png"
                            alt="Ankur Warikoo Signature"
                            width={120}
                            height={40}
                        />
                        <p className="mt-2 font-semibold text-gray-900">ankur warikoo</p>
                    </div>
                    <a
                        href="#"
                        className="mt-6 inline-block bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition"
                    >
                        ➤ GET YOUR COPY
                    </a>
                </div>
            </div>
        </section>
    );
}
