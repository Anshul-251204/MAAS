"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export interface Slide {
	id: number;
	image: string;
	title?: string;
	description?: string;
}

interface ImageSliderProps {
	slides: Slide[];
	autoPlayInterval?: number;
	className?: string;
}

export function ImageSlider({ slides, autoPlayInterval = 3000, className }: ImageSliderProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);
	const [isHovered, setIsHovered] = useState(false);

	const goToSlide = useCallback((index: number) => {
		setCurrentIndex(index);
	}, []);

	const goToPrevious = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
	}, [slides.length]);

	const goToNext = useCallback(() => {
		setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
	}, [slides.length]);

	const toggleAutoPlay = () => {
		setIsAutoPlaying(!isAutoPlaying);
	};

	useEffect(() => {
		if (!isAutoPlaying || isHovered) return;

		const interval = setInterval(() => {
			goToNext();
		}, autoPlayInterval);

		return () => clearInterval(interval);
	}, [isAutoPlaying, isHovered, goToNext, autoPlayInterval]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") goToPrevious();
			if (e.key === "ArrowRight") goToNext();
			if (e.key === " ") {
				e.preventDefault();
				toggleAutoPlay();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [goToPrevious, goToNext]);

	return (
		<div
			className={cn("relative w-full max-w-7xl mx-auto", className)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="relative w-full aspect-[16/7] overflow-hidden rounded-xl bg-muted">
				{slides.map((slide, index) => (
					<div
						key={slide.id}
						className={cn(
							"absolute inset-0 transition-all duration-700 ease-in-out",
							index === currentIndex
								? "opacity-100 translate-x-0"
								: index < currentIndex
								? "opacity-0 -translate-x-full"
								: "opacity-0 translate-x-full"
						)}
					>
						<img
							src={slide.image || "/placeholder.svg"}
							alt={slide.title}
							className="w-full h-full object-cover"
						/>

						{/* Overlay gradient */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

						{/* Content */}
						<div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
							<h2 className="text-3xl md:text-5xl font-bold text-white mb-3 text-balance">
								{slide.title}
							</h2>
							<p className="text-base md:text-lg text-white/90 max-w-2xl text-pretty">
								{slide.description}
							</p>
						</div>
					</div>
				))}

				{/* Navigation buttons */}
				<Button
					variant="ghost"
					size="icon"
					className={cn(
						"absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-opacity duration-300",
						isHovered ? "opacity-100" : "opacity-0"
					)}
					onClick={goToPrevious}
					aria-label="Previous slide"
				>
					<ChevronLeft className="h-6 w-6" />
				</Button>

				<Button
					variant="ghost"
					size="icon"
					className={cn(
						"absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-opacity duration-300",
						isHovered ? "opacity-100" : "opacity-0"
					)}
					onClick={goToNext}
					aria-label="Next slide"
				>
					<ChevronRight className="h-6 w-6" />
				</Button>

				{/* Play/Pause button */}
				<Button
					variant="ghost"
					size="icon"
					className={cn(
						"absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-opacity duration-300",
						isHovered ? "opacity-100" : "opacity-0"
					)}
					onClick={toggleAutoPlay}
					aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
				>
					{isAutoPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
				</Button>
			</div>

			{/* Dot indicators */}
			<div className="flex items-center justify-center gap-2 mt-6">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={cn(
							"transition-all duration-300 rounded-full",
							index === currentIndex
								? "w-8 h-2 bg-primary"
								: "w-2 h-2 bg-foreground/30 hover:bg-muted-foreground/50"
						)}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>

			{/* Slide counter */}
			<div className="text-center mt-4 text-sm text-muted-foreground">
				{currentIndex + 1} / {slides.length}
			</div>
		</div>
	);
}
