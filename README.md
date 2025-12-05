# Git Branch Name Copy

A simple Visual Studio Code extension that allows you to copy the current git branch name with a single click.

Created by [Md. Tanvir Hossain Joarddar](https://github.com/mdtanvirhossainjoarddar)

![Git Branch Name Copy](https://img.shields.io/badge/version-1.0.0-blue.svg)
![VS Code](https://img.shields.io/badge/VS%20Code-1.85.0%2B-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## Features

- Copy the current git branch name to clipboard with one click
- Visual status bar indicator showing when in a git repository
- Automatic updates when switching branches
- Works with any git repository

## Usage

1. Install the extension from the VS Code Marketplace
2. Open a workspace that contains a git repository
3. Click on the copy icon in the status bar or use the command palette
4. The branch name will be copied to your clipboard

### Commands

- `Copy Git Branch Name`: Copies the current git branch name to the clipboard

### Status Bar

When you're in a git repository, you'll see a copy icon in the status bar. Clicking this icon will copy the current branch name to your clipboard. The tooltip shows the current branch name.

## Requirements

- Visual Studio Code 1.85.0 or higher
- Git initialized in your workspace

## Extension Settings

This extension contributes the following settings:

- None currently

## Known Issues

No known issues at this time.

## Release Notes

### 1.0.0

Initial release of Git Branch Name Copy extension.

## Working with the Extension

This extension is built with TypeScript and uses the VS Code extension API.

### For Developers

To run and test this extension locally:

1. Clone this repository
2. Run `npm install` in the terminal
3. Open the project in VS Code
4. Press F5 to run the extension in a new Extension Development Host window

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the VS Code team for the excellent extension API
- Inspired by the need to quickly copy branch names for commit messages and PR titles