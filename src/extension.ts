import * as vscode from 'vscode';
import { exec } from 'child_process';

let statusBarItem: vscode.StatusBarItem;

export function activate(context: vscode.ExtensionContext) {
    // Create status bar item with copy icon
    statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    statusBarItem.command = 'git-branch-copy.copyBranchName';
    statusBarItem.tooltip = 'Click to copy branch name';
    context.subscriptions.push(statusBarItem);

    // Register the copy command
    const copyCommand = vscode.commands.registerCommand('git-branch-copy.copyBranchName', async () => {
        const branchName = await getBranchName();
        if (branchName) {
            await vscode.env.clipboard.writeText(branchName);
            vscode.window.showInformationMessage(`Copied: ${branchName}`);
        } else {
            vscode.window.showWarningMessage('No git branch found');
        }
    });
    context.subscriptions.push(copyCommand);

    // Update status bar on start and when workspace changes
    updateStatusBar();
    
    // Watch for git changes
    const watcher = vscode.workspace.createFileSystemWatcher('**/.git/HEAD');
    watcher.onDidChange(() => updateStatusBar());
    watcher.onDidCreate(() => updateStatusBar());
    context.subscriptions.push(watcher);

    // Update when window focus changes
    vscode.window.onDidChangeWindowState(() => updateStatusBar());
}

async function getBranchName(): Promise<string | null> {
    const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
    if (!workspaceFolder) {
        return null;
    }

    return new Promise((resolve) => {
        exec('git rev-parse --abbrev-ref HEAD', { cwd: workspaceFolder.uri.fsPath }, (error, stdout) => {
            if (error) {
                resolve(null);
            } else {
                resolve(stdout.trim());
            }
        });
    });
}

async function updateStatusBar() {
    const branchName = await getBranchName();
    if (branchName) {
        statusBarItem.text = `$(copy) ${branchName}`;
        statusBarItem.show();
    } else {
        statusBarItem.hide();
    }
}

export function deactivate() {}
