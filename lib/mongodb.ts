import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

declare global {
	var mongooseCache:
		| {
				conn: typeof mongoose | null;
				promise: Promise<typeof mongoose> | null;
		  }
		| undefined;
}

const globalWithMongoose = global as typeof globalThis & {
	mongooseCache?: {
		conn: typeof mongoose | null;
		promise: Promise<typeof mongoose> | null;
	};
};

if (!MONGODB_URI) {
	throw new Error("Please define the MONGODB_URI in your .env file");
}

const cached = globalWithMongoose.mongooseCache || {
	conn: null,
	promise: null,
};

async function connectToDB() {
	if (cached.conn) return cached.conn;

	if (!cached.promise) {
		cached.promise = mongoose.connect(MONGODB_URI, {
			dbName: "travel_tours_db",
		});
	}

	cached.conn = await cached.promise;
	globalWithMongoose.mongooseCache = cached;

	return cached.conn;
}

export { connectToDB };
