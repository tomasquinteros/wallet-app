import { colors } from "../../assets/styleVariables"
import { NotificationsOff, TransactionIcon } from "../Icons"

export default function TopComponent () {
    return (
        <header className="flex justify-around p-8 text-xs font-semibold">
            <section className={`w-2/4 border-r-2 border-${colors.color_secondaryL}`}>
                <span className="flex gap-2 items-center">
                    <TransactionIcon/>
                    Transaction
                </span>
            </section>
            <section>
                <span className="flex gap-2 items-center">
                    <NotificationsOff/>
                    Notifications
                </span>
            </section>
        </header>
    )
}