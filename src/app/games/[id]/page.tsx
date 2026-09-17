import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { games } from "@/data/games";

type GameDetailPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export async function generateMetadata({
    params,
}: GameDetailPageProps): Promise<Metadata> {
    const { id } = await params;

    const game = games.find((game) => game.id === id);

    if (!game) {
        return {
            title: "ไม่พบเกม",
        };
    }

    return {
        title: game.name,
    };
}

export default async function GameDetailPage({
    params,
}: GameDetailPageProps) {
    const { id } = await params;

    const game = games.find((game) => game.id === id);

    if (!game) {
        notFound();
    }

    return (
        <main className="game-detail-page">
            <h1>{game.name}</h1>

            <div className="game-detail-card">
                <p>
                    <strong>ชื่อเกม:</strong> {game.name}
                </p>

                <p>
                    <strong>แพลตฟอร์ม:</strong> {game.platform}
                </p>

                <p>
                    <strong>จำนวนชั่วโมงที่คาดว่าจะใช้เล่น:</strong>{" "}
                    {game.hours} ชั่วโมง
                </p>

                <p>
                    <strong>สถานะ:</strong> {game.status}
                </p>
            </div>
        </main>
    );
}