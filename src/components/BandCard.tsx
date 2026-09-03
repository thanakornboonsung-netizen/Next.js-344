import Image from "next/image";
import type { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="band-card">
      <Image
        src={band.image}
        alt={band.name}
        width={500}
        height={300}
        className="band-image"
      />

      <div className="band-content">
        <h2>{band.name}</h2>

        <p>แนวเพลง: {band.genre}</p>

        <p>{band.description}</p>

        <h3>สมาชิก</h3>

        <ul>
          {band.members.map((member) => (
            <li key={member.id}>
              <Image
                src={member.image}
                alt={member.name}
                width={100}
                height={100}
                className="member-image"
              />
              {member.name} - {member.role}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
