import { Send, Mail, Phone, Download } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { contact } from '../data/content';
import { GithubIcon } from '../components/icons/GithubIcon';

export function Contact() {
	return (
		<div className='flex-1 bg-cream dark:bg-cream-dark'>
			<div className='mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24'>
				<SectionHeader eyebrow="Let's talk" heading='Contact' path='contact' />

				<div className='grid gap-4 sm:grid-cols-2 max-w-2xl'>
					<a
						href={`mailto:${contact.email}`}
						className='panel flex items-center gap-3'
					>
						<Mail size={18} className='text-accent' aria-hidden='true' />
						<div>
							<p className='font-mono text-xs uppercase tracking-wide text-accent-2'>
								Email
							</p>
							<p className='text-sm'>{contact.email}</p>
						</div>
					</a>

					<div className='panel flex items-center gap-3'>
						<Phone size={18} className='text-accent' aria-hidden='true' />
						<div>
							<p className='font-mono text-xs uppercase tracking-wide text-accent-2'>
								Phone
							</p>
							{contact.phones.map((phone) => (
								<a
									key={phone}
									href={`tel:${phone.replace(/\s+/g, '')}`}
									className='block text-sm hover:text-accent'
								>
									{phone}
								</a>
							))}
						</div>
					</div>

					<a
						href={contact.github}
						target='_blank'
						rel='noreferrer'
						className='panel flex items-center gap-3'
					>
						<GithubIcon size={18} className='text-accent' />
						<div>
							<p className='font-mono text-xs uppercase tracking-wide text-accent-2'>
								GitHub
							</p>
							<p className='text-sm'>@chulchivorn</p>
						</div>
					</a>

					<a
						href={contact.telegram}
						target='_blank'
						rel='noreferrer'
						className='panel flex items-center gap-3'
					>
						<Send size={18} className='text-accent' aria-hidden='true' />
						<div>
							<p className='font-mono text-xs uppercase tracking-wide text-accent-2'>
								Telegram
							</p>
							<p className='text-sm'>ChulChivorn</p>
						</div>
					</a>
				</div>

				<a
					href={contact.resume}
					download
					className='mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-sm text-white transition-colors hover:bg-accent/90'
				>
					<Download size={16} aria-hidden='true' />
					download resume
				</a>
			</div>
		</div>
	);
}
