import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return <div className="h1-bold pt-40"></div>;
};

export default Home;
