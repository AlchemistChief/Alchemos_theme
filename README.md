# Alchemos Theme

A versatile and visually striking theme pack for Visual Studio Code, designed to accommodate any coding environment. As shown in the project structure from image_76ef24.png, this extension includes everything needed to colorize your favorite languages.

## 🎨 Theme Variants

This extension includes three distinct themes to suit your preferences:

* **Amoled Dark:** A high-contrast, high-saturation theme with deep black backgrounds. Perfect for OLED displays and late-night coding.
* **Dark:** A balanced dark mode that is slightly lighter than the Amoled version, providing a softer look that reduces eye strain.
* **Light:** A clean and crisp bright theme, self-explanatory and ideal for daytime or brightly lit environments.

## ⚙️ Recommended Settings

To get the most accurate syntax coloring, it is highly recommended to enable semantic highlighting. Add the following line to your VS Code `settings.json` file:

```json
{
    "editor.semanticHighlighting.enabled": true
}

```

> **Note:** Depending on the language and the tokens provided by the language server, the visual difference might be subtle, but it ensures the highest accuracy for variable and function highlighting.

## 📸 Previews

*Click on the sections below to expand and view the high-resolution theme previews.*

## 🛠️ Modifying & Building

This project is open-source. You are welcome to modify the color palettes and build the extension yourself!

**Prerequisites:**
You will need [Node.js and npm](https://nodejs.org/) installed on your machine.

**Build Instructions:**

1. Clone or download this repository.
2. Open your terminal and navigate to the root folder of the project.
3. Install the VS Code Extension Manager (`vsce`) globally by running:
```bash
npm install -g @vscode/vsce

```


4. Package the theme into a runnable VS Code extension file by running:
```bash
npm run package

```


5. This will generate a `.vsix` file in your directory. You can install this file directly in VS Code by going to the Extensions view > clicking the `...` at the top right > **Install from VSIX**.

## 📄 License

This project is licensed under the **MIT License**. You are free to use, modify, distribute, and build upon this theme for your own projects.