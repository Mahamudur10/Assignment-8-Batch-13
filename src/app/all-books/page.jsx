import AllBooksPage from "@/components/AllBooksPage";

const Page = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const books = await res.json();
  return <AllBooksPage books={books} />;
};

export default Page;