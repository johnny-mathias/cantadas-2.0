interface HeaderProps {
    id: string
    title: string
    sub: string
}

export function Header(props: HeaderProps) {
    return (
        <header className="header-container">
            <h1>{props.title}</h1>
            <h2>{props.sub}</h2>
        </header>
    )
}