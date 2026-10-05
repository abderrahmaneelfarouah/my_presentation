import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECT_IMAGES } from '../utils/images';
import ProjectCard from './projects/ProjectCard';

const projects = [
	{
		title: 'Snake game legacy',
		description: 'Jeu web de Snake au style rétro, publié avec une démo jouable et son code source consultable.',
		link: 'https://snakegamelegacy.netlify.app',
		github: 'https://github.com/abderrahmaneelfarouah/retro-snake-game',
		image: PROJECT_IMAGES.SNAKE,
	},
	{
		title: 'Chi Fu Mi',
		description: 'Jeu pierre-papier-ciseaux développé en JavaScript. Essayez la démo ou consultez son implémentation dans le dépôt.',
		link: 'https://abderrahmaneelfarouah.github.io/chifoumi/',
		github: 'https://github.com/abderrahmaneelfarouah/chifoumi',
		image: PROJECT_IMAGES.CHIFOUMI,
	},
	{
		title: 'Neo Puzzle',
		description: 'Démo web d’un jeu de puzzle revisité, accompagnée de son dépôt de code source.',
		link: 'https://abderrahmaneelfarouah.github.io/puzzle/',
		github: 'https://github.com/abderrahmaneelfarouah/puzzle',
		image: PROJECT_IMAGES.PUZZLE,
	},
	{
		title: 'Pokédex',
		description: 'Application web consacrée aux 151 premiers Pokémon et à leurs caractéristiques, consultable en ligne avec son code source.',
		link: 'https://abderrahmaneelfarouah.github.io/pokemon-discovery/',
		github: 'https://github.com/abderrahmaneelfarouah/pokemon-discovery',
		image: PROJECT_IMAGES.POKEDEX,
	},
];

export default function Projects() {
	const carouselRef = useRef<HTMLDivElement>(null);
	const [scrollIndex, setScrollIndex] = useState(0);
	const [visibleCards, setVisibleCards] = useState(1);

	// Détermine le nombre de cartes visibles selon la largeur de l'écran
	const computeVisibleCards = () => {
		if (window.innerWidth >= 1024) return 3;
		if (window.innerWidth >= 640) return 2;
		return 1;
	};

	// Met à jour le nombre de cartes visibles lors du resize
	useEffect(() => {
		const handleResize = () => {
			const visible = computeVisibleCards();
			setVisibleCards(visible);
			// Ajuste l'index si besoin
			const maxIndex = Math.max(0, projects.length - visible);
			setScrollIndex(idx => Math.min(idx, maxIndex));
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const scrollToIndex = (idx: number) => {
			const maxIndex = Math.max(0, projects.length - visibleCards);
			const newIndex = Math.max(0, Math.min(idx, maxIndex));
			setScrollIndex(newIndex);
			if (carouselRef.current) {
				const card = carouselRef.current.querySelector<HTMLDivElement>('.carousel-card');
				if (card) {
					const gap = 24; // gap-6
					const scrollAmount = card.offsetWidth + gap;
					carouselRef.current.scrollTo({
						left: newIndex * scrollAmount,
						behavior: 'smooth',
					});
				}
			}
		};

	// Swipe tactile
	const touch = useRef({ startX: 0, scrollLeft: 0 });
	const onTouchStart = (e: React.TouchEvent) => {
		if (!carouselRef.current) return;
		touch.current.startX = e.touches[0].pageX;
		touch.current.scrollLeft = carouselRef.current.scrollLeft;
	};
	const onTouchMove = (e: React.TouchEvent) => {
		if (!carouselRef.current) return;
		const x = e.touches[0].pageX;
		const walk = touch.current.startX - x;
		carouselRef.current.scrollLeft = touch.current.scrollLeft + walk;
	};

	return (
		<section
			className="
				w-full
				py-4 sm:py-6 md:py-10 px-2 sm:px-4 md:px-8
				max-w-[768px] max-h-[1024px]
				sm:max-w-[800px] sm:max-h-[1280px]
				md:max-w-[1280px] md:max-h-[800px]
				mx-auto
				flex flex-col items-center
			"
		>
			<header className="mb-6 max-w-3xl text-center">
				<h1 className="text-2xl sm:text-3xl font-display font-bold text-text-main mb-3">
					Mes <span className="text-accent">projets personnels</span>
				</h1>
				<p className="text-text-secondary leading-relaxed">
					Quatre projets de démonstration : jeux web et application Pokédex. Chaque fiche présente le sujet du projet et donne accès à la démo ainsi qu’au dépôt de code source. Ce sont des projets personnels, pas des références de missions clients.
				</p>
			</header>
			<div className="relative w-full">
				<button
					className="absolute left-0 top-1/2 -translate-y-1/2 z-10 glass rounded-full p-2 shadow-glow-orange hover:shadow-glow-orange-hover transition-all disabled:opacity-30 border border-border-color hover:border-accent"
					onClick={() => scrollToIndex(scrollIndex - 1)}
					disabled={scrollIndex === 0}
					aria-label="Projet précédent"
				>
					<ChevronLeft size={28} className="text-accent" />
				</button>
				<div
					ref={carouselRef}
					className="
						flex gap-6 overflow-hidden snap-x snap-mandatory pb-4 w-full
					"
					style={{ WebkitOverflowScrolling: 'touch' }}
					onTouchStart={onTouchStart}
					onTouchMove={onTouchMove}
				>
					{projects.map((project) => (
						<div
							key={project.title}
							className="
								carousel-card
								min-w-[85%] sm:min-w-[340px] md:min-w-[350px] max-w-[350px]
								flex-shrink-0 snap-center
							"
							role="group"
							aria-label={project.title}
						>
							<ProjectCard {...project} />
						</div>
					))}
				</div>
				<button
					className="absolute right-0 top-1/2 -translate-y-1/2 z-10 glass rounded-full p-2 shadow-glow-orange hover:shadow-glow-orange-hover transition-all disabled:opacity-30 border border-border-color hover:border-accent"
					onClick={() => scrollToIndex(scrollIndex + 1)}
					disabled={scrollIndex >= projects.length - visibleCards}
					aria-label="Projet suivant"
				>
					<ChevronRight size={28} className="text-accent" />
				</button>
				<div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Pagination">
					{Array.from({ length: Math.max(1, projects.length - visibleCards + 1) }).map((_, idx) => (
						<button
							key={idx}
							type="button"
							onClick={() => scrollToIndex(idx)}
							aria-current={idx === scrollIndex ? 'true' : 'false'}
							aria-label={`Afficher les projets à partir du projet ${idx + 1}`}
							className={`w-2 h-2 rounded-full focus:outline-none transition-all${idx === scrollIndex ? ' bg-accent shadow-glow-orange' : ' bg-border-color hover:bg-accent/50'}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
