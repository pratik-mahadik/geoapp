"use client";
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import MyModal from './modal'; // Import your Modal component

interface datatype {
    name: string;
    imgSrc: string;
    heading: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        name: 'boundary',
        imgSrc: "/assets/features/time.svg",
        heading: "Boundary",
        paragraph: 'sadasd sadsad asdsadsad asds',
    },
    {
        name: 'dem',
        imgSrc: "/assets/features/time.svg",
        heading: "Digital Elevation Model",
        paragraph: 'sadasd sadsad asdsadsad asds',
    },
    {
        name: 'dsm',
        imgSrc: "/assets/features/time.svg",
        heading: "Digital Surface Model",
        paragraph: 'sadasd sadsad asdsadsad asds',
    },
    {
        name: 'dtm',
        imgSrc: "/assets/features/signal.svg",
        heading: "Digital Terrain Model",
        paragraph: 'sadasd sadsad asdsadsad asds',

    },
    {
        name: 'orthomosaic',
        imgSrc: "/assets/features/time.svg",
        heading: "Orthomosaic Imagery",
        paragraph: 'sadasd sadsad asdsadsad asds',
    },
    {
        name: 'contour_map',
        imgSrc: "/assets/features/dollar.svg",
        heading: "Contour Map",
        paragraph: 'sadasd sadsad asdsadsad asds',

    },
    {
        name: 'topography',
        imgSrc: "/assets/features/dollar.svg",
        heading: "Topography",
        paragraph: 'sadasd sadsad asdsadsad asds',

    },
    {
        name: 'point_cloud',
        imgSrc: "/assets/features/dollar.svg",
        heading: "Point Cloud",
        paragraph: 'sadasd sadsad asdsadsad asds',

    }
]

const Features = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage modal visibility
    const [selectedData, setSelectedData] = useState<string | null>(null); // State to store the selected data
    const openModal = (data: string) => {
        setSelectedData(data); // Set the selected data
        setIsOpen(true);
      };
    
      const closeModal = () => {
        // setSelectedData(null); // Clear the selected data when closing the modal
        // setIsOpen(false);
      };

      const exitModal = () => {
        setSelectedData(null); // Clear the selected data when closing the modal
        setIsOpen(false);
      };

    return (
        <div className="bg-babyblue" id="features">
            <div className="mx-auto max-w-2xl py-2 px-4 sm:px-6 lg:max-w-7xl lg:px-2">
                <h3 className="text-xl sm:text-4xl font-semibold text-black text-center my-2">Upload data.</h3>
                <h5 className="text-black opacity-60 text-lg font-normal text-center">upload the file for the relevant category.</h5>

                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-14 gap-y-7 lg:gap-x-8 mt-10'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 featureShadow'>

                            <Image src={item.imgSrc} alt={item.imgSrc} width={55} height={55} className="mb-2" />
                            <h3 className="text-2xl font-semibold text-black mt-5" style={{ height: '80px', overflow: 'hidden' }}>{item.heading}</h3>
                            <h4 className='text-lg font-normal text-black opacity-50 my-2'>{item.paragraph}</h4>

                            <div className='flex justify-center items-center'>
                                <button className="text-white text-l font-medium py-2 px-5 rounded-full transition duration-150 ease-in-out bg-electricblue hover:text-white hover:bg-blue" onClick={() => openModal(item.heading)}>
                                Upload data
                                </button>
                            </div>


                            <Link href={'/'} className="flex justify-center items-center text-electricblue text-l font-medium flex gap-2 pt-5 pb-2">
                                Show Map <Image src="/assets/people/arrow-right.svg" alt="arrow-right" width={24} height={24} />
                            </Link>

                            <MyModal isOpen={isOpen} closeModal={closeModal} exitModal={exitModal} data={selectedData} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;
