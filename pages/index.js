import Layout from "../components/layout";
import unfetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import slug from "slug";
function HomePage({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>
      <h1>Welcome to Antalya</h1>
      <ul>
        {characters.results.map((character) => (
          <li key={character.id}>
            <Link
              href="/character/[slug]"
              as={`/character/${slug(character.name)}-${character.id}`}
            >
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{``}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  // data getch (await datayı çekene kadar bekle)
  const data = await unfetch("https://rickandmortyapi.com/api/character/");
  //const data = await unfetch("https://imdb-api.com/fullcast/tt1131748");
  const characters = await data.json();
  return {
    props: {
      //character : characher
      //key ve value aynı ise tek birini yazmak yeterli
      characters,
    }, // will be passed to the page component as props
  };
}

export default HomePage;
