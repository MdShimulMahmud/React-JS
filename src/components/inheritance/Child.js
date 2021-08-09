// eslint-disable-next-line no-unused-vars
export default function Child({ addEmoji }) {
    const newText = 'I am JavaScript language';
    return <div>{addEmoji ? addEmoji(newText, '💜') : newText}</div>;
}
