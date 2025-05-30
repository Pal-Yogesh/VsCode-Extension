import { commands, ExtensionContext } from "vscode";
import { TodoPanel } from "./panels/TodoPanel";

export function activate(context: ExtensionContext) {
  // Add command to the extension context
  context.subscriptions.push(
    commands.registerCommand("to-do.run", () => {
      TodoPanel.render(context.extensionUri);
    })
  );
}