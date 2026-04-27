import SingleClient from "./SingleClient";
import { clientsData } from "./clientsData";

const Clients = () => {
  return (
    <section className="bg-gray-1 pb-16 pt-16 dark:bg-dark-2 lg:pb-20 lg:pt-20">
      <div className="container px-4">
        <p className="mb-8 text-center text-xl font-medium text-body-color dark:text-dark-6">
          Just so you know we're legit, we partner with…
        </p>
        <div className="-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11">
          {clientsData.map((client, i) => (
            <SingleClient key={i} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
