import Link from 'next/link'
import Sample from '../components/Sample'

const myStyle = {color: "red", borderLeft: "4px solid black"}

const Index = () => (
    <div>
        <Link href="/about"><a style={myStyle}>About</a></Link>
        <h2>Hello Next.JS</h2>

        <p>Sample Style by jsx</p>
        <hr/>
        <Sample/>
        
        <style jsx>{`
        p{
            color: blue;
            font-size: 20px;
            border: 5px solid black;
            padding: 5px;
        }
        `}</style>

        <style global jsx>{`
            h4 {
                color: pink;
                font-size: 15px;
                border: 1px solid red;
            }
        `}</style>
    </div>
)

export default Index