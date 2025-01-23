import { auth } from "@/auth";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How do I optimize performance in a large React application?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "4", name: "Performance" },
    ],
    author: { _id: "3", name: "Emily" },
    upvotes: 10,
    views: 5,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "What are the best practices for state management in React?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "State Management" },
    ],
    author: { _id: "4", name: "John" },
    upvotes: 15,
    views: 8,
    createdAt: new Date(),
  },
  {
    _id: "3",
    title: "How to secure a Node.js REST API?",
    tags: [
      { _id: "3", name: "Node.js" },
      { _id: "5", name: "Security" },
    ],
    author: { _id: "5", name: "Alice" },
    upvotes: 7,
    views: 12,
    createdAt: new Date(),
  },
  {
    _id: "4",
    title: "What are the key differences between SQL and NoSQL databases?",
    tags: [
      { _id: "6", name: "Databases" },
      { _id: "7", name: "SQL" },
      { _id: "8", name: "NoSQL" },
    ],
    author: { _id: "6", name: "David" },
    upvotes: 20,
    views: 30,
    createdAt: new Date(),
  },
  {
    _id: "5",
    title:
      "How to improve Lighthouse performance scores for a web application?",
    tags: [
      { _id: "4", name: "Performance" },
      { _id: "9", name: "Web Development" },
    ],
    author: { _id: "7", name: "Sophia" },
    upvotes: 12,
    views: 18,
    createdAt: new Date(),
  },
  {
    _id: "6",
    title: "What are the differences between React and Vue.js?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "10", name: "Vue.js" },
    ],
    author: { _id: "8", name: "Michael" },
    upvotes: 9,
    views: 22,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <>
      <section className="flex w-full flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          imgSrc="/icons/search.svg"
          placeholder="Search Questions.."
          otherClasses="flex-1"
          route="/"
        />
      </section>
      <section className="mt-11">Home Filter</section>
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
