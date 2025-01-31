import Image from "next/image";

export default function Books() {
    return (
        <section className="bg-gray-100 flex flex-col items-center justify-center mt-10 md:mt-20 py-4" id="book">
            <h1 className="text-4xl">Book</h1>
            <div className="flex flex-col items-center py-12 px-4 md:flex-row md:justify-center md:gap-12">
                <div className="relative w-64 h-80 md:w-80 md:h-96">
                    <Image
                        src="/aseem-book.png"
                        alt="Do Epic Shit Book Cover"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="text-center md:text-left max-w-lg">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">51 trading strategies</h2>
                    <p className="mt-4 text-gray-600">
                        A practical guide covering diverse trading techniques, risk management, and market insights for traders of all levels.
                    </p>
                    <div className="mt-4 flex flex-col items-center md:items-start">

                        <p className="mt-2 font-semibold text-gray-900">Aseem Singhal</p>
                    </div>
                    <a
                        href="https://www.amazon.in/Trading-Strategies-Time-tested-Zebralearn-Categories/dp/8196373570?crid=32IPKM48V3BQF&dib=eyJ2IjoiMSJ9.GC8ccpeOEFK8cy51si7FDHghuaHEuPtK3lncTLC5QaExCQccT6JgbLoithyAxUfX-6taCGH9CW-Q2_vl4lN5prkbmMr97r8kv2xcOev4WZL9PFuFq4cbNkYZj9tSRdXl-8PFfZyNyFSAsxXN8tY6QZAWwpdttS3OLVJ5PsU9SjE9853uOjULiEgXjfc35u9iZrfNCsyCIHaAJeb_jc-bD7IMSv0RNc3cb_okDuNnavM.P5jkF_YiQFSgFmSilcr1lfzapV66ozq766Ro_KtGlgk&dib_tag=se&keywords=51+trading+strategies+book&qid=1738242635&sprefix=51+tradin,aps,271&sr=8-3"
                        className="mt-6 inline-block bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg shadow-md hover:bg-yellow-500 transition"
                    >
                        ➤   {"  "} GET YOUR COPY
                    </a>
                </div>
            </div>
        </section>
    );
}
