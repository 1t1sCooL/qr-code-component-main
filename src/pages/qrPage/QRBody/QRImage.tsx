import Image from "next/image";

export default function QRImage(){
    return (<div className="main-image">
        <Image
            src="/image-qr-code.png"
            alt="QR Code"
            width={300}
            height={300}
            priority
        />
    </div>)
}