import React from "react";
import { useQRCode } from 'next-qrcode';
import links from '../../links.json';

export default function QrCode() {
    const { Canvas } = useQRCode();
    return (
        <div className="qr show">
            <Canvas
                text={`${links.origin}/rate`}
                logo={{
                    src: '/logo.svg'
                }}
                options={{
                level: 'H',
                margin: 3,  
                scale: 10,
                width: 300,
                color: {
                    dark: '#26425B',
                    light: '#fff',
                },
                }}
            />
        </div>
    )
}