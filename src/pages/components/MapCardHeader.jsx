import { Image } from 'primereact/image'

const MapCardHeader = ({ img, alt }) => {
  return (
    <div style={{ height: '100px', marginBottom: '20px' }}>
      <Image
        src={img}
        alt={alt}
        imageStyle={{
          width: '80px',
          marginTop: '20px',
          maxHeight: '120px',
          maxWidth: '150px',
        }}
        className="icon-hover"
      />
    </div>
  )
}

export default MapCardHeader
