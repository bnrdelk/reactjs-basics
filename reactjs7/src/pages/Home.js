import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query"; 
import Axios from "axios";

export const Home = () => {
const { username } = useContext(AppContext);
// [""] for unique id
const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  if (isError) {
    return <h1> error! </h1>;
  }

  if (isLoading) {
    return <h1> loading..</h1>;
  }
  
    return <div>
        This is the Home Page!
        You logined as {username}

        <h1>Random Cat Fact for you:</h1> 
        <h5> {catData.fact} </h5>

        <button onClick={refetch}> update fact </button>
    </div>
}