import { Toast } from 'primereact/toast'
import { useRef } from 'react'
import { SplitButton } from 'primereact/splitbutton'

const MapCardFooter = () => {
  const toast = useRef(null)

  const items = [
    {
      label: 'Wings Location',
      icon: 'pi pi-star-fill',
      command: () => {
        toast.current.show({
          severity: 'success',
          summary: 'Updated',
          detail: 'Data Updated',
        })
      },
    },
    {
      label: 'Spirits Location',
      icon: 'pi pi-prime',
      command: () => {
        toast.current.show({
          severity: 'warn',
          summary: 'Delete',
          detail: 'Data Deleted',
        })
      },
    },
    {
      label: 'Map Shrines',
      icon: 'pi pi-bolt',
      command: () => {
        window.location.href = 'https://reactjs.org/'
      },
    },
  ]

  return (
    <div>
      <Toast ref={toast}></Toast>
      <SplitButton
        label="Pasok"
        icon="pi pi-eye"
        // onClick={''}
        model={items}
        severity="warning"
        raised
      />
    </div>
  )
}
export default MapCardFooter
