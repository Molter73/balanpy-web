export const styles = {
    root: "fixed flex h-screen w-full max-w-[20rem] flex-col bg-white bg-clip-border justify-between align-center items-center",

    logo: {
        container: "flex flex-col p-4 mb-2 items-center",
        text: "block text-balanpy-800 text-xl font-bold"
    },

    navigation: {
        container: "flex min-w-[240px] flex-col gap-1 p-2 text-balanpy-700",
        item: "flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start focus:text-balanpy-800 focus:font-bold",
    },

    promo: {
        container: "border-2 rounded-3xl border-balanpy-700 p-2 flex flex-col max-w-[15rem] items-center text-center text-black",
        image: "bg-balanpy-200 rounded-full p-3",
        title: "block text-xl font-semibold",
    },
}
