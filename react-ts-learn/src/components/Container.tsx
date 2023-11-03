type ContainerProps = {
    styles: React.CSSProperties
}

export const Container = (props: ContainerProps) => {
    return ( 
        <div style={props.styles}>
            The content goes here
        </div>
     )
}