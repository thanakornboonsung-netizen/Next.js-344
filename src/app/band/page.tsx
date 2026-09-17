"use client";

import { useState } from "react";
import BandCard from "@/components/BandCard";
import { bands } from "@/data/band";

export default function BandsPage() {
  // =========================
  // ค้นหา
  // =========================
  const [keyword, setKeyword] = useState("");

  // =========================
  // รายการโปรด
  // =========================
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  // =========================
  // แสดงเฉพาะรายการโปรด
  // =========================
  const [onlyFavorite, setOnlyFavorite] = useState(false);

  // =========================
  // จำนวนไลค์
  // =========================
  const [likeCounts, setLikeCounts] = useState<Record<number, number>>({
    1: 0,
    2: 0,
    3: 0,
  });

  // =========================
  // วงที่กดไลค์แล้ว
  // =========================
  const [likedIds, setLikedIds] = useState<number[]>([]);

  // =========================
  // ค้นหา
  // =========================
  const searchText = keyword.trim().toLowerCase();

  const visibleBands = bands.filter((band) => {
    // ตรวจสอบชื่อวง
    const matchesSearch = band.name
      .toLowerCase()
      .includes(searchText);

    // ตรวจสอบรายการโปรด
    const matchesFavorite =
      !onlyFavorite || favoriteIds.includes(band.id);

    return matchesSearch && matchesFavorite;
  });

  // =========================
  // เพิ่ม / ลบ รายการโปรด
  // =========================
  function handleToggleFavorite(id: number) {
    setFavoriteIds((prev) =>
      prev.includes(id)
        ? prev.filter((favoriteId) => favoriteId !== id)
        : [...prev, id]
    );
  }

  // =========================
  // เพิ่ม / ลด จำนวนไลค์
  // =========================
  function handleToggleLike(id: number) {
    const isCurrentlyLiked = likedIds.includes(id);

    // เปลี่ยนสถานะไลค์
    setLikedIds((prev) =>
      isCurrentlyLiked
        ? prev.filter((likeId) => likeId !== id)
        : [...prev, id]
    );

    // เพิ่มหรือลดจำนวนไลค์
    setLikeCounts((prev) => ({
      ...prev,
      [id]: Math.max(
        (prev[id] || 0) + (isCurrentlyLiked ? -1 : 1),
        0
      ),
    }));
  }

  return (
    <main className="bands-page">
      <h1>วงดนตรีที่ชื่นชอบ</h1>

      {/* =========================
          เครื่องมือค้นหา
      ========================= */}
      <div className="band-tools">

        {/* ช่องค้นหา */}
        <input
          type="search"
          placeholder="ค้นหาชื่อวง..."
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />

        {/* จำนวนรายการโปรด */}
        <p>
          รายการโปรด: {favoriteIds.length} วง
        </p>

        {/* ปุ่มแสดงรายการโปรด */}
        <button
          type="button"
          onClick={() => setOnlyFavorite((prev) => !prev)}
        >
          {onlyFavorite
            ? "แสดงวงทั้งหมด"
            : "แสดงเฉพาะรายการโปรด"}
        </button>
      </div>

      {/* =========================
          แสดงผลวงดนตรี
      ========================= */}
      {visibleBands.length === 0 ? (
        <p>
          {onlyFavorite
            ? "ยังไม่มีวงที่อยู่ในรายการโปรด"
            : "ไม่พบวงดนตรีที่ค้นหา"}
        </p>
      ) : (
        <section className="band-grid">
          {visibleBands.map((band) => (
            <BandCard
              key={band.id}
              band={band}
              isFavorite={favoriteIds.includes(band.id)}
              isLiked={likedIds.includes(band.id)}
              likeCount={likeCounts[band.id] || 0}
              onToggleFavorite={handleToggleFavorite}
              onToggleLike={handleToggleLike}
            />
          ))}
        </section>
      )}
    </main>
  );
}