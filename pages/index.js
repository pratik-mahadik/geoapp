import Link from "next/link";
import FileUploadForm from '../components/FileUploadForm';

const Home = () => {
  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.status === 200) {
        console.log('File uploaded successfully');
      } else {
        console.error('File upload failed');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h1>Upload a File</h1>
      <FileUploadForm onUpload={handleFileUpload} />
      <Link href="/map">Go to Map</Link>
    </div>
  );
};

export default Home;
