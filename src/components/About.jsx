export default function About() {
    return (
        <div className=" flex  ">
            <div>
                <div className="flex justify-center ">
                    <span className=" text-white grap-2">
                        About <span className=" text-blue-400"> me</span>
                    </span>
                </div>
                <div className="flex justify-center">
                    <a href="">
                        {" "}
                        aqui{" "}
                        <img
                            src="https://www.facebook.com/photo/?fbid=880634227139186&set=a.121322376403712"
                            alt=""
                        />
                    </a>
                </div>
                <div className="flex flex-col mb-4">
                    <span>Frontend Developer</span>
                    <p className=" text-white ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum
                        laboriosam corporis magni mollitia incidunt perferendis sunt beatae, at
                        officia veritatis soluta quae temporibus deleniti fugit culpa autem numquam
                        dicta.{" "}
                    </p>
                    <button className=" bg-blue-400 ">Read More</button>
                </div>
            </div>
        </div>
    );
}
