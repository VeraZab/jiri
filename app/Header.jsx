'use client';

import { Cross2Icon, RowsIcon } from '@radix-ui/react-icons';
import { usePathname } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import PropTypes from 'prop-types';

import styles from '/styles/header.module.css';

const SocialLinks = () => {
    return (
        <>
            <Link href='https://www.linkedin.com/in/jiri-kilevnik-48a0584b/' target="_blank"><img src="/images/linkedin.svg" alt="LinkedIn" /></Link>{""}
            <Link href='https://www.imdb.com/name/nm8945630/?ref_=nv_sr_srsg_4' target="_blank"><img src="/images/imdb.svg" alt="Imdb" /></Link>{""}
            <Link href='mailto:kilevnik@gmail.com' target="_blank"><img src="/images/envelope.svg" alt="Email" /></Link>{""}
        </>
    )
}

const LinkWrapper = ({ children, isMobile }) => {
    if (isMobile) {
        return (
            <Dialog.Close asChild>
                {children}
            </Dialog.Close>
        )
    }
    return children
}


const NavigationLinks = ({ isMobile }) => {
    const pathname = usePathname();

    return (
        <>
            <LinkWrapper isMobile={isMobile}>
                <Link className={pathname === '/ai-projects' ? styles.active : ''} href="/ai-projects">AI Projects</Link>
            </LinkWrapper>
            <LinkWrapper isMobile={isMobile}>
                <Link className={pathname === '/advertising' ? styles.active : ''} href="/advertising">Advertising</Link>
            </LinkWrapper>
            <LinkWrapper isMobile={isMobile}>
                <Link className={pathname === '/episodic' ? styles.active : ''} href="/episodic">Episodic</Link>
            </LinkWrapper>
            <LinkWrapper isMobile={isMobile}>
                <Link className={pathname === '/film' ? styles.active : ''} href="/film">Film</Link>
            </LinkWrapper>
            <LinkWrapper isMobile={isMobile}>
                <Link className={pathname === '/about' ? styles.active : ''} href="/about">About</Link>
            </LinkWrapper>
        </>
    )
}

export default function Header() {
    return (
        <div className={styles.header} >
            <div className={`${styles.left} ${styles.desktop}`}>
                <NavigationLinks />
            </div>
            <h1 className={styles.title}><Link href="/" >Jiri Kilevnik</Link></h1>
            <div className={`${styles.right} ${styles.desktop}`}>
                <SocialLinks />
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
                            <div className={styles.mobileLinks}>
                                <NavigationLinks isMobile />
                                <div className={styles.socialMobileLinksContainer}>
                                    <SocialLinks />
                                </div>
                            </div>
                        </Dialog.Content>
                    </Dialog.Portal>
                </div>
            </Dialog.Root >
        </div >
    );
}

NavigationLinks.PropTypes = {
    isMobile: PropTypes.bool,
}

LinkWrapper.PropTypes = {
    isMobile: PropTypes.bool,
    children: PropTypes.node.isRequired
}
