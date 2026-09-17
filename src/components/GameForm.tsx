"use client";

import {
    useEffect,
    useState,
    type ChangeEvent,
    type FormEvent,
} from "react";

import type { Game, GameStatus } from "@/types/games";

export type GameDraft = {
    name: string;
    platform: string;
    hours: string;
    status: GameStatus;
};

type GameFormProps = {
    editingGame?: Game | null;
    onSave: (draft: GameDraft) => void;
    onCancel: () => void;
};

type FormErrors = {
    name?: string;
    platform?: string;
    hours?: string;
};

const emptyDraft: GameDraft = {
    name: "",
    platform: "",
    hours: "",
    status: "ยังไม่เริ่ม",
};

export default function GameForm({
    editingGame,
    onSave,
    onCancel,
}: GameFormProps) {
    const [form, setForm] = useState<GameDraft>(emptyDraft);

    const [errors, setErrors] = useState<FormErrors>({});

    // เมื่อกดแก้ไข ให้นำข้อมูลเดิมกลับมาใส่ในฟอร์ม
    useEffect(() => {
        if (editingGame) {
            setForm({
                name: editingGame.name,
                platform: editingGame.platform,
                hours: String(editingGame.hours),
                status: editingGame.status,
            });
        } else {
            setForm(emptyDraft);
        }

        setErrors({});
    }, [editingGame]);

    function handleChange(
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: undefined,
        }));
    }

    function validate(): boolean {
        const nextErrors: FormErrors = {};

        // ตรวจสอบชื่อเกม
        if (!form.name.trim()) {
            nextErrors.name = "กรุณากรอกชื่อเกม";
        }

        // ตรวจสอบแพลตฟอร์ม
        if (!form.platform) {
            nextErrors.platform = "กรุณาเลือกแพลตฟอร์ม";
        }

        // ตรวจสอบจำนวนชั่วโมง
        if (!form.hours) {
            nextErrors.hours = "กรุณากรอกจำนวนชั่วโมง";
        } else if (!/^[1-9]\d*$/.test(form.hours)) {
            nextErrors.hours =
                "จำนวนชั่วโมงต้องเป็นจำนวนเต็มบวก";
        }

        setErrors(nextErrors);

        return Object.keys(nextErrors).length === 0;
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        onSave(form);

        // ถ้าเป็นการเพิ่มเกม ให้ล้างฟอร์ม
        if (!editingGame) {
            setForm(emptyDraft);
        }

        setErrors({});
    }

    return (
        <form
            className="game-form"
            onSubmit={handleSubmit}
        >
            <h2>
                {editingGame
                    ? "แก้ไขเกม"
                    : "เพิ่มเกมที่ต้องการเล่น"}
            </h2>

            {/* ชื่อเกม */}
            <div className="form-group">
                <label htmlFor="name">
                    ชื่อเกม
                </label>

                <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="กรอกชื่อเกม"
                />

                {errors.name && (
                    <p className="form-error">
                        {errors.name}
                    </p>
                )}
            </div>

            {/* แพลตฟอร์ม */}
            <div className="form-group">
                <label htmlFor="platform">
                    แพลตฟอร์ม
                </label>

                <input
                    id="platform"
                    name="platform"
                    value={form.platform}
                    onChange={handleChange}
                    placeholder="กรอกแพลตฟอร์ม"
                >
                </input>

                {errors.platform && (
                    <p className="form-error">
                        {errors.platform}
                    </p>
                )}
            </div>

            {/* จำนวนชั่วโมง */}
            <div className="form-group">
                <label htmlFor="hours">
                    จำนวนชั่วโมงที่คาดว่าจะใช้เล่น
                </label>

                <input
                    id="hours"
                    name="hours"
                    type="number"
                    min="1"
                    step="1"
                    value={form.hours}
                    onChange={handleChange}
                    placeholder="เช่น 20"
                />

                {errors.hours && (
                    <p className="form-error">
                        {errors.hours}
                    </p>
                )}
            </div>

            {/* สถานะ */}
            <div className="form-group">
                <label htmlFor="status">
                    สถานะ
                </label>

                <select
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                    <option value="ยังไม่เริ่ม">
                        ยังไม่เริ่ม
                    </option>

                    <option value="กำลังเล่น">
                        กำลังเล่น
                    </option>

                    <option value="เล่นจบแล้ว">
                        เล่นจบแล้ว
                    </option>
                </select>
            </div>

            {/* ปุ่ม */}
            <div className="form-actions">
                <button
                    type="submit"
                    className="save-button"
                >
                    {editingGame
                        ? "บันทึกการแก้ไข"
                        : "เพิ่มเกม"}
                </button>

                {editingGame && (
                    <button
                        type="button"
                        className="cancel-button"
                        onClick={onCancel}
                    >
                        ยกเลิก
                    </button>
                )}
            </div>
        </form>
    );
}