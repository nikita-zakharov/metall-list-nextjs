const SectionContainer = ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="container py-10 lg:py-16 px-4 sm:px-0">
            {children}
        </div>
    )
}

export default SectionContainer