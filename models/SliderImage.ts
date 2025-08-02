import mongoose from "mongoose";

const SliderImageSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		location: { type: String, required: true },
		subheading: { type: String, required: true },
		imageUrl: { type: String, required: true },
	},
	{ timestamps: true },
);

export default mongoose.models.SliderImage ||
	mongoose.model("SliderImage", SliderImageSchema);
