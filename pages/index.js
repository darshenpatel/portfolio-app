import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
// import Interests from '../components/Interests';


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
            {/* <Projects />
            <Skills /> */}
            {/* <Interests /> */}
        </div>
    )
}