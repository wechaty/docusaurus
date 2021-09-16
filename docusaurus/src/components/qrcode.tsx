import React from 'react'
import { QRCode } from 'react-qr-svg'

void React

export default function QrCodeComponent (props: any) {
  const value = decodeURIComponent(props.match.params[0]) || 'https://wechaty.js.org'

  return <QRCode
    bgColor="#FFFFFF00"
    fgColor="#44a838"
    level="Q"
    style={{
      padding : 10,
      width   : 256,
    }}
    value={value}
  />
}
