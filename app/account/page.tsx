import Box from '@/components/Box';
import Header from '@/components/Header';

const Account = () => {
	return (
		<div className='bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto'>
			<Header>
				<div className='mb-2 flex flex-col gap-y-6'>
					<h1 className='text-white text-3xl font-semibold'>Account</h1>
				</div>
			</Header>
			<Box
				className=' flex
                            justify-center
                            items-center
                            mt-72'>
				This feature is not yet implemented
			</Box>
		</div>
	);
};

export default Account;
