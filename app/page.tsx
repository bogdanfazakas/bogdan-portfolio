import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-10 font-mono">
      <Head>
        <title>Bogdan Fazakas - Full Stack Engineer</title>
        <meta name="description" content="Geek personal website for Bogdan Fazakas, Full Stack JavaScript Engineer" />
      </Head>

      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Bogdan Fazakas</h1>
        <p className="text-xl mt-2">Full Stack JavaScript Engineer</p>
        <div className="mt-2">
          <a href="mailto:bogdan.fazakas@gmail.com" className="underline text-blue-400 block">bogdan.fazakas@gmail.com</a>
          <a href="https://www.linkedin.com/in/bogdan-fazakas-1a4b15102/" className="underline text-blue-400 block">LinkedIn</a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto space-y-10">
        <section>
          <h2 className="text-2xl mb-2 border-b border-gray-700 pb-1">💼 Work Experience</h2>
          <ul className="space-y-4">
            <li>
              <strong>Ocean Protocol</strong> – Full Stack JavaScript Engineer (Dec 2020 – Present)
              <p className="text-sm text-gray-400">Typescript, Web3.js, Node.js, React, Docker</p>
            </li>
            <li>
              <strong>Fivetech Software</strong> – Co-founder & CTO (Dec 2019 – Present)
            </li>
            <li>
              <strong>HyperMedia</strong> – Director of Engineering (Feb 2021 – Present)
            </li>
            <li>
              <strong>HyperMedia</strong> – Software Developer (Oct 2015 – Jan 2021)</li>
            <li>
              <strong>Intern at HyperMedia</strong> – (Jul 2015 – Oct 2015)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl mb-2 border-b border-gray-700 pb-1">🎓 Education</h2>
          <p><strong>Master’s Degree</strong>, Distributed Systems, Technical University of Cluj-Napoca (2017–2018)</p>
          <p><strong>Bachelor’s Degree</strong>, Computer Science, Technical University of Cluj-Napoca (2013–2017)</p>
        </section>

        <section>
          <h2 className="text-2xl mb-2 border-b border-gray-700 pb-1">🛠️ Skills & Tech</h2>
          <p>Typescript, Node.js, React, GraphQL, Docker, Blockchain, Web3.js, Ethers.js, Next.js</p>
        </section>

        <section>
          <h2 className="text-2xl mb-2 border-b border-gray-700 pb-1">📫 Contact</h2>
          <p>Email: bogdan.fazakas@gmail.com</p>
          <p>Location: Cluj-Napoca, Romania</p>
        </section>
      </main>
    </div>
  )
}
