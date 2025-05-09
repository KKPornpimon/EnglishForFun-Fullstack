
import { NextResponse } from "next/server";
import { db } from "@/utils/connect_db";

export async function GET(request) {
    const promisePool = db.promise()
    const [rows, fields] = await promisePool.query("SELECT * FROM vocab_tb ORDER BY voc_id DESC LIMIT 10")

    if (rows.length === 0) {
        return NextResponse.json({ message: "No data found" }, { status: 404 })
    }
    return NextResponse.json(rows, {message: "Connect DB Success"} ,{ status: 200 })
}
