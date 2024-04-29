import { useState } from "react";

export default function Header() {
    const [isFloat, setIsFloat] = useState(false);

    window.onscroll = function () {
        if (window.scrollY > 0) {
            setIsFloat(true);
        } else {
            setIsFloat(false);
        }
    }

    return (
        <div className={"sticky top-0 bg-[--c2-t] backdrop-blur-md " + (isFloat ? "shadow-xl" : "")}>
            <div className="flex justify-center px-[--pdd]">
                <div className="flex bg-transparent justify-between items-center w-full max-w-[--max-w] h-20">
                    <div>
                        <h1 className="text-white text-2xl font-content1 ">Felix</h1>
                    </div>
                    <nav className="flex justify-center gap-5 pl-4" >
                        <Enlace text="Home" url="#section-hero" />
                        <Enlace text="About" url="#section-aboutus" />
                        <Enlace text="Education" />
                        <Enlace text="Skill" />
                        <Enlace text="Contact" />
                    </nav>
                </div>
            </div>
        </div>
    );
}

function Enlace({ text, url }) {
    return (
        <a className="text-white hover:text-blue-400" href={url} >
            {text}
        </a>
    );
}
