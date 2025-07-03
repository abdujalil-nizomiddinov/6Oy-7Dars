import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        // Agar data.products bo‘lsa — uni olamiz, bo‘lmasa data ni o‘zini
        const result = data.products || data;
        setData(result);
      } catch (err) {
        console.error("Xatolik:", err);
        setData(null);
      }
      setIsPending(false);
    };

    fetchData();
  }, [url]);

  return { data, isPending };
}
