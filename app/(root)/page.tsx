import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const questions = [
  {
    _id: "1",
    title: "How do I optimize performance in a large React application?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "4", name: "Performance" },
    ],
    author: {
      _id: "3",
      name: "Emily",
      image: "https://avatar.iran.liara.run/public",
    },
    upvotes: 10,
    views: 5,
    answers: 10,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "What are the best practices for state management in React?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "State Management" },
    ],
    author: {
      _id: "4",
      name: "John",
      image: "https://avatar.iran.liara.run/public",
    },
    upvotes: 15,
    views: 8,
    answers: 10,
    createdAt: new Date("2024-12-1"),
  },
];

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;

  const filtredQuestions = questions.filter((question) =>
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
          placeholder="Search"
          imgSrc="/icons/search.svg"
          route="/"
        />
      </section>
      <section className="mt-11">
        <HomeFilter />
      </section>
      <div className="mt-10 flex w-full flex-col gap-6">
        {filtredQuestions.map((question) => (
          <h1 key={question.title}>
            <QuestionCard key={question._id} question={question} />
          </h1>
        ))}
      </div>
    </>
  );
};

export default Home;
