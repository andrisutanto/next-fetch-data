import Layout from "@/components/Layout"
import { useRouter } from "next/router"

interface UserDapatDefine {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface UserDetailProps {
  //userDapat: object;
  userDapat: UserDapatDefine;
}

export default function UserDetail(props: UserDetailProps) {
  const router = useRouter();
  const {id} = router.query;
  const {userDapat} = props;

  return (
    <Layout pageTitle="User Detail">
    <p>User Detail Page {id}</p>
    <p>{userDapat.name}</p>
    <p>{userDapat.email}</p>
    <p>{userDapat.phone}</p>
    <p>{userDapat.website}</p>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  //const paths = dataUsers.map((user) => ({
  const paths = dataUsers.map((user: UserDapatDefine) => ({
    params: {
      id: `${user.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  }
}

//export async function getStaticProps(context) {
export async function getStaticProps(context: GetStaticProps) {
  const {id} = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const userDapat = await res.json();
  return {
    props: {
      userDapat,
    },
  };
}
