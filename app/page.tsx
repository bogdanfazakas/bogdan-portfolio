import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-6 py-12 font-mono">
      <Head>
        <title>Bogdan Fazakas - Full Stack Engineer</title>
        <meta name="description" content="Geek personal website for Bogdan Fazakas, Full Stack JavaScript Engineer" />
      </Head>

      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-blue-400">Bogdan Fazakas</h1>
        <p className="text-2xl mt-3 text-gray-300">Full Stack JavaScript Engineer</p>
        <div className="mt-4 flex justify-center gap-4 text-blue-300">
          <a href="mailto:bogdan.fazakas@gmail.com" className="hover:underline">bogdan.fazakas@gmail.com</a>
          <span>|</span>
          <a href="https://www.linkedin.com/in/bogdan-fazakas-1a4b15102/" target="_blank" className="hover:underline">LinkedIn</a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto space-y-16">
        <section>
          <h2 className="text-3xl mb-4 border-b border-gray-700 pb-2">💼 Work Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Ocean Protocol <span className="text-sm font-normal text-gray-400">(Dec 2020 – Present)</span></h3>
              <p>Part of the development team for Ocean Nodes and the decentralized data marketplace, developer toolings  (ocean.js, ocean-cli), and monitoring analytics services for ocean nodes and compute to data.</p>
              <p className="text-sm text-gray-400">Stack: TypeScript, Web3.js, Ethers.js, Node.js, React, Express, Encore, Elastic, PostgresSQL GraphQL, Next.js, Docker, Kubernetes, Solidity</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Fivetech Software <span className="text-sm font-normal text-gray-400">(Dec 2019 – Present)</span></h3>
              <p>Co-founded a software startup, developed a live event platform funded by an EU grant, now providing services across multiple industries.</p>
              <p className="text-sm text-gray-400">Stack: TypeScript, Node.js, React, Docker, WebRTC, Kurento</p>
            </div>
           <div>
              <h3 className="text-xl font-semibold">HyperMedia – Director of Engineering <span className="text-sm font-normal text-gray-400">(Feb 2023 – Present)</span></h3>
              <p>Responsible for managing multiple cross-functional teams, project roadmaps, and stakeholder communication.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">HyperMedia – Team Lead & Project Manager <span className="text-sm font-normal text-gray-400">(Jan 2021 – Feb 2023)</span></h3>
              <p>Led development teams and coordinated project implementation based on enhancements and products derived from the proprietary video conferencing platform.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">HyperMedia – Software Developer <span className="text-sm font-normal text-gray-400">(Oct 2015 – Jan 2021)</span></h3>
              <p>Architected and developed a proprietary video conferencing platform using WebRTC and Kurento. Worked with AngularJS, NodeJS, and MongoDB, also Java and Swift/ObjectiveC on various internal tools.</p>
              <p className="text-sm text-gray-400">Stack: Node.js, WebRTC, AngularJS, Kurento, MongoDB, Swift/ObjectiveC, Java, Docker</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">HyperMedia – Intern <span className="text-sm font-normal text-gray-400">(Jul 2015 – Oct 2015)</span></h3>
              <p>Supported frontend projects while learning JavaScript, HTML, and CSS.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl mb-4 border-b border-gray-700 pb-2">🎓 Education</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Master’s Degree</strong> – Distributed Systems and Computer Networks, Technical University of Cluj-Napoca (2017–2019)</li>
            <li><strong>Bachelor’s Degree</strong> – Computer Science, Technical University of Cluj-Napoca (2013–2017)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl mb-4 border-b border-gray-700 pb-2">🛠️ Skills & Tech</h2>
          <p className="leading-relaxed">Typescript, Node.js, React, GraphQL, Docker, Blockchain, Web3.js, Ethers.js, Next.js, WebRTC, Kurento, SwiftUI, AngularJS, MongoDB, Java, Spring</p>
        </section>

        <section>
          <h2 className="text-3xl mb-4 border-b border-gray-700 pb-2">📫 Contact</h2>
          <p>Email: <a href="mailto:bogdan.fazakas@gmail.com" className="text-blue-400 hover:underline">bogdan.fazakas@gmail.com</a></p>
          <p>Location: Cluj-Napoca, Romania</p>
        </section>
      </main>
    </div>
  )
}