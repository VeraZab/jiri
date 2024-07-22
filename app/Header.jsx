'use client';

import { Cross2Icon, RowsIcon } from '@radix-ui/react-icons';
import { usePathname } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';

import styles from '/styles/header.module.css';

export default function Header() {
    const pathname = usePathname();

    return (
        <div className={styles.header} >
            <div className={`${styles.left} ${styles.desktop}`}>
                <Link className={pathname === '/ai-projects' ? styles.active : ''} href="/ai-projects">AI Projects</Link> {"  "}
                <Link className={pathname === '/advertising' ? styles.active : ''} href="/advertising">Advertising</Link> {"  "}
                <Link className={pathname === '/episodic' ? styles.active : ''} href="/episodic">Episodic</Link> {"  "}
                <Link className={pathname === '/about' ? styles.active : ''} href="/about">About</Link>
            </div>
            <h1 className={styles.title}><Link href="/" >Jiri Kilevnik</Link></h1>
            <div className={`${styles.right} ${styles.desktop}`}>
                <Link href='https://www.linkedin.com/in/jiri-kilevnik-48a0584b/' target="_blank"><img src="/images/linkedin.svg" alt="LinkedIn" /></Link>{""}
                <Link href='https://www.imdb.com/name/nm8945630/?ref_=nv_sr_srsg_4' target="_blank"><img src="/images/imdb.svg" alt="Imdb" /></Link>{""}
                <Link href='mailto:kilevnik@gmail.com' target="_blank"><img src="/images/envelope.svg" alt="Email" /></Link>{""}
            </div>

            <Dialog.Root >
                <div className={styles.mobile}>
                    <Dialog.Trigger className={`${styles.mobileIconContainer} ${styles.mobileAction}`} >
                        <RowsIcon />
                    </Dialog.Trigger>
                    <Dialog.Portal asChild className={styles.mobilePortal}>
                        <Dialog.Content className={styles.dialogContent}>
                            <Dialog.Close className={`${styles.mobileIconContainer} ${styles.mobileAction} ${styles.closeButton}`} aria-label="Close">
                                <Cross2Icon />
                            </Dialog.Close>
                            Hey show me!!
                        </Dialog.Content>

                    </Dialog.Portal>
                </div>
            </Dialog.Root >
        </div >
    );
}