import {styles} from "./styles"

export default function Sidebar() {
    return <div className={styles.root}>
        <div className={styles.logo.container}>
            <img src="/balanpy.svg" />
            <h5 className={styles.logo.text}>Balanpy</h5>
        </div>
        <nav aria-label="Sidebar" className={styles.navigation.container}>
            <a href="#tus-mascotas" className={styles.navigation.item}>
                <img src="/dashboard/dashboard.svg" className="pr-1" />
                Dashboard
            </a>
            <a href="#tus-mascotas" className={styles.navigation.item}>
                <img src="/dashboard/mascotas.svg" className="pr-1" />
                Tus Mascotas
            </a>
            <a href="#veterinarios" className={styles.navigation.item}>
                <img src="/dashboard/veterinarios.svg" className="pr-1" />
                Veterinarios
            </a>
            <a href="#tus-citas" className={styles.navigation.item}>
                <img src="/dashboard/tus-citas.svg" className="pr-1" />
                Tus Citas
            </a>
            <a href="#tus-citas" className={styles.navigation.item}>
                <img src="/dashboard/ajustes.svg" className="pr-1" />
                Ajustes
            </a>
        </nav>
        <div className={styles.promo.container}>
            <img src="/dashboard/diamond.svg" alt="Accede a premium" className={styles.promo.image} />
            <h5 className={styles.promo.title}>Accede a premium</h5>
            Obtén ahora todas las características de Balanpy como registro de mascotas ilimitadas o descuentos en tu veterinario.
        </div>
    </div>
}
