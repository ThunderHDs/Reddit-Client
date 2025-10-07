import { render, screen } from '@testing-library/react';
import PostCard from './PostCard';

describe('PostCard', () => {
    it('renders post data correctly', () => {
        const postProps = {
            title: "Test Title",
            author: "Test Author",
            comments: 123,
            upvotes: 456,
            timeAgo: "1 hour ago"
        };

        render(<PostCard {...postProps} />);

        // Comprueba que el título y el autor están en el documento
        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Author Test Author')).toBeInTheDocument();
        // Comprueba que los números se muestran
        expect(screen.getByText(/123/)).toBeInTheDocument(); // Usamos una expresión regular
        expect(screen.getByText(/456/)).toBeInTheDocument();
    });
});