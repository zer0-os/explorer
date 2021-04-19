import Head from "next/head";

import Card from "components/Card";

export default function Explorer() {
  return (
    <div className="h-full overflow-hidden">
      <Head>
        <title>Card Preview</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="items-middle relative flex items-center justify-center w-full h-full min-h-screen bg-gray-200">
        <Card />
      </div>
    </div>
  );
}
