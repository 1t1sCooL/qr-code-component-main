import QRImage from "@/pages/qrPage/QRBody/QRImage";
import QRHeader from "@/pages/qrPage/QRBody/QRHeader";
import QRParagraph from "@/pages/qrPage/QRBody/QRParagraph";

export default function QRBody(){
    return (<body>
    <main>
        <QRImage/>
        <QRHeader/>
        <QRParagraph/>
    </main>
    </body>)
}
