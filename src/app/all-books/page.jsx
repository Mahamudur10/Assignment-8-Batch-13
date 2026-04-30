import AllBooksPage from "@/components/AllBooksPage";

const Page = async () => {
  const res = await fetch("https://assignment-8-batch-13.vercel.app/data.json");
  const books = await res.json();
  return <AllBooksPage books={books} />;
};

export default Page;