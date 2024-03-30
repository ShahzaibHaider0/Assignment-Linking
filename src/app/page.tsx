import Link from 'next/link'
export default function Home() {
  return (
    <div>
          Hello there!
          <br/>
          <Link href="/name">Go to name page</Link>
    </div>
  )
}
