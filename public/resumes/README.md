# Resume PDFs

Place your resume PDF files in this directory with the following names:

- `web-development-resume.pdf` - For Web Development positions
- `ai-ml-resume.pdf` - For AI/ML Engineering positions
- `software-engineer-resume.pdf` - For Software Engineering positions
- `data-science-resume.pdf` - For Data Science positions

## Important Notes:

1. **File Format**: All resumes must be in PDF format
2. **File Names**: Use the exact file names listed above (case-sensitive)
3. **File Size**: Keep PDF files under 5MB for optimal loading performance
4. **Content**: Ensure each resume is tailored for the specific job role

## Testing Without PDFs:

If you don't have PDFs ready yet, the download button will still work but the browser will show an error. To test:

1. Create sample PDF files with the names above
2. Or temporarily modify the paths in `src/components/ResumeModal.jsx` to point to existing files

## Future Enhancement:

Consider adding a fallback mechanism to open resumes in a new tab if download fails:
```javascript
window.open(resume.path, '_blank');
```
