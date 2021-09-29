import Head from "next/head"
import { Children, ReactNode } from "react"
import Footer from "../Footer/footer"
import Header from "../Header/header"
import classnames from "classnames";

interface layoutProp {
    children: ReactNode;
    pageTitle: string;
    isHero:boolean;
    isMobile:boolean;
}
export default function Layout(props:layoutProp){
    const menuList = [
        {id:1, label:'Home', link:'#'},
        {id:2, label:'About', link:'#'},
        {id:3, label:'Promotion', link:'#'},
        {id:4, label:'Blog', link:'#'},
        {id:5, label:'Contact Us', link:'#'}
    ]

    const {children, pageTitle, isHero} = props

    return(
        <>
            <Head>
                <title>{pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
                />
                <meta
                property="og:image"
                content={`https://og-image.now.sh/${encodeURI(
                    pageTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={pageTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                
            </Head>
            <div className={classnames(isHero ? "bg-hero": "")}>
                <div className="container mx-auto font-rubik">
                    <Header menu={menuList}></Header>
                    <div>
                        {children}
                    </div>
                    <Footer></Footer>

                </div>

            </div>
            
            
        </>
    )
}