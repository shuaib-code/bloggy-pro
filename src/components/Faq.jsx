import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const Faq = () => {
  const items = [
    {
      uuid: 4786427346,
      heading: "What is a blog website?",
      content:
        "A blog website is an online platform where individuals or organizations regularly publish content in a chronological order. These posts, often referred to as blog posts, can cover a wide range of topics and are typically written in a more informal and conversational style.",
    },
    {
      uuid: 4786425457346,
      heading: "Why should I start a blog website?",
      content:
        "Starting a blog website can have several benefits. It allows you to share your expertise, connect with a like-minded community, express your creativity, and even potentially earn money through various monetization methods like advertising, affiliate marketing, or selling products or services.",
    },
    {
      uuid: 4786427677346,
      heading: "What should I blog about?",
      content:
        "You can blog about virtually any topic you are passionate about or knowledgeable in. Popular blog niches include travel, food, fashion, technology, health, personal development, and more. Choose a niche that aligns with your interests and expertise.",
    },
    {
      uuid: 478646733427346,
      heading: "How often should I publish new blog posts?",
      content:
        "The frequency of publishing new blog posts depends on your goals and availability. Consistency is key, so try to establish a regular posting schedule that you can maintain. This could be daily, weekly, bi-weekly, or monthly.",
    },
    {
      uuid: 4786467356467346,
      heading: "How do I protect my blog's content from plagiarism?",
      content:
        "To protect your content, you can use tools like Copyscape to check for plagiarism. You can also add a copyright notice to your blog and consider using legal disclaimers and terms of use.",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-7">
      <div className="my-10">
        <h1 className="text-3xl font-bold mb-2 text-gray-800 text-center font-plusJakartaSans">
          <span className="text-primary">F</span>requently{" "}
          <span className="text-primary">A</span>sked{" "}
          <span className="text-primary">Q</span>uestion
        </h1>
        <p className="text-sm mb-4 text-gray-500 font-medium text-center">
          Everything you need to know
        </p>
        <div className="border-2 border-opacity-20 border-primary rounded-xl overflow-hidden">
          <Accordion allowZeroExpanded className="font-medium w-full">
            {items.map((item) => (
              <AccordionItem key={item.uuid}>
                <AccordionItemHeading className="font-semibold">
                  <AccordionItemButton>{item.heading}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>{item.content}</AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <div>
        <img src="/fag.png" />
      </div>
    </div>
  );
};

export default Faq;
