// Displays an ability modifier with
// the appropriate plus or minus prefix.
export default function display_moodifier(mod) {
    if (mod < 0) {
        return `-${mod}`;
    }
    return `+${mod}`;
}