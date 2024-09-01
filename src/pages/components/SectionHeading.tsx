const SectionHeading = ({ children }: { children: React.ReactElement }) => {
    return (
        <h2
            className="text-2xl lg:text-4xl font-medium mb-2 text-left border-l-2 border-red-500 pl-4"
        >
            {children}
        </h2>

    )
}

export default SectionHeading