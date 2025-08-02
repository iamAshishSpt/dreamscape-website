import { connectToDB } from "@/lib/mongodb";
import SliderImage from "@/models/SliderImage";

// Create a new slide (POST)
export async function POST(req: Request) {
	try {
		await connectToDB();
		const body = await req.json();

		const { title, location, subheading, imageUrl } = body;

		if (!title || !location || !subheading || !imageUrl) {
			return Response.json({ error: "Missing fields" }, { status: 400 });
		}

		const saved = await SliderImage.create({
			title,
			location,
			subheading,
			imageUrl,
		});

		return Response.json(saved, { status: 201 });
	} catch (err) {
		console.error("Upload error:", err);
		return Response.json({ error: "Failed to upload" }, { status: 500 });
	}
}

// Fetch all slides (GET)
export async function GET() {
	try {
		await connectToDB();
		const images = await SliderImage.find().sort({ createdAt: -1 }); // latest first
		return Response.json(images, { status: 200 });
	} catch (err) {
		console.error("GET /api/slider error:", err);
		return Response.json({ error: "Failed to fetch" }, { status: 500 });
	}
}
