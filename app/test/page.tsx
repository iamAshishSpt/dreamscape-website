"use client";
import Image from "next/image";
import { useEffect } from "react";
import { runMenuAnimation } from "./menuAnimation";
import "./styles.css";

export default function TestPage() {
	useEffect(() => {
		const cleanup = runMenuAnimation();
		return () => {
			// runMenuAnimation returns cleanup if everything mounted correctly
			if (typeof cleanup === "function") cleanup();
		};
	}, []);
	return (
		<div className="body">
			<nav>
				<div className="logo">
					<a href="/"> Dream scape</a>
				</div>

				<div className="menu-toggle">
					<p id="menu-open">Menu</p>
					<p id="menu-close">Close</p>
				</div>
			</nav>

			<div className="menu-overlay">
				<div className="menu-content">
					<div className="menu-items">
						<div className="col-lg">
							<div className="menu-preview-img">
								<img src="/images/everest-footer.jpg" alt="menu-preview-img" />
							</div>
						</div>

						<div className="col-sm">
							<div className="menu-links">
								<div className="link">
									<a href="/" data-img="/images/everest-footer.jpg">
										Home
									</a>
								</div>
								<div className="link">
									<a href="/" data-img="/images/manaslu.jpg">
										Destination
									</a>
								</div>
								<div className="link">
									<a href="/" data-img="/images/machhapuchhre.jpg">
										About us
									</a>
								</div>
								<div className="link">
									<a href="/" data-img="/images/everest.jpg">
										Photo gallery
									</a>
								</div>
							</div>

							<div className="menu-social">
								<div className="social">
									{" "}
									<a href="/">Facebook</a>
								</div>
								<div className="social">
									{" "}
									<a href="/">Instagram</a>
								</div>
								<div className="social">
									{" "}
									<a href="/">Twitter</a>
								</div>
								<div className="social">
									{" "}
									<a href="/">Youtube</a>
								</div>
							</div>
						</div>
					</div>
					<div className="menu-footer">
						<div className="col-lg">
							<a href="/">Dreame scape</a>
						</div>

						<div className="col-sm">
							<a href="/"> Test</a>
							<a href="/"> Test 2</a>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<section className="hero">
					<div className="hero-img">
						<Image
							src="/images/everest.jpg"
							alt="hero-img"
							className="object-cover"
							fill
						/>
					</div>
					<h1>Annapurna Himalayas Treeking</h1>
				</section>
			</div>
		</div>
	);
}
