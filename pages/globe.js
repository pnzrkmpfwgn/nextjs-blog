import dynamic from "next/dynamic";
import Link from "next/link"

const Globe = dynamic(import("react-globe.gl"), { ssr: false });

export default function globe() {
  return <div>
      <Globe globeImageUrl="/static/asd.png" pointAltitude="size" pointColor="color" />
      <Link href="/"><a>Go back home</a></Link>
  </div>
}

//     <Globe
//     globeImageUrl="/asd.png"

//     pointAltitude="size"
//     pointColor="color"
//   />
