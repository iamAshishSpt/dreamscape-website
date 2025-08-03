"use client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Footer from "../../components/Footer";

type FormValues = {
	title: string;
	location: string;
	subheading: string;
	image: FileList;
};
type UploadPayload = {
	title: string;
	location: string;
	subheading: string;
	imageUrl: string;
};

export default function UploadPage() {
	const [uploading, setUploading] = useState(false);
	const { register, handleSubmit, reset } = useForm<FormValues>();

	const mutation = useMutation({
		mutationFn: async (payload: UploadPayload) => {
			const res = await fetch("/api/slider", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			});

			if (!res.ok) throw new Error("Failed to upload to DB");
			return res.json();
		},
		onSuccess: () => {
			reset();
			toast.success("Slider uploaded successfully!");
		},
		onError: () => {
			toast.error("Failed to save metadata to DB.");
		},
	});

	const onSubmit = async (data: FormValues) => {
		try {
			setUploading(true);

			// Upload to Cloudinary
			const formData = new FormData();
			formData.append("file", data.image[0]);
			formData.append(
				"upload_preset",
				process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET ?? "",
			);

			const uploadRes = await fetch(
				process.env.NEXT_PUBLIC_CLOUDINARY_API_URL ?? "",
				{
					method: "POST",
					body: formData,
				},
			);
			const imageData = await uploadRes.json();

			if (!imageData.secure_url) throw new Error("Cloudinary upload failed");

			const payload = {
				title: data.title,
				location: data.location,
				subheading: data.subheading,
				imageUrl: imageData.secure_url,
			};

			mutation.mutate(payload);
		} catch (err) {
			console.error("Upload error:", err);
			toast.error("Upload failed. Check console for details.");
		} finally {
			setUploading(false);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-xl mx-auto pt-20 pb-8 px-6">
				<div className="bg-white p-8 rounded-lg shadow-lg">
					<h2 className="text-2xl font-bold mb-6 text-gray-800">
						Upload a New Slider Image
					</h2>
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
						<input
							{...register("title")}
							placeholder="Title"
							required
							className="w-full px-4 py-2 border rounded text-black placeholder:text-gray-500"
						/>
						<input
							{...register("location")}
							placeholder="Location"
							required
							className="w-full px-4 py-2 border rounded text-black placeholder:text-gray-500"
						/>
						<textarea
							{...register("subheading")}
							placeholder="Subheading"
							required
							className="w-full px-4 py-2 border rounded text-black placeholder:text-gray-500"
						/>
						<input
							type="file"
							accept="image/*"
							required
							{...register("image")}
							className="w-full text-black"
						/>
						<button
							type="submit"
							disabled={uploading}
							className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
						>
							{uploading ? "Uploading..." : "Submit"}
						</button>
					</form>
				</div>
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
}
