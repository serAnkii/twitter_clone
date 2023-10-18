import router from "next/router";
import { toast } from "sonner";
import getbookmarks from "../api/bookmarks";

interface Tweet {
  id: string;
  text: string;
  profile_id?: string;
  created_at?: Date | null;
  updated_at: Date | null;
  created_by?: string;
}

const Bookmarksdata = async () => {
  const data = await getbookmarks();
  const bookmarks = data as Tweet[];

  return (
    <div>
      {bookmarks.map((e) => (
        <div className=" p-4 flex flex-col gap-y-6 rounded-md transition duration-300 ease-in-out z-0 border-border border-b">
          <h1 className="font-serif font-bold text-xl text-white">
            <span className="text-twitter"> @ {e.created_by}</span>
          </h1>
          <p className="text-2xl capitalize first-letter:text-2xl font-serif font-bold text-white">
            {e.text}
          </p>
          <h1 className="text-xs text-gray-500">
            Created at: {String(e.created_at)}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Bookmarksdata;
