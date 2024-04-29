import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Tracker from "@/components/tracker";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <Tracker />
    </div>
  );
}
