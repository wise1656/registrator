import {ReactNode} from "react";
import cn from "classnames";

interface ButtonProps {
    className?: string,
    onClick: () => void,
    children: ReactNode
}

export function Button(props: ButtonProps) {
    return <a className={cn("cursor-pointer p-1 px-3 border rounded", props.className)} onClick={props.onClick}>
        {props.children}
    </a>;
}

export function ButtonPrimary(props: ButtonProps) {
    return <Button {...props} className={cn(props.className, "bg-blue-300")}/>
}

export function ButtonSecondary(props: ButtonProps) {
    return <Button {...props} className={cn(props.className, "bg-red-300")}/>
}