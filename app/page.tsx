import WineList from "@/components/ui/wine-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full grid md:grid-cols-2">
        {/* START menu */}
        <div className="flex flex-col">
          <div>
            <h2>Menu</h2>
          </div>
          {/* START form */}
          <WineList />
          {/* END form */}
        </div>
        {/* END menu */}

        {/* START wine list */}
        <div>
          <h2>Wine list</h2>
        </div>
        {/* START end list */}
      </div>
    </main>
  )
}
