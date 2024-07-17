import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryCache, QueryClient } from "@tanstack/react-query";
import { isAxiosError } from "axios";

const queryConfig = {
	queries: {
		staleTime: 1000 * 60 * 5,
		retry: false,
	},
};

export const queryClient = new QueryClient({
	defaultOptions: queryConfig,
	queryCache: new QueryCache({
		onError: (error, query) => {
			if (query.state.data !== undefined && isAxiosError(error)) {
				console.error(`Something went wrong: ${error.message}`);
			}
		},
	}),
});

export const ReactQueryProvider = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);
};
