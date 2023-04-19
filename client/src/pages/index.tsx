import Head from "next/head";
import { Footer, Navbar, Sidebar } from "../components";

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
      <main className="font-sans">
        <Navbar />
        <Sidebar />
        <Footer />
      </main>
    </>
  );
};

export default index;
