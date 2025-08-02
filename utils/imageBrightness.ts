export async function isImageDark(src: string): Promise<boolean> {
	return new Promise((resolve) => {
		console.log("ImageBrightness: Analyzing image:", src);

		const img = new Image();
		img.crossOrigin = "anonymous";

		img.onload = () => {
			console.log(
				"ImageBrightness: Image loaded successfully, dimensions:",
				img.width,
				"x",
				img.height,
			);

			const canvas = document.createElement("canvas");
			canvas.width = img.width;
			canvas.height = img.height;

			const ctx = canvas.getContext("2d");
			if (!ctx) {
				console.error("ImageBrightness: Could not get canvas context");
				return resolve(false);
			}

			try {
				ctx.drawImage(img, 0, 0);
				const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
				let totalBrightness = 0;

				for (let i = 0; i < imageData.data.length; i += 4) {
					const r = imageData.data[i];
					const g = imageData.data[i + 1];
					const b = imageData.data[i + 2];
					const brightness = (r * 299 + g * 587 + b * 114) / 1000;
					totalBrightness += brightness;
				}

				const average = totalBrightness / (imageData.data.length / 4);
				console.log(
					"ImageBrightness: Average brightness:",
					average,
					"isDark:",
					average < 128,
				);
				resolve(average < 128); // brightness threshold
			} catch (error) {
				console.error("ImageBrightness: Error analyzing image data:", error);
				resolve(false); // fallback to light background
			}
		};

		img.onerror = (error) => {
			console.error("ImageBrightness: Error loading image:", error);
			resolve(false); // fallback to light background
		};

		img.src = src;
	});
}
