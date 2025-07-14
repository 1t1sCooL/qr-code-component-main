import Head from "next/head";
import Image from 'next/image';

export default function Home() {
  return (<>
  <Head>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="icon" type="image/png" sizes="32x32" href='./favicon-32x32.png'/>
    <title>Frontend Mentor | QR code component</title>
  </Head>
  <body>
    <main>
      <div className="main-image">
        <Image 
          src="/image-qr-code.png" 
          alt="QR Code" 
          width={300} 
          height={300}
          priority 
        />
      </div>
      <div className="main-header">
        <h1 className="hidden">Improve front-end skills</h1>
        <h2>Improve your front-end skills by building projects</h2>
      </div>
      <div className="main-paragraph">
        <p>
          Scan the QR code to visit Frontend Mentor and take your
           coding skills to the next level
        </p>
      </div>
    </main>
  </body>
</>);
}
