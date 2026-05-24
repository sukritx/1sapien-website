import SingleBlog from "@/components/Blog/SingleBlog";
import CallToAction from "@/components/CallToAction";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "1Sapien Blog - Latest Articles on helping small businesses generate more revenue",
  description: "Discover the latest insights, tips, and strategies for helping small businesses generate more revenue on the 1Sapien Blog. Stay updated with our expert articles and success stories to boost your business growth.",
  alternates: {
    canonical: "https://1sapien.com/blogs",
  },
};

const Blog = () => {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <>
      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {posts.map((blog, i) => (
              <div key={i} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Blog;
