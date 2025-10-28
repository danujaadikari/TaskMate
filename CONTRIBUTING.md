# Contributing to TaskMate

Thank you for your interest in contributing to TaskMate! We welcome contributions from the community.

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Your environment details (OS, Node version, etc.)

### Suggesting Features

We love new ideas! To suggest a feature:
1. Check if the feature has already been requested
2. Create an issue with the `enhancement` label
3. Describe the feature and its use case
4. Explain why it would be valuable to users

### Pull Requests

1. **Fork the repository**

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Write clear commit messages
   - Add tests if applicable
   - Update documentation

4. **Test your changes**
   ```bash
   # Backend
   cd backend
   npm test
   
   # Frontend
   cd frontend
   npm test
   ```

5. **Commit your changes**
   ```bash
   git commit -m "Add: Brief description of your changes"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Provide a clear description
   - Reference any related issues
   - Wait for review

## Code Style Guidelines

### Backend (Node.js)
- Use ES6+ features
- Follow ESLint configuration
- Use async/await for asynchronous code
- Add JSDoc comments for functions

### Frontend (React Native)
- Use functional components with hooks
- Follow React best practices
- Keep components small and focused
- Use meaningful variable names

## Commit Message Convention

We follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Build process or auxiliary tool changes

Example:
```
feat: Add AI-powered task suggestions
fix: Resolve authentication timeout issue
docs: Update API documentation
```

## Development Setup

See the [README.md](README.md) for detailed setup instructions.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the issue, not the person
- Help others learn and grow

## Questions?

Feel free to open an issue for any questions about contributing.

Thank you for making TaskMate better! 🎉
