import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	// The command has been defined in the package.json file
	let disposable = vscode.commands.registerCommand('multiple-cursor-same-case.matchCaseCursor', () => {
		vscode.commands.executeCommand('toggleFindCaseSensitive');
		vscode.commands.executeCommand('editor.action.addSelectionToNextFindMatch');
		vscode.commands.executeCommand('toggleFindCaseSensitive');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
