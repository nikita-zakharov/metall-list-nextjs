import { useCallbackModal } from "./Modals/CallbackModal/CallbackModalProvider";

const Navigation = () => {
    const callbackModal = useCallbackModal()

    const navList: Array<{ text: string; anchor: string }> = [
        { text: "О компании", anchor: "#" },
        { text: "Почему выбирают нас", anchor: "#" },
        { text: "Прайс-лист", anchor: "#" },
        { text: "Оплата и доставка", anchor: "#" },
        { text: "Контакты", anchor: "#" },
    ];

    return (
        <div className="bg-stone-100 shadow-sm hidden lg:block">
            <div
                className="container flex items-center justify-between py-2 bg-stone-100"
            >
                <nav className="flex items-center list-none">
                    {
                        navList.map((item) => (
                            <li key={item.text} className="px-2 py-4 mr-8 pl-0">
                                <a href={item.anchor}>{item.text}</a>
                            </li>
                        ))
                    }
                </nav>
                <button
                    onClick={() => callbackModal.show()}
                    className="py-3 px-8 bg-red-500 hover:scale-105 transition-transform rounded-full text-white font-medium"
                >
                    Заказать звонок
                </button>
            </div>
        </div>
    )
}

export default Navigation