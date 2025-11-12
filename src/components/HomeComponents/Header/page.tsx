// app/page.tsx or pages/index.tsx
import Image from "next/image";

function HeaderSection() {
    return (
        <section className="w-full">
            {/* Top Banner with images */}
            <div className="grid md:grid-cols-2">
                {/* Left Image */}
                <div className="relative w-full h-[300px] md:h-[400px]">
                    <Image
                        src="https://paragonmission.com/wp-content/uploads/2025/01/n1-768x512.jpg" // replace with actual banner image
                        alt="School Banner"
                        fill
                        className="object-cover"
                    />
                </div>
                {/* Right Image */}
                <div className="relative w-full h-[300px] md:h-[400px]">
                    <Image
                        src="https://paragonmission.com/wp-content/uploads/2025/01/n1-768x512.jpg" // replace with actual image
                        alt="Computer Class"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid md:grid-cols-3 text-center">
                <div className="bg-yellow-400 p-6 flex flex-col items-center justify-center">
                    <Image
                        src="https://paragonmission.com/wp-content/uploads/2025/01/IMG-20240808-WA0042.jpg"
                        alt="Students"
                        width={80}
                        height={60}
                        className="mb-2 rounded"
                    />
                    <h3 className="text-3xl font-bold">1200+</h3>
                    <p className="text-sm font-medium">Total Students</p>
                </div>

                <div className="bg-pink-500 text-white p-6 flex flex-col items-center justify-center">
                    <Image
                        src="https://paragonmission.com/wp-content/uploads/2025/01/20211112_133040-1024x694.jpg"
                        alt="Teachers"
                        width={80}
                        height={60}
                        className="mb-2 rounded"
                    />
                    <h3 className="text-3xl font-bold">40+</h3>
                    <p className="text-sm font-medium">Teachers and Staff</p>
                </div>

                <div className="bg-blue-600 text-white p-6 flex flex-col items-center justify-center">
                    <Image
                        src="https://paragonmission.com/wp-content/uploads/elementor/thumbs/s5-e1738060074110-r0o237erv2ybxfws76e43vga2qtmcnl99salucjy70.jpg"
                        alt="Classes"
                        width={80}
                        height={60}
                        className="mb-2 rounded"
                    />
                    <h3 className="text-3xl font-bold">12+</h3>
                    <p className="text-sm font-medium">Total Classes</p>
                </div>
            </div>

        
        </section>
    );
}

export default HeaderSection;