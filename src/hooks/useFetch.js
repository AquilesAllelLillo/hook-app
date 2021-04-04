import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  //Ejemplo useRef
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  //Ejemplo useRef
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        //Ejemplo useRef
        // setTimeout(() => {
        //   if (isMounted.current) {
        //     setState({
        //       loading: false,
        //       error: null,
        //       data,
        //     });
        //   } else {
        //     console.log("setState no se llamó");
        //   }
        // }, 4000);

        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        }

        // setState({
        //   loading: false,
        //   error: null,
        //   data,
        // });
      });
  }, [url]);
  return state;
};
