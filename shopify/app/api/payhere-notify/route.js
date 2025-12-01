// app/api/payhere-notify/route.js
import crypto from "crypto";

export async function POST(req, res) {
    const body = await req.json();

    const { merchant_id, order_id, payment_id, status_code, md5sig } = body;

    // Verify the signature
    const generatedSignature = generateMd5Signature(body);
    if (generatedSignature !== md5sig) {
        return new Response("Invalid signature", { status: 400 });
    }

    if (status_code === "2") {
        // Payment successful
        // Update your database or perform other actions
    } else {
        // Payment failed
    }

    return new Response("Payment notification received", { status: 200 });
}

function generateMd5Signature(data) {
    const hashString = `${data.merchant_id}${data.order_id}${data.amount}${data.currency}${data.status_code}${process.env.PAYHERE_SECRET}`;
    return crypto
        .createHash("md5")
        .update(hashString)
        .digest("hex")
        .toUpperCase();
}