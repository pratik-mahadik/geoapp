"use client";
import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MyModal from './modal'; // Import your Modal component
import BulkModal from './bulk_modal'; // Import your Modal component
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
    Button
  } from "@nextui-org/react";

interface datatype {
    name: string;
    mapHref: string;
    imgSrc: string;
    heading: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        name: 'boundary',
        mapHref: '/map?layer=boundary',
        imgSrc: "/assets/features/time.svg",
        heading: "Boundary",
        paragraph: 'CGX Industries - Overall Site - December 7 2022 - boundary.geojson',
    },
    {
        name: 'dem',
        mapHref: '/map?layer=dem',
        imgSrc: "/assets/features/time.svg",
        heading: "Digital Elevation Model",
        paragraph: 'None',
    },
    {
        name: 'dsm',
        mapHref: '/map?layer=dsm',
        imgSrc: "/assets/features/time.svg",
        heading: "Digital Surface Model",
        paragraph: 'None',
    },
    {
        name: 'dtm',
        mapHref: '/map?layer=dtm',
        imgSrc: "/assets/features/signal.svg",
        heading: "Digital Terrain Model",
        paragraph: 'None',

    },
    {
        name: 'orthomosaic',
        mapHref: '/map?layer=orthomosaic',
        imgSrc: "/assets/features/time.svg",
        heading: "Orthomosaic Imagery",
        paragraph: 'CGX Industries - Overall Site - December 7 2022 - Global Orthomosaic.tif',
    },
    {
        name: 'contour_map',
        mapHref: '/map?layer=contour_map',
        imgSrc: "/assets/features/dollar.svg",
        heading: "Contour Map",
        paragraph: 'None',

    },
    {
        name: 'topography',
        mapHref: '/map?layer=topography',
        imgSrc: "/assets/features/dollar.svg",
        heading: "Topography",
        paragraph: 'None',

    },
    {
        name: 'point_cloud',
        mapHref: '/map?layer=point_cloud',
        imgSrc: "/assets/features/dollar.svg",
        heading: "Point Cloud",
        paragraph: 'None',

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


    const [bulkisOpen, bulksetIsOpen] = useState(false); // State to manage modal visibility
    const [bulkselectedData, bulksetSelectedData] = useState<string | null>(null); // State to store the selected data
    const bulkopenModal = (data: string) => {
        bulksetSelectedData(data); // Set the selected data
        bulksetIsOpen(true);
    };
    
    const bulkcloseModal = () => {
        // setSelectedData(null); // Clear the selected data when closing the modal
        // setIsOpen(false);
    };

    const bulkexitModal = () => {
        bulksetSelectedData(null); // Clear the selected data when closing the modal
        bulksetIsOpen(false);
    };

        
        
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Select"]));

    const selectedValue = React.useMemo(
            () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
            [selectedKeys]
        );

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        // Fetch data from your API endpoint here
        // Example API call using fetch:
        fetch('/api/project')
            .then(response => response.json())
            .then(data => setApiData(data.data))
            .catch(error => console.error(error));
    }, []); // Run this effect only once when the component mounts

        
    return (
        <div className="bg-babyblue" id="features">
            <div className="mx-auto max-w-2xl py-3 px-4 sm:px-6 lg:max-w-7xl lg:px-2">
            <div className="" style={{ display: 'flex'}}>
                <h3 className="text-2xl font-semibold text-black mt-1 mr-5 col-md-3" >Project</h3>
                <Dropdown className="col-md-6" >
                    <DropdownTrigger>
                        <Button 
                        variant="bordered" 
                        className="capitalize"
                        >
                        {selectedValue} 
                        </Button>
                    </DropdownTrigger>
                
                    <DropdownMenu 
                        aria-label="Single selection example"
                        variant="flat"
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedKeys}
                        onSelectionChange={setSelectedKeys}
                    >
                        {apiData.map(item => (
                    <DropdownItem key={item.project}>{item.project}</DropdownItem>
                ))}
                    </DropdownMenu>
                </Dropdown>
            <div className="col-md-9 ml-5 mt-2" style={{flex: 6}}></div>
                <button className="text-white text-l font-medium py-2 px-10 rounded-full transition duration-150 ease-in-out bg-electricblue hover:text-white hover:bg-blue" style={{whiteSpace:'nowrap', flex: 1}} onClick={() => bulkopenModal("bulk")}>
                Upload data in bulk
                </button>
                <BulkModal isOpen={bulkisOpen} closeModal={bulkcloseModal} exitModal={bulkexitModal} data={bulkselectedData} />
            </div>
                <h3 className="text-xl sm:text-4xl font-semibold text-black text-center my-10">Upload data.</h3>
                <h5 className="text-black opacity-60 text-lg font-normal text-center">upload the file for the relevant category.</h5>

                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-14 gap-y-7 lg:gap-x-8 mt-10'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 featureShadow'>

                            <Image src={item.imgSrc} alt={item.imgSrc} width={55} height={55} className="mb-2" />
                            <h3 className="text-2xl font-semibold text-black mt-5" style={{ height: '80px', overflow: 'hidden' }}>{item.heading}</h3>
                            <h4 className="mb-3" style={{ height: '120px', overflow: 'hidden' }}><p className="text-lg font-bold text-black my-2">Selected file:</p>
                            <p className='text-small font-normal text-black opacity-50 my-2'>{item.paragraph}</p>
                            </h4>

                            <div className='flex justify-center items-center'>
                                <button className="text-white text-l font-medium py-2 px-5 rounded-full transition duration-150 ease-in-out bg-electricblue hover:text-white hover:bg-blue" onClick={() => openModal(selectedValue)}>
                                Upload data
                                </button>
                            </div>


                            <Link href={item.mapHref} className="flex justify-center items-center text-electricblue text-l font-medium flex gap-2 pt-5 pb-2">
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
