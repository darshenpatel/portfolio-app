import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';


export default function Home() {
    return (
        <div>
            <Head>
                <title>Darshen Patel | Senior Product Manager</title>
                <meta 
                    name="description" 
                    content="Senior Product Manager"
                />
                <link rel="icon" href="/logo.svg"/>
            </Head>
            <Main />
            <About />
        </div>
    )
}