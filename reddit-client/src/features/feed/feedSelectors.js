export const selectFilteredPosts = (allPosts, searchTerm, activeFilters) => {
    return allPosts.filter((post) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const searchMatch = 
            post.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            post.author.toLowerCase().includes(lowerCaseSearchTerm);
        const categoryMatch =
            activeFilters.length === 0 || activeFilters.includes(post.subreddit);
        return searchMatch && categoryMatch;
    });
};