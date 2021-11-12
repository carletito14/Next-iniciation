import Link from "next/link"
import Image from "next/image"
import imagen_test from "../public/favicon.ico"

// se puede importar la imagen de estas dos maneras

export default function Home() {
  return (
    <div>
      <Link href="/chanchitos">Ir a Chanchitos</Link>
      {/* <Image src='/favicon.ico' width={400} height={400} alt="example"/> */}
      <Image src={imagen_test} width={400} height={400} alt="example"/>
    </div>
  )
}
