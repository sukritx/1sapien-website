import Breadcrumb from "@/components/Common/Breadcrumb";
import NotFound from "@/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | 1Sapien",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
};

const ErrorPage = () => {
  return (
    <>
      <Breadcrumb pageName="404 Page" />

      <NotFound />
    </>
  );
};

export default ErrorPage;
