import { getTopClipsMonth, getTopClipsToDay, getTopClipsWeek } from '@/api';
import ClipList from '@/components/clipsList/ClipList';
import {
  bringTheMonth,
  bringTheWeek,
  bringTheYesterday,
} from '@/utils/getDate';

const Home = async () => {
  const mostWatchedClipsToday = await getTopClipsToDay(bringTheYesterday());
  const mostWatchedClipsThisWeek = await getTopClipsWeek(bringTheWeek());
  const mostWatchedClipsThisMonth = await getTopClipsMonth(bringTheMonth());
  return (
    <main className="p-10 h-[94.3vh] w-full overflow-y-scroll scrollbar  dark:text-white">
      {/* today's most popular clips side */}
      <h1 className="font-bold text-3xl pt-5 pb-5">
        TODAY'S MOST POPULAR CLIPS
      </h1>
      <ClipList clipList={mostWatchedClipsToday.data} />
      {/* week's most popular clips side */}
      <h1 className="font-bold text-3xl pt-5 pb-5">
        WEEK'S MOST POPULAR CLIPS
      </h1>
      <ClipList clipList={mostWatchedClipsThisWeek.data} />
      {/* month's most popular clips side */}
      <h1 className="font-bold text-3xl pt-5 pb-5">
        MONTH'S MOST POPULAR CLIPS
      </h1>
      <ClipList clipList={mostWatchedClipsThisMonth.data} />
    </main>
  );
};

export default Home;
