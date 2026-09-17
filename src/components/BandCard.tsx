import Image from "next/image";
import type { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
  isFavorite: boolean;
  isLiked: boolean;
  likeCount: number;
  onToggleFavorite: (id: number) => void;
  onToggleLike: (id: number) => void;
};

export default function BandCard({
  band,
  isFavorite,
  isLiked,
  likeCount,
  onToggleFavorite,
  onToggleLike,
}: BandCardProps) {
  return (
    <article className="band-card">
      {/* รูปวง */}
      <Image
        src={band.image}
        alt={band.name}
        width={500}
        height={300}
        className="band-image"
      />

      <div className="band-content">
        {/* ชื่อวง */}
        <h2>{band.name}</h2>

        {/* แนวเพลง */}
        <p>แนวเพลง: {band.genre}</p>

        {/* รายละเอียด */}
        <p>{band.description}</p>

        {/* สมาชิก */}
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

        {/* =========================
            ปุ่มต่าง ๆ
        ========================= */}
        <div className="band-actions">

          {/* ปุ่มรายการโปรด */}
          <button
            type="button"
            aria-pressed={isFavorite}
            onClick={() => onToggleFavorite(band.id)}
          >
            {isFavorite
              ? "อยู่ในรายการโปรด"
              : "เพิ่มรายการโปรด"}
          </button>

          {/* ปุ่มไลค์ + จำนวนไลค์ */}
          <button
            type="button"
            aria-pressed={isLiked}
            onClick={() => onToggleLike(band.id)}
          >
            {isLiked
              ? `ถูกใจ ${likeCount}`
              : `ถูกใจ ${likeCount}`}
          </button>

        </div>
      </div>
    </article>
  );
}