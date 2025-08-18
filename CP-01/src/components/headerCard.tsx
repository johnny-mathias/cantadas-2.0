interface HeaderProps {
    id: string
    title: string
    sub: string
}

export function Header(props: HeaderProps) {
    return (
        <header
        style={{
            color: "darkmagenta",
            border: "1px solid #000",
            padding: "1rem"
        }}>
            <h1>{props.title}</h1>
            <h2>{props.sub}</h2>
        </header>
    )
}