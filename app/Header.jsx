'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import { RowsIcon } from '@radix-ui/react-icons'
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Button from './Button';
import Link from 'next/link';
import styles from '/styles/header.module.css';

export default function Header() {

    return (
        <div className={styles.header} >
            <div className={`${styles.left} ${styles.desktop}`}>
                <Link href="/ai-projects">AI Projects</Link> {"  "}
                <Link href="#">Advertising</Link> {"  "}
                <Link href="#">Episodic</Link> {"  "}
                <Link href="/about">About</Link>
            </div>
            <h1 className={styles.title}><Link href="/" >Jiri Kilevnik</Link></h1>
            <div className={`${styles.right} ${styles.desktop}`}>
                <Link href='https://www.linkedin.com/in/jiri-kilevnik-48a0584b/' target="_blank"><img src="/images/linkedin.svg" alt="LinkedIn" /></Link>{""}
                <Link href='https://www.imdb.com/name/nm8945630/?ref_=nv_sr_srsg_4' target="_blank"><img src="/images/imdb.svg" alt="Imdb" /></Link>{""}
                <Link href='mailto:kilevnik@gmail.com' target="_blank"><img src="/images/envelope.svg" alt="Email" /></Link>{""}
            </div>

            <Dialog.Root className={styles.mobile}>
                <Dialog.Trigger asChild className={styles.mobile}>
                    <div className={styles.mobileIconContainer}>
                        <RowsIcon />
                    </div>
                </Dialog.Trigger>
                <Dialog.Portal asChild className={styles.MobilePortal}>
                    <div className={styles.mobile}>
                        <Dialog.Close asChild>
                            <button className={styles.MobileCloseButton} aria-label="Close">
                                <Cross2Icon />
                            </button>
                        </Dialog.Close>
                        <Dialog.Content className={styles.DialogContent}>
                            Hey show me!!
                        </Dialog.Content>
                    </div>
                </Dialog.Portal>
            </Dialog.Root>
        </div >
    );
}