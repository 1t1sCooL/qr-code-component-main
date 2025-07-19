import Head from "next/head";
// import {useRouter} from "next/router";

export default function QRHead(){

    // const { basePath } = useRouter();

    return(<Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" type="image/png"
              //href={`${basePath}/favicon-32x32.png`}
              href='/favicon-32x32.png'
        />
        <title>Frontend Mentor | QR code component</title>
    </Head>
        )
}