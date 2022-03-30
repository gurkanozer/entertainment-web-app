# Entertainment Web App Project

What packages did i used?
- Styled components for styling
- Redux for state management
- react-hooks-form and yup for form validations
- framer-motion for animations
- Swiperjs for slider
- react-router-dom for routing

I used expressjs and mongodb for backend.

Backend API:
- api/movies returns array of movie objects.
-- movie:{ title, thumbnail, year, category, rating, istrending }
- api/login returns an auth object.
-- auth:{ token, isAuthenticated, user, isLoading, bookmarked }
- api/signup returns an auth object.
-- auth:{ token, isAuthenticated, user, isLoading, bookmarked }
