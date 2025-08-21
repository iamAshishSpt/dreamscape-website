import Image from "next/image";
import { forwardRef } from "react";
import DestinationCard from "../components/TopDestination";
import type { Destination } from "../types/destination";
import "./styles.css";

const Card = forwardRef<
	HTMLDivElement,
	{
		id: string;
		frontSrc: string;
		frontAlt: string;
		destination: Destination;
	}
>(({ id, frontSrc, frontAlt, destination }, ref) => {
	return (
		<div className="card" id={id} ref={ref}>
			<div className="card-wrapper">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<Image
							priority
							src={frontSrc}
							alt={frontAlt}
							width={500}
							height={500}
						/>
					</div>
					<div className="flip-card-back">
						{/* <Image
							src="/images/manaslu.jpg"
							alt="manaslu"
							width={500}
							height={500}
							priority
						/>
						<p>{backText}</p>
						<p> 2 nights 3 days</p> */}

						<DestinationCard {...destination} />
					</div>
				</div>
			</div>
		</div>
	);
});
export default Card;
