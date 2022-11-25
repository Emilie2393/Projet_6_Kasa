import { useState, useEffect } from 'react'


export function useFetch(url) {
  // state des data retournés par l'URL, du chargement et des erreurs //
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  
  useEffect(() => {
    
    async function fetchData() {
      try {
        // fetch les données de l'url puis retourne celles-ci dans data, le state de data est mis à jour //
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
        setError(true);
        // le chargement est terminé //
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { isLoading, data, error };
}