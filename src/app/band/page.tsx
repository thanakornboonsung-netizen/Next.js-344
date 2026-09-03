import BandCard from "@/components/BandCard";
import { bands } from "@/data/band";

export default function BandsPage() {
  return (
    <main className="bands-page">
      <h1>วงดนตรีที่ชื่นชอบ</h1>

      <section className="band-grid">
        {bands.map((band) => (
          
          <BandCard
            key={band.id}
            band={band}
          />
        ))}
      </section>
    </main>
  );
}