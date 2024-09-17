import QuestionCard, { Question } from "@/components/cards/QuestionCard";
import Homefilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";
const questions: Question[] = [
  {
    _id: 1,
    title: "What is the meaning of life?",
    tags: [
      { _id: 11, name: "philosophy" },
      { _id: 12, name: "existentialism" },
    ],
    author: {
      _id: 10,
      name: "John Doe",
      picture: "",
    },
    upvotes: 100,
    views: 5000,
    answers: [{ a: "42" }, { a: "it's whatever you want it to be" }],
    createdAt: new Date("2023-01-01"),
  },
  {
    _id: 2,
    title: "How does the universe work?",
    tags: [
      { _id: 21, name: "physics" },
      { _id: 22, name: "astronomy" },
    ],
    author: {
      _id: 20,
      name: "Jane Doe",
      picture: "",
    },
    upvotes: 200,
    views: 10000,
    answers: [
      { a: "it's all about gravity and space-time" },
      { a: "we don't really know yet" },
    ],
    createdAt: new Date("2024-01-15"),
  },
  {
    _id: 3,
    title: "What is the best way to learn programming?",
    tags: [
      { _id: 31, name: "programming" },
      { _id: 32, name: "learning" },
    ],
    author: {
      _id: 30,
      name: "Bob Smith",
      picture: "",
    },
    upvotes: 50,
    views: 2000,
    answers: [
      { a: "through practice and experimentation" },
      { a: "by following online tutorials" },
    ],
    createdAt: new Date("2024-02-01"),
  },
  {
    _id: 4,
    title: "How can I improve my writing skills?",
    tags: [
      { _id: 41, name: "writing" },
      { _id: 42, name: "communication" },
    ],
    author: {
      _id: 40,
      name: "Alice Johnson",
      picture: "",
    },
    upvotes: 150,
    views: 3000,
    answers: [
      { a: "by reading widely and often" },
      { a: "through writing workshops and feedback" },
    ],
    createdAt: new Date("2024-03-01"),
  },
  {
    _id: 5,
    title: "What are the benefits of meditation?",
    tags: [
      { _id: 51, name: "meditation" },
      { _id: 52, name: "wellness" },
    ],
    author: {
      _id: 50,
      name: "Mike Williams",
      picture: "",
    },
    upvotes: 250,
    views: 4000,
    answers: [
      { a: "it can reduce stress and anxiety" },
      { a: "it can improve mental clarity and focus" },
    ],
    createdAt: new Date("2024-04-01"),
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <Homefilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((q) => <QuestionCard key={q._id} q={q} />)
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
