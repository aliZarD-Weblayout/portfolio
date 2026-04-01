import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';

export const postsContext = React.createContext<Array<any>>([]);

export function PostsContextProvider({ children }: { children: React.ReactNode }) {
    const posts = usePostsData();
    return <postsContext.Provider value={posts}>{children}</postsContext.Provider>;
}