import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./index.module.scss"

function DefaultLayout({children}) {
    return (
        <>
        <Header />
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.content}>{children}</div>
        </div>
        </>
    )
}
export default DefaultLayout