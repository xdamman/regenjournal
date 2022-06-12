import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import InputMentions from '../components/InputMentions';
import { v4 as uuidv4 } from 'uuid';

const createEntry = (props) => {
  console.log({props});
  const uuid = uuidv4();
  console.log({uuid});
}

const data = {
  mentions: [ 
    {
    id: "1",
    display: "@xdamman",
    name: "Xavier Damman",
  },
  {
    id: "2",
    display: "@sunnyleen",
    name: "Leen Schelfhout",
  },
  {
    id: "3",
    display: "@bruno",
    name: "Bruno Roemers",
  }
],
  hashtags: [
    {
      id: "1",
      display: "#regensunite",
    },
    {
      id: "2",
      display: "#solarpunk",
    },
    {
      id: "3",
      display: "#velotourfestival",
    }
  ]
};

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Regen Journal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Regen{' '}
          <a className="text-green-600" href="https://nextjs.org">
            Journal
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Share your updates and express your gratitude{' '}
        </p>

        <div className="mt-6 flex max-w-2xl flex-wrap items-center justify-center sm:w-full">
            <InputMentions data={data} onSubmit={createEntry} />
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://regenjournal.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Regen Journal
        </a>
      </footer>
    </div>
  )
}

export default Home
