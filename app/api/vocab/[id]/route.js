
import { NextResponse } from "next/server";
import { db } from "@/utils/connect_db";

export async function GET(request, { params }) {
    const { id } = await params
    const promisePool = db.promise()
    const [rows, fields] = await promisePool.query(
        "SELECT * FROM vocab_tb INNER JOIN vocab_type_tb ON vocab_tb.voc_type = vocab_type_tb.votype_id WHERE voc_id = ?", [id]
    )

    if (rows.length === 0) {
        return NextResponse.json({ message: "No data found" }, { status: 404 })
    }

    return NextResponse.json(rows[0], {message: "Connect DB by ID is Successfully"} ,{ status: 200 })
}