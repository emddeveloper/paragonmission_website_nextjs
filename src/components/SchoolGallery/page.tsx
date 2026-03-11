import React from 'react'

const SchoolGallery = () => {
    const images = [
        "/class_2.jpg",
        "/class_1.jpg",
        "/prize1.jpg",
        "/prize2.jpg",
        "/eca_1.jpg",
        "/prize3.jpg",
        "/prize4.jpg",
        "/prize5.jpg",
        "/rabindra1.jpg",
        "/science_city_1.jpg",
        "/science_city_2.jpg",
        "/science_city3.jpg",
        "/SS_on_stage_1.jpg",
    ]

    return (
        <div className='bg-gray-100'>
            <div className="max-w-[85rem] px-4 pt-12 sm:px-6 lg:px-8 mx-auto text-center">
                <h1 className="text-3xl font-bold text-gray-900">
                    School Gallery
                </h1>
                <p className="mt-1 text-lg font-medium text-red-600">
                    SHOWCASE STUDENTS WORK
                </p>
            </div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-5">
                    {images.map((image, index) => (
                        <div key={index} className="space-y-2">
                            <img className="w-full h-full object-cover rounded-2xl" src={image} alt="Gallery Masonry Image" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SchoolGallery