import Button from "./Button";

export default function About({id}) {
    return (
       <div id={id} className="flex justify-center bg-[--c3] py-32 px-[--pdd] ">
            <div className=" flex flex-col gap-5 w-full max-w-[--max-w] ">
                <div className="flex justify-center ">
                    <span className=" text-white grap-2 text-4xl" >
                        About <span className=" text-[#01A9ED]"> me</span>
                    </span>
                </div>
                <div className="flex justify-center">
                    <a href="" className="rounded-full border-[#0482b8] border-l-2 border-r-2 p-1     ">
    
                        <img className=" rounded-full h-24 w-24 border-4 border-[#0482b8]"
                            src="./src/img/xd.jpg"
                            alt=""
                        />
                    </a>
                </div>
                <div className="flex flex-col justify-center items-center  " >
                    <span className=" text-2xl text-white font-content2">Frontend Developer</span>
    
                    <p className=" text-center text-lg text-white pt-6 pb-10 text-balance font-content2 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum
                        laboriosam corporis magni mollitia incidunt perferendis sunt beatae, at
                        officia veritatis soluta quae temporibus deleniti fugit culpa autem numquam
                        dicta.
                    </p>
                    <Button text="Read More" />
                </div>
            </div>
       </div>

    );
}
