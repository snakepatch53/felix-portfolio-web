export default function Header() {
    return (
        <>
            <div className="flex justify-center ">
                <div className="flex bg-green-900 justify-between items-center w-full max-w-[1200px] h-20 px-5">
                    <div>
                        <h1 className="text-white">Felix</h1>
                    </div>

                    <nav className="flex justify-center gap-5">
                        <Enlace text="Home" />
                        <Enlace text="About" />
                        <Enlace text="Education" />
                        <Enlace text="Skill" />
                        <Enlace text="Contact" />
                    </nav>
                </div>
            </div>
        </>
    );
}

function Enlace({ text }) {
    return (
        <a className="text-white" href="#">
            {text}
        </a>
    );
}
