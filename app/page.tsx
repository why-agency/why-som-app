import WineList from "@/components/ui/wine-list";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between max-w-7xl mx-auto px-20 py-10">
      <WineList />
    </main>
  )
}
