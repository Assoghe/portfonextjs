import Navigation from "@/app/_components/navigation/navigation"

interface Props {
    children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
    return (
        <>
            <Navigation/>
            {children}
        </>
    )
}