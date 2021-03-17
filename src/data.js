export default function dohvatiPodatke(searchTerm) {
  
  return fetch(`https://api.lyrics.ovh/suggest/${searchTerm}`).then(
    (rezultat) => {
      return rezultat.json();
    }
  );
}
