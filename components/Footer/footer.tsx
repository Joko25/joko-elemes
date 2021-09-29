import Image from "next/image"

export default function Footer(){
    return(
        <>
            <div className=" bg-primary-100 p-8 rounded">
                <div className="flex">
                    <div className="w-4/12">
                        <div>
                            <Image src="/images/elemes-logo.png" width="207" height="50"></Image>        
                        </div>
                    </div>
                    <div className="w-2/12">
                        <span className="text-textprimary-500">Categories</span>
                    </div>
                    <div className="w-2/12">
                        <span className="text-textprimary-500">About</span>
                    </div>
                    <div className="w-4/12">
                        <span className="text-textprimary-500">Newletter</span>
                    </div>

                </div>
                <div className="flex">
                    <div className="w-4/12">
                        <div>
                            <p className="text-sm text-textprimary">
                                Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, <br/>
                                Kecamatan Setiabudi, Kota Jakarta Selatan, <br/>
                                Daerah Khusus Ibukota Jakarta 12950</p>
                                <span></span>
                                <span className="fa fa-phone text-primary"></span>
                                <span className="fa fa-envelope text-primary p-8"></span>
                                <span className="fa fa-instagram text-primary"></span>
                            
                        </div>
                    </div>
                    <div className="w-2/12">
                        <ul className="text-sm leading-loose text-textprimary">
                            <li>Cupcake</li>
                            <li>Pizza</li>
                            <li>Kebab</li>
                            <li>Salmon</li>
                            <li>Dougnut</li>
                        </ul>
                    </div>
                    <div className="w-2/12">
                        <ul className="text-sm leading-loose text-textprimary">
                            <li>About Us</li>
                            <li>FAQ</li>
                            <li>Report Problem</li>
                        </ul>
                    </div>
                    <div className="w-4/12">
                        <p className="text-sm text-textprimary">Get now free 50% discount for alll products on your first order</p>
                        <div className="footer__email-group mt-4 mb-4">
                            <div className="footer__email-input"><input type="text" placeholder="Your email address" /></div>
                            <div className="footer__email-button">SEND</div>
                        </div>
                        <span className="text-sm text-textprimary"><span className="fa fa-envelope text-primary"></span> elemesid@gmail.com</span><br/>
                        <span className="text-sm text-textprimary"> <span className="fa fa-phone text-primary"></span> 0888 1111 2222 </span>
                    </div>

                </div>
                
                
            </div>
            <footer className="text-sm tracking-wider text-gray-400 font-semibold text-center py-10">
            © 2021 Elemes id. All rights reserved
            </footer>
        </>
    )
}