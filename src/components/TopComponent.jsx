import { colors } from "../assets/styleVariables"


export default function TopComponent () {
    return (
        <header className="flex justify-around p-8">
            <section className={`w-2/4 border-r-2 border-${colors.color_secondaryL}`}>
                <span>
                    transaction
                </span>
            </section>
            <section>
                <span>
                    notifications
                </span>
            </section>
        </header>
    )
}