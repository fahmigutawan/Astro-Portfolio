export function boldHunter(text: string): string {
    return text.replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-yellow-700">$1</strong>');
}