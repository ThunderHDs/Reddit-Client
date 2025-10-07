describe('Reddit Client E2E Test', () => {
  it('should allow a user to change subreddit, filter posts, and view post details', () => {
    // 1. Visita la página principal de la aplicación
    cy.visit('http://localhost:3000/');

    // 2. Verifica que los posts iniciales (de 'popular') se cargan
    cy.contains('Loading posts...').should('not.exist');
    cy.get('.PostCard').should('have.length.greaterThan', 0);

    // 3. Cambia el subreddit usando el menú de filtros
    cy.get('.filters-button').click();
    cy.contains('button', 'reactjs').click();

    // 4. Verifica que la URL (o el contenido) ha cambiado y se cargan nuevos posts
    cy.get('.filters-button').should('contain.text', 'r/reactjs');
    cy.get('.PostCard').should('have.length.greaterThan', 0);

    // 5. Usa la barra de búsqueda para filtrar los posts mostrados
    // Supongamos que buscamos un post que contenga la palabra "hook"
    cy.get('input[placeholder="Search in Reddit by title or author"]').type('Activity');

    // Verifica que solo los posts que contienen "hook" son visibles
    // Esto es una simplificación, una prueba real podría ser más específica
    cy.get('.PostCard').each(($post) => {
      cy.wrap($post).should('contain.text', 'Activity');
    });

    // 6. Haz clic en el título del primer post filtrado
    cy.get('.PostCard').first().find('.post-title-link').click();

    // 7. Verifica que la navegación a la página de detalles fue exitosa
    cy.url().should('include', '/post/');
    cy.contains('h2', 'Comentarios').should('be.visible');

    // 8. Verifica que se cargaron los comentarios
    cy.get('.comment').should('have.length.greaterThan', 0);
  });
});