import React from 'react'

const SchoolGallery = () => {
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
                    <div className="space-y-2">
                        <img className="w-full h-auto object-cover rounded-2xl" src="https://paragonmission.com/wp-content/uploads/elementor/thumbs/s2-r0od9xdislgaj3tu9w9ifjm4kmse4i6dfepeh2bb5k.jpg" alt="Gallery Masonry Image" />
                        <img className="w-full h-auto object-cover rounded-2xl" src="https://paragonmission.com/wp-content/uploads/elementor/thumbs/Screenshot_20241212-205532_Facebook-r0nyqcbxvupdemd4n2nt163scxgxi2kz3wllvcmz3s.jpg" alt="Gallery Masonry Image" />

                    </div>
                    <div className="space-y-2">
                        <img className="w-full h-auto object-cover rounded-2xl" src="https://paragonmission.com/wp-content/uploads/elementor/thumbs/20240627_121637copy2-01-r0nyp29ukyyblq8140r34zq791ry0wi4lkmtcsj9ko.jpeg" alt="Gallery Masonry Image" />
                        <img className="w-full h-auto object-cover rounded-2xl" src="https://paragonmission.com/wp-content/uploads/elementor/thumbs/IMG-20220509-WA0050-r0nyp45iyn0w8y5at1kc9z94ftiogapl9txsbcgh88.jpg" alt="Gallery Masonry Image" />
                    </div>
                    <div className="space-y-2">
                        <img className="w-full h-auto object-cover rounded-2xl" src="https://paragonmission.com/wp-content/uploads/elementor/thumbs/s3-1-r0tdpky3s9iih8j07ofnae04z2j6wph55wxa335454.jpg" alt="Gallery Masonry Image" />
                        <img className="w-full h-auto object-cover rounded-2xl" src="https://paragonmission.com/wp-content/uploads/elementor/thumbs/s2-r0od9xdislgaj3tu9w9ifjm4kmse4i6dfepeh2bb5k.jpg" alt="Gallery Masonry Image" />

                    </div>
                    <div className="space-y-2">
                        <img className="w-full h-auto object-cover rounded-2xl" src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80" alt="Gallery Masonry Image" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchoolGallery