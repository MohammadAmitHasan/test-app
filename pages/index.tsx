import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Layout from '../components/layout';
import Home from '../components/subpages/Home';

// interface Welcome {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   address: Address;
//   phone: string;
//   website: string;
//   company: Company;
// }

// interface Address {
//   street: string;
//   suite: string;
//   city: string;
//   zipcode: string;
//   geo: Geo;
// }

// interface Geo {
//   lat: string;
//   lng: string;
// }

// interface Company {
//   name: string;
//   catchPhrase: string;
//   bs: string;
// }

interface HomePageProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: object;
}

interface PeopleArray {
  data: HomePageProps[];
}

const HomePage = ({ data }: PeopleArray) => {
  console.log({ data });
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const dataR = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await dataR.json();
  console.log({ data });

  return { props: { data } };
};

export default HomePage;
