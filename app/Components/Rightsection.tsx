type News = {
  title: string;
  url: string;
  published_date: string; // Corrected attribute name
  publisher: {
    name: string;
    url: string;
  };
};
const Rightsection = async () => {
  const url =
    "https://news-api14.p.rapidapi.com/top-headlines?country=us&language=en&pageSize=5&category=technology";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "36a13ab5b2msh45cd9649608a26bp1ece07jsnc83e86b2c19a",
      "X-RapidAPI-Host": "news-api14.p.rapidapi.com",
    },
  };


    const response = await fetch(url, options);
    const result = await response.json();
    const data:News[] = await result.articles;
 

  return (
    <div className="max-lg:hidden h-screen flex flex-col bg-black overflow-y-auto text-white">
    <div className="sticky top-0 flex p-5 pl-4 border-b-[1px] border-border bg-transparent backdrop-blur-sm z-50">
      <h1 className="text-xl font-bold">TwitterX News <span className="text-gray-400">Stay updated</span> </h1>
      
    </div>
    <div className="grid gap-6 p-5">
      {data &&
        data.map((e) => (
          <div
            key={e.title}
            className="p-6 border-twitter border rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">{e.title}</h2>
            <p className="text-gray-400">
              Published on{" "}
              {new Date(e.published_date).toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-gray-500">{e.publisher.name}</p>
            <a
              href={e.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-2 inline-block"
            >
              Read more
            </a>
          </div>
        ))}
    </div>
  </div>

  );
};

export default Rightsection;
