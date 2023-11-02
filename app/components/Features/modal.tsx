import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
    exitModal: () => void;
    data: string | null;
}

const MyModal: React.FC<ModalProps> = ({ isOpen, closeModal, exitModal, data }) => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('folder', data || ''); // Provide a default value for data

            try {
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    console.log('File uploaded successfully');
                    alert('File uploaded successfully'); // Show an alert for successful upload
                } else {
                    console.error('File upload failed');
                    alert('File upload failed'); // Show an alert for failed upload
                }
            } catch (error) {
                console.error('Error uploading file', error);
                alert('Error uploading file'); // Show an alert for error
            }
        } else {
            console.error('No file selected');
            alert('No file selected'); // Show an alert for no file selected
        }
    };
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setSelectedFile(e.target.files[0]);
        }
    };

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">

                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                                        <div className="w-full max-w-md space-y-8">
                                            <div>
                                                <h3 className="mt-2 text-center text-xl font-bold tracking-tight text-gray-900">
                                                    Select the file
                                                </h3>
                                            </div>
                                            <form className="mt-8 space-y-6"  encType="multipart/form-data">
                                                <input type="hidden" name="folder" defaultValue="true" value={data || ''} />
                                                <div className="-space-y-px rounded-md shadow-sm">
                                                    <div>
                                                        <label htmlFor="email-address" className="sr-only">
                                                            Email address
                                                        </label>
                                                        <input
                                                            name="file"
                                                            id="file-input"
                                                            type="file"
                                                            onChange={onFileChange}
                                                            // webkitdirectory=""
                                                            // directory=""
                                                            // multiple
                                                        />
                                                        
                                                    </div>
                                                </div>
                                                <div>
                                                    <button
                                                        type="button"
                                                        onClick={handleFileUpload}
                                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-dodgerblue py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        Upload
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 "
                                            onClick={exitModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default MyModal;
