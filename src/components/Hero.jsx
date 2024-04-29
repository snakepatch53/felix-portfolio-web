
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";
export default function Hero({id}) {
    return (
       <div id={id} className=" flex justify-center px-[--pdd] ">
            <div className=" flex flex-col-reverse lg:flex-row justify-center max-w-[--max-w] text-white w-full bg-[--c2] pb-32 gap-5">
                <div className=" flex flex-col max-w-none lg:max-w-[700px] ">
                    <div className=" flex-1 flex flex-col justify-center gap-2 ">
                        <h1 className="text-5xl font-content1 text-center lg:text-left ">Hi, i am Felix Jimenez</h1>
                        <span className=" text-2xl text-[--c1] text-center lg:text-left font-content1">Frontend Developer</span>
    
                        <p className="text-balance text-lg text-center lg:text-left tracking-wide my-5 font-content2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deleniti odit non dolorem vitae laudantium, enim possimus voluptates minima quo excepturi molestiae quisquam sunt ipsa debitis. Eos aliquid beatae illum?</p>
                        <div className="flex gap-2 justify-center lg:justify-start">
                            <Button text="Hire Me" />
                            <Button text="Lets Talk" dark />
                        </div>
                    </div>
                    <div className="flex gap-4 justify-center lg:justify-start items-center mt-3">
                        <SocialItem href="https://www.facebook.com" icon={faFacebook} />
                        <SocialItem href="https://www.twitter.com" icon={faXTwitter} />
                        <SocialItem href="https://www.linkedin.com" icon={faLinkedin} />
                    </div>
                </div>
                <div className="flex-1 flex justify-center lg:justify-end">
                    <img className="w-full max-w-[400px] aspect-square object-cover bg-white/50 rounded-full " src="./src/img/probal-removebg.png " alt="" />
                </div>
            </div>
       </div>
    );
}


function SocialItem({ href, icon }) {
    return (
        <a href={href} className="flex gap-4 justify-start items-center  text-xl transition hover:scale-125 opacity-80 hover:opacity-100 ">
            <FontAwesomeIcon icon={icon} />
        </a>
    );
}