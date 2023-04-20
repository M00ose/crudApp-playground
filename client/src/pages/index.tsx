import Head from "next/head";
import { Navbar, Sidebar } from "../components";

const index = () => {
  return (
    <>
      <Head>
        <title>Prospectify</title>
        <meta
          name="description"
          content="Donor and fundraising management without the fluff."
        />
      </Head>
      <main className="p-2 font-sans">
        <Navbar />
        <Sidebar />
      </main>
    </>
  );
};

export default index;
