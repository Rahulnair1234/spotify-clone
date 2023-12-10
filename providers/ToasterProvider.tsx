'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';

// interface ToasterProviderProps {
// 	children: React.ReactNode;
// }
const ToasterProvider = () => {
	return (
		<Toaster
			toastOptions={{
				style: {
					background: '#333',
					color: '#fff',
				},
			}}
		/>
	);
};

export default ToasterProvider;
