import styles from '@/app/page.module.css'
import {ReactNode} from "react";
type Props = {children: ReactNode, modal: ReactNode}

export default function BeforeLoginLayout({children, modal}: Props) {
    return (
        <div className={styles.container}>
            {children}
            {modal}
        </div>
    )
}