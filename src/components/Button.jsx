import { cls } from "../lib/utils";

export default function Button({ className = "", text, dark = false }) {
    return (
        <button className={cls("rounded-md py-2 px-3 hover:bg-[--c1] text-[--c1-txt] transition hover:scale-105", className, {
            "border-solid border-2 border-[--c1] text-[--c1-txt]": dark,
            "bg-[--c1] hover:text-white": !dark
        })}>{text}</button>
    );
}
