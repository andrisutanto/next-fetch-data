import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout pageTitle='Home Page'>
    <Image src="/image.jpg" width={800} height={350} alt="profile" />
    <h1 className={styles['title-homepage']}>Welcome to my site</h1>
    </Layout>
  );
}
