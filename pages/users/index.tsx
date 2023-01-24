import Layout from "@/components/Layout"
import { useRouter } from "next/router";
import styles from '@/styles/Users.module.css'

interface UsersProps {
  dataUsers: Array<any>;
}

export default function Users(props: UsersProps) {
  const { dataUsers } = props;
  const router = useRouter();

  //console.log(dataUsers);
  
  return (
    <Layout pageTitle="Users Page">
    <p>---Users Page---</p>
    {/* //kita ambil data dari json */}
    {dataUsers.map((userxxx) => (
      <div key={userxxx.id} onClick={() => router.push(`/users/${userxxx.id}`)} className={styles.card}>
      <p>{userxxx.name}</p>
      <p>{userxxx.email}</p>
      </div>
    ))}
    </Layout>
  )
}


export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}