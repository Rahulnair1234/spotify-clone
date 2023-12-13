import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Song } from '@/types';

const useLoadSongUrl = (song: Song) => {
	const supabaseclient = useSupabaseClient();
	if (!song) {
		return '';
	}
	const { data: songData } = supabaseclient.storage
		.from('songs')
		.getPublicUrl(song.song_path);
	return songData.publicUrl;
};
export default useLoadSongUrl;
