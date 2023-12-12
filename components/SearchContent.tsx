'use client';

import { Song } from '@/types';
import MediaItem from './MediaItem';
import { data } from 'autoprefixer';

interface SearchContentProps {
	songs: Song[];
}
const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
	if (songs.length === 0) {
		return (
			<div
				className='flex
                            flex-col
                            gap-y-2
                            w-full
                            px-6
                            text-neutral-400'>
				No Songs Found
			</div>
		);
	}
	return (
		<div className='flex flex-col gap-y-2 w-full px-6'>
			{songs.map((song) => (
				<div
					className='flex items-center gap-x-4 w-full'
					key={song.id}>
					<div className='flex-1'>
						<MediaItem
							onClick={() => {}}
							data={song}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default SearchContent;
