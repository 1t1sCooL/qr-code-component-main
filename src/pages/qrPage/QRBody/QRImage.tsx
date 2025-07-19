import Image from "next/image";
// import { useRouter } from "next/router";

export default function QRImage(){
    // const { basePath } = useRouter();

    return (<div className="main-image">
        <Image
            // src={`${basePath}/image-qr-code.png`}
            src='/image-qr-code.png'
            alt="QR Code"
            width={300}
            height={300}
            priority
        />
    </div>)
}