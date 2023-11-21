/**
 * Position prop can be one of
 * "left-center" | "left-top"|| "left-bottom"| "center"| "center-top"
 * "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */

type horizontalPosition = "left" | "center" | "right"
type verticalPosition = "top" | "center" | "bottom"

type ToastProps = {
    position: | Exclude<`${horizontalPosition}-${verticalPosition}`, 'center-center'> | 'center'
}

export const Toast = ({position} : ToastProps) => {

    return (
        <div>
            Toast notification Position - {position}
        </div>
    )
}