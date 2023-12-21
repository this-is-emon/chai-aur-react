// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   // To store the API contents
  //   const [data, setData] = useState([]);
  //   //We want to fetch the data when the Github coponent is mounted, that's why using 'useEffect()'
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <>
      <div className=" text-cente p-4 bg-gray-600 text-white text-3xl flex flex-col items-center">
        Github followers : {data.followers}
        <img
          src={data.avatar_url}
          alt="Git Image of Hitesh Choudhary"
          width={300}
          className=" m-4 rounded-full"
        />
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
