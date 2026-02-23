# Website Cloner

Clone and adapt website designs for your own projects.

## Description

This skill helps you analyze and recreate website designs by:
- Extracting design patterns and structure
- Identifying key UI components
- Generating equivalent HTML/CSS/JS code
- Adapting content for your use case

## Usage

Activate when user wants to:
- Clone a website's design
- Recreate a UI pattern
- Build a similar page with different content
- Analyze website structure

## Workflow

1. **Analyze Target** - Fetch and examine the target website
   - Use `web_fetch` to get page content
   - Use browser tools for screenshots if needed
   - Identify key sections and components

2. **Extract Structure** - Document the design patterns
   - Header/navigation layout
   - Content sections
   - Color scheme and typography
   - Interactive elements

3. **Plan Implementation** - Map target features to your needs
   - Identify which sections to keep/modify
   - Plan content substitutions
   - Note any functionality to replicate

4. **Generate Code** - Create the new website
   - HTML structure matching the layout
   - CSS styling (colors, fonts, spacing)
   - JavaScript for interactivity

5. **Test & Refine** - Verify the result
   - Open in browser to test
   - Compare with original
   - Adjust as needed

## Best Practices

- Focus on layout and UX patterns, not exact copying
- Always substitute your own content
- Respect copyright - clone structure, not assets
- Use your own images and branding
- Test responsiveness on multiple screen sizes

## Output Structure

```
website/
├── index.html      # Main page structure
├── styles.css      # Styling
├── app.js          # Interactivity
└── assets/         # Images, fonts (your own)
```

## Example Command

```
Clone the design of https://example.com for my product showcase
```

## Tags

website, clone, design, frontend, ui
