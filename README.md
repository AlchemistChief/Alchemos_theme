# Alchemos Theme

A versatile VS Code theme pack with three variants for any coding environment.

**Latest build:** [Download from Releases](https://github.com/AlchemistChief/Alchemos_theme/releases/latest)

<p align="center">
  <a href="images/preview_vscode.png" target="_blank">
    <img src="images/preview_vscode.png" alt="VS Code UI Preview" width="800">
  </a>
</p>

## Variants

- **Amoled Dark** - High contrast, deep blacks. Ideal for OLED and night coding.
- **Dark** - Softer dark mode. Easier on the eyes for long sessions.
- **Light** - Clean and bright. Best for daytime or well-lit spaces.

## Recommended Settings

Enable semantic highlighting for best syntax coloring:

```json
"editor.semanticHighlighting.enabled": true
```

Note: The visual difference varies by language, but it ensures accurate variable and function highlighting.

## Previews

<details>
<summary><b>Python</b></summary>
<br>
<img src="images/preview_python.png" alt="Python" width="800">
</details>

<details>
<summary><b>JavaScript</b></summary>
<br>
<img src="images/preview_javascript.png" alt="JavaScript" width="800">
</details>

<details>
<summary><b>TypeScript</b></summary>
<br>
<img src="images/preview_typescript.png" alt="TypeScript" width="800">
</details>

<details>
<summary><b>HTML</b></summary>
<br>
<img src="images/preview_html.png" alt="HTML" width="800">
</details>

<details>
<summary><b>CSS</b></summary>
<br>
<img src="images/preview_css.png" alt="CSS" width="800">
</details>

<details>
<summary><b>JSON</b></summary>
<br>
<img src="images/preview_json.png" alt="JSON" width="800">
</details>

<details>
<summary><b>Markdown</b></summary>
<br>
<img src="images/preview_markdown.png" alt="Markdown" width="800">
</details>

## Modifying & Building

Open source. Change the palette and build your own version.

**Prerequisites:** Node.js and npm.

**Steps:**
1. Clone the repo
2. Navigate to the project root
3. Install vsce: `npm install --save-dev @vscode/vsce`
4. Package: `npm run package`
5. Install the generated `.vsix` file via Extensions > `...` > **Install from VSIX**

## License

MIT. Free to use, modify, distribute.