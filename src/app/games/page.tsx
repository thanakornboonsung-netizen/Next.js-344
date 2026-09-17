"use client";

import { useState } from "react";
import Link from "next/link";

import GameForm, {
    type GameDraft,
} from "@/components/GameForm";

import { games as initialGames } from "@/data/games";
import type { Game } from "@/types/games";

export default function GamesPage() {
    const [games, setGames] = useState<Game[]>(initialGames);
    const [editingGame, setEditingGame] = useState<Game | null>(null);

    function handleSave(draft: GameDraft) {
        if (editingGame) {
            // แก้ไขเกมเดิม
            setGames((prev) =>
                prev.map((game) =>
                    game.id === editingGame.id
                        ? {
                            ...game,
                            name: draft.name.trim(),
                            platform: draft.platform,
                            hours: Number(draft.hours),
                            status: draft.status,
                        }
                        : game
                )
            );

            setEditingGame(null);
            return;
        }

        // เพิ่มเกมใหม่
        const newGame: Game = {
            id: Date.now().toString(),
            name: draft.name.trim(),
            platform: draft.platform,
            hours: Number(draft.hours),
            status: draft.status,
        };

        setGames((prev) => [...prev, newGame]);
    }

    function handleDelete(id: string) {
        const confirmDelete = window.confirm(
            "คุณต้องการลบเกมนี้หรือไม่?"
        );

        if (!confirmDelete) {
            return;
        }

        setGames((prev) =>
            prev.filter((game) => game.id !== id)
        );

        if (editingGame?.id === id) {
            setEditingGame(null);
        }
    }

    function handleEdit(game: Game) {
        setEditingGame(game);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <main className="games-page">
            <h1>เกมที่ตั้งใจจะเล่น</h1>

            <GameForm
                editingGame={editingGame}
                onSave={handleSave}
                onCancel={() => setEditingGame(null)}
            />

            <section className="games-list">
                <div className="games-list-header">
                    <h2>รายการเกม</h2>
                    <span>{games.length} เกม</span>
                </div>

                {games.length === 0 ? (
                    <p className="empty-message">
                        ยังไม่มีรายการเกม
                    </p>
                ) : (
                    <div className="game-grid">
                        {games.map((game) => (
                            <article className="game-card" key={game.id}>
                                <h3>
                                    <Link href={`/games/${game.id}`}>
                                        {game.name}
                                    </Link>
                                </h3>

                                <div className="game-info">
                                    <p>
                                        <strong>แพลตฟอร์ม:</strong>{" "}
                                        {game.platform}
                                    </p>

                                    <p>
                                        <strong>เวลาที่คาดว่าจะเล่น:</strong>{" "}
                                        {game.hours} ชั่วโมง
                                    </p>

                                    <p>
                                        <strong>สถานะ:</strong>{" "}
                                        <span className="game-status">
                                            {game.status}
                                        </span>
                                    </p>
                                </div>

                                <div className="game-actions">
                                    <button
                                        type="button"
                                        onClick={() => handleEdit(game)}
                                        className="edit-button"
                                    >
                                        แก้ไข
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => handleDelete(game.id)}
                                        className="delete-button"
                                    >
                                        ลบ
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}