// import React from "react";
// import Image from "next/image";

// function Hero() {
//     return (
//         <div className="relative w-full h-[70vh] overflow-hidden mt-16 max-md:mt-20">
//             <Image
//                 src="/aseem-hero.jpg"
//                 alt="Aseem Image"
//                 layout="fill"
//                 objectFit="cover"
//                 priority
//                 className="object-[center_-80px]"
//             />
//             <div className="absolute inset-0 w-full h-full bg-black/40" />

//             <div className="absolute z-10 max-w-2xl bottom-1/2 md:right-24 max-md:left-4 text-white">
//                 <h1 className="text-5xl font-light">awareness is</h1>
//                 <h2 className="text-7xl font-bold">everything</h2>
//                 <p className="mt-4 text-lg max-w-sm">
//                     Make sure all the choices you make in life come from a point
//                     of awareness and not ignorance.
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default Hero;


import React from "react";
import Image from "next/image";

function Hero() {
    return (
        <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden mt-16 max-md:mt-20" id="home">
            {/* Background Image */}
            <Image
                src="/aseem-hero.jpg"
                alt="Aseem Image"
                layout="fill"
                objectFit="cover"
                priority
                className="md:object-[center_-80px]"
            />

            {/* Black Overlay (Ensure Proper Fit) */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 pointer-events-none" />

            {/* Text Content */}
            <div className="absolute z-10 max-w-2xl bottom-1/4 md:bottom-1/2 md:right-24 max-md:left-4 text-white">
                <h1 className="text-3xl md:text-7xl font-light">Master the Art of</h1>
                <h2 className="text-5xl md:text-8xl font-bold">Trading</h2>
                <p className="mt-4 text-lg max-w-sm">
                    Trading is more than just numbers—it&apos;s about discipline, strategy, and continuous learning.
                </p>
            </div>
        </div>


    );
}

export default Hero;





// import React from "react";
// import Image from "next/image";

// const Hero = () => {
//     return (
//         <section className="relative w-full h-[70vh] flex items-center justify-start">
//             {/* Background Image */}
//             <div className="absolute inset-0 w-full h-full">
//                 <Image
//                     src="/aseem-hero.jpg"
//                     alt="Aseem Image"
//                     layout="fill"
//                     objectFit="cover"
//                     className="object-[center_-80px]"
//                     priority
//                 />
//                 {/* Dark Overlay */}
//                 <div className="absolute inset-0 bg-black/40"></div>
//             </div>

//             {/* Content Section */}
//             <div className="relative z-10 max-w-2xl ml-12 text-white">
//                 <h1 className="text-5xl font-light">awareness is</h1>
//                 <h2 className="text-7xl font-bold">everything</h2>
//                 <p className="mt-4 text-lg">
//                     Make sure all the choices you make in life come from a point
//                     of awareness and not ignorance.
//                 </p>
//             </div>
//         </section>
//     );
// };

// export default Hero;
