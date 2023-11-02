import { LatLngExpression, MapOptions } from 'leaflet'
import { MapContainer, TileLayer } from 'react-leaflet'
import useMapContext from './useMapContext'

export const LeafletMapContainer: React.FC<
  {
    center: LatLngExpression
    children: JSX.Element | JSX.Element[]
    zoom: number
    maxZoom: number
  } & MapOptions
> = ({ ...options }) => {
  const { setMap } = useMapContext()

  return (
    <MapContainer
      ref={e => setMap && setMap(e || undefined)}
      className="w-full h-full absolute outline-0 text-white"
      {...options}
    >
      {options.children}
    </MapContainer>
  )
}