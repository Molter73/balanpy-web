import {styles} from "./styles"
import {navigation} from "@/constants/dashboard"

import NavigationItem from "./navigation-item"

export default function Sidebar({children}) {
    return (
        <div>
            <div className={styles.root}>
                <div className={styles.logo.container}>
                    <img src="/balanpy.svg" />
                    <h5 className={styles.logo.text}>Balanpy</h5>
                </div>
                <nav aria-label="Sidebar" className={styles.navigation.container}>
                    {navigation.map((item, i) => {
                        return <NavigationItem key={i} href={item.href} text={item.text} image={item.image} />
                    })}
                </nav>
                <div className={styles.promo.container}>
                    <img src="/dashboard/diamond.svg" alt="Accede a premium" className={styles.promo.image} />
                    <h5 className={styles.promo.title}>Accede a premium</h5>
                    Obtén ahora todas las características de Balanpy como registro de mascotas ilimitadas o descuentos en tu veterinario.

                </div>
            </div>
            <div className="sm:ml-[20rem]">
                {children}
            </div>
        </div>
    )
}
