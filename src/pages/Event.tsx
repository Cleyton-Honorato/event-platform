import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

interface EventProps {}

export default function Event(props: EventProps) {
  const { slug } = useParams<{slug: string}>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
}
