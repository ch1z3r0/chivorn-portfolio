import { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Send, Mail, Moon, Sun, Download, Menu, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { contact } from '../data/content';
import { GithubIcon } from './icons/GithubIcon';

const links = [
	{ to: '/', label: 'Home' },
	{ to: '/about', label: 'About' },
	{ to: '/experience', label: 'Experience' },
	{ to: '/education', label: 'Education' },
	{ to: '/projects', label: 'Projects' },
	{ to: '/lessons', label: 'Lessons' },
	{ to: '/contact', label: 'Contact' },
];

export function Nav() {
	const { theme, toggleTheme } = useTheme();
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (!menuOpen) return;
		document.body.style.overflow = 'hidden';
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setMenuOpen(false);
		};
		window.addEventListener('keydown', onKeyDown);
		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [menuOpen]);

	return (
		<Fragment>
			<header className='sticky top-0 z-50 border-b border-black/10 bg-cream/90 backdrop-blur dark:border-white/10 dark:bg-cream-dark/90'>
				<nav
					aria-label='Primary'
					className='mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6'
				>
					<NavLink
						to='/'
						className='flex items-center gap-2 font-mono text-sm'
						aria-label='Home'
						onClick={() => setMenuOpen(false)}
					>
						<span
							className='inline-block h-2 w-2 rounded-full bg-accent-2'
							aria-hidden='true'
						/>
						<span>
							<span className='text-black/40 dark:text-white/40'>~/</span>{' '}
							@chulchivorn
						</span>
					</NavLink>

					<ul className='hidden flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm sm:flex'>
						{links.map((link) => (
							<li key={link.to}>
								<NavLink
									to={link.to}
									end={link.to === '/'}
									className={({ isActive }) =>
										`transition-colors hover:text-accent ${isActive ? 'text-accent' : 'text-black/70 dark:text-white/70'}`
									}
								>
									{link.label}
								</NavLink>
							</li>
						))}
					</ul>

					<div className='hidden items-center gap-3 sm:flex'>
						<a
							href={contact.github}
							target='_blank'
							rel='noreferrer'
							aria-label='GitHub'
							className='text-black/60 transition-colors hover:text-accent dark:text-white/60'
						>
							<GithubIcon size={18} />
						</a>
						<a
							href={contact.telegram}
							target='_blank'
							rel='noreferrer'
							aria-label='Telegram'
							className='text-black/60 transition-colors hover:text-accent dark:text-white/60'
						>
							<Send size={18} />
						</a>
						<a
							href={`mailto:${contact.email}`}
							aria-label='Email'
							className='text-black/60 transition-colors hover:text-accent dark:text-white/60'
						>
							<Mail size={18} />
						</a>
						<button
							type='button'
							onClick={toggleTheme}
							aria-label={
								theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
							}
							className='text-black/60 transition-colors hover:text-accent dark:text-white/60'
						>
							{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
						</button>
						<a
							href={contact.resume}
							download
							className='inline-flex items-center gap-1.5 rounded-md border border-black/15 px-3 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors hover:border-accent hover:text-accent dark:border-white/15'
						>
							<Download size={14} />
							resume
						</a>
					</div>

					<div className='flex items-center gap-3 sm:hidden'>
						<button
							type='button'
							onClick={toggleTheme}
							aria-label={
								theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
							}
							className='text-black/60 transition-colors hover:text-accent dark:text-white/60'
						>
							{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
						</button>
						<button
							type='button'
							onClick={() => setMenuOpen((v) => !v)}
							aria-label={menuOpen ? 'Close menu' : 'Open menu'}
							aria-expanded={menuOpen}
							aria-controls='mobile-menu'
							className='flex h-11 w-11 items-center justify-center text-black/70 transition-colors hover:text-accent dark:text-white/70'
						>
							{menuOpen ? <X size={22} /> : <Menu size={22} />}
						</button>
					</div>
				</nav>
			</header>

			<div
				id='mobile-menu'
				className={`fixed inset-x-0 top-[57px] bottom-0 z-40 bg-cream transition-[opacity,visibility] duration-200 dark:bg-cream-dark sm:hidden ${
					menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
				}`}
			>
				<div className='flex h-full flex-col justify-between overflow-y-auto px-6 py-8'>
					<ul className='flex flex-col gap-1 font-mono text-lg'>
						{links.map((link, i) => (
							<li
								key={link.to}
								className='border-b border-black/10 dark:border-white/10'
							>
								<NavLink
									to={link.to}
									end={link.to === '/'}
									onClick={() => setMenuOpen(false)}
									className={({ isActive }) =>
										`flex items-center gap-3 py-3.5 transition-colors ${isActive ? 'text-accent' : 'text-black/80 dark:text-white/80'}`
									}
								>
									<span className='text-xs text-black/30 dark:text-white/30'>
										{String(i).padStart(2, '0')}
									</span>
									{link.label}
								</NavLink>
							</li>
						))}
					</ul>

					<div className='flex flex-col gap-5 pt-8'>
						<a
							href={contact.resume}
							download
							className='inline-flex items-center justify-center gap-1.5 rounded-md border border-black/15 px-4 py-2.5 font-mono text-xs uppercase tracking-wide transition-colors hover:border-accent hover:text-accent dark:border-white/15'
						>
							<Download size={14} />
							resume
						</a>
						<div className='flex items-center justify-center gap-6'>
							<a
								href={contact.github}
								target='_blank'
								rel='noreferrer'
								aria-label='GitHub'
								className='text-black/60 transition-colors hover:text-accent dark:text-white/60'
							>
								<GithubIcon size={20} />
							</a>
							<a
								href={contact.telegram}
								target='_blank'
								rel='noreferrer'
								aria-label='Telegram'
								className='text-black/60 transition-colors hover:text-accent dark:text-white/60'
							>
								<Send size={20} />
							</a>
							<a
								href={`mailto:${contact.email}`}
								aria-label='Email'
								className='text-black/60 transition-colors hover:text-accent dark:text-white/60'
							>
								<Mail size={20} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
