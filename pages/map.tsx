import '../app/globals.css';
import Navbar from '@/app/components/Navbar/Navbar';
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic

const MyMap = dynamic(() => import('@/app/components/Map'), {
  ssr: false, // Disable server-side rendering for this component
});

const MapPage = () => (
    <main>
        <Navbar />
        <MyMap />
    </main>
);

export default MapPage;

